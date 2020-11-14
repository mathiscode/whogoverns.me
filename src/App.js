/*
  App: WhoGoverns.me
  Author: Jay Mathis <https://github.com/mathiscode/whogoverns.me>
  License: See LICENSE.md

  Description:
    This app pulls Google Civic data to assist citizens in contacting their representatives.
*/

import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { Fab, Action } from 'react-tiny-fab'
import 'react-tiny-fab/dist/styles.css'

import Google from './lib/google-api'

import Navbar from './components/Navbar'
import LoadingSpinner from './components/LoadingSpinner'
import AddressBar from './components/AddressBar'
import OfficialCard from './components/OfficialCard'

const MapsAPIUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`

class App extends Component {
  state = {
    isLoading: false,
    showAddressBar: false,
    representatives: null
  }

  componentDidMount = () => {
    let interval;
    const checkGMapsLoaded = () => {
      if (window.google) {
        this.setState({ showAddressBar: true }, () => {
          document.querySelector('.location-search-input').focus()
          document.querySelector('.location-search-input').addEventListener('focus', e => {
            e.target.select()
          })
        })

        clearInterval(interval)
      }
    }

    interval = setInterval(checkGMapsLoaded, 100)

    fetch('https://json.geoiplookup.io')
      .then(res => res.json())
      .then(data => {
        if (data.country_code !== 'US') {
          window.alert('Please note that this app only provides data for the United States')
        }
      })
      .catch(err => {
        console.log(err)
      })

    setInterval(this.checkFABState, 200)
  }

  checkFABState = () => {
    // Stop animating the FAB if active
    const openFAB = document.querySelector('.rtf')
    if (openFAB.classList.contains('open')) document.querySelector('.rtf--mb').classList.remove('animate__animated', 'animate__infinite', 'animate__slower', 'animate__bounce')
    if (openFAB.classList.contains('closed')) document.querySelector('.rtf--mb').classList.add('animate__animated', 'animate__infinite', 'animate__slower', 'animate__bounce')
  }

  onChange = async (address, latLng) => {
    // console.log(address, latLng)

    try {
      this.setState({ isLoading: true, representatives: null })
      let results = await Google.representatives({ address })

      let divisions = []
      Object.values(results.data.divisions).forEach(division => {
        divisions.push({ name: division.name, offices: division.officeIndices })
      })

      const usa = divisions.find(div => div.name === 'United States')
      divisions = divisions.filter(div => div.name !== 'United States')
      divisions.unshift(usa)

      this.setState({
        isLoading: false,
        representatives: { divisions, offices: results.data.offices, officials: results.data.officials }
      })

      document.querySelector('.address-search-container').classList.add('done')
      document.querySelector('.location-search-input').blur()

      document.title = `Who Governs Me? • ${address}`
    } catch (e) {
      console.error(e)
    }
  }

  scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  render() {
    const actionStyle = {
      backgroundColor: '#2222aa'
    }

    return (
      <>
        <Helmet>
          <script src={MapsAPIUrl}></script>

          {
            process.env.REACT_APP_GOOGLE_ANALYTICS_ID &&
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GOOGLE_ANALYTICS_ID}`}></script>
          }

          {
            process.env.REACT_APP_GOOGLE_ANALYTICS_ID &&
            <script>
              {
                `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.REACT_APP_GOOGLE_ANALYTICS_ID}');
              `}
            </script>
          }
        </Helmet>
        
        <Navbar />

        <div className='container address-search-container'>
          <h1 className='address-bar-title'>Research the people you're supposed to trust:</h1>
          { !this.state.showAddressBar && <LoadingSpinner size={64} /> }
          {
            this.state.showAddressBar &&
              <div className='animate__animated animate__fadeInDownBig'>
                <AddressBar 
                  onChange={this.onChange}
                />
              </div>
          }
        </div>
        
        <div className='container search-results-wrapper'>
          <h3 className="quote animate__animated animate__backInUp animate__delay-1s">"It's not the voting that's democracy; it's the counting." <small>&mdash; Tom Stoppard</small></h3>

          {
            this.state.isLoading && <LoadingSpinner />
          }

          {
            this.state.representatives &&
            <div className='row'>
              <div className='col'>
                {
                  this.state.representatives.divisions.map(division => {
                    if (!division.offices || division.offices.length === 0) return null

                    let safeDivisionName = division.name.replace(/([' | ])+/g, '_')

                    return (
                      <section key={division.name} id={'SECTION_' + safeDivisionName}>
                        <div className='card mt-4'>
                          <div className='card-header bg-dark text-white'>
                            <h3>
                              <Icon icon='landmark' />
                              <span style={{ marginLeft: '20px' }}>{division.name !== 'United States' ? division.name : 'Federal'}</span>
                            </h3>
                          </div>
                          
                          <div id={safeDivisionName} className='card-body collapse show'>
                            <div className='card-deck'>
                              {
                                division.offices && division.offices.map(officeIndex => {
                                  const office = this.state.representatives.offices[officeIndex]
                                  const officials = office.officialIndices.map(officialIndex => this.state.representatives.officials[officialIndex])

                                  return (
                                    <React.Fragment key={officeIndex}>
                                      
                                        {
                                          officials.map(official => {
                                            return (
                                              <OfficialCard key={official.name + Math.random()} office={office} official={official} />
                                            )
                                          })
                                        }
                                      
                                    </React.Fragment>
                                  )
                                })
                              }
                            </div>
                          </div>
                        </div>
                      </section>
                    )
                  })
                }
              </div>
            </div>
          }

          {/* <pre>{JSON.stringify(this.state.representatives, null, 2)}</pre> */}
        </div>

        <footer className='footer mt-auto py-3 animate__animated animate__slideInUp'>
          <div className='container'>
            <a href='https://github.com/sponsors/mathiscode' target='_blank' rel='noopener noreferrer'>Made with <Icon icon='heart' color='#d00' /> by <span style={{ textDecoration: 'underline' }}>Jay R. Mathis</span></a>
            <small className='float-right'><em>Data provided by <a href='https://developers.google.com/civic-information' target='_blank' rel='noopener noreferrer'>Google Civic Information</a></em></small>
          </div>
        </footer>

        <Fab
          // className='rtf closed animate__animated animate__infinite animate__slower animate__bounce'
          // onClick={e => {
          //   const container = document.querySelector('ul.rtf')

          //   if (Array.from(container.classList).includes('closed')) {
          //     container.classList.remove('closed')
          //     container.classList.add('open')
          //   } else {
          //     container.classList.remove('open')
          //     container.classList.add('closed')
          //   }
          // }}
          alwaysShowTitle={true}
          event='click'
          icon={<Icon icon='bars' />}
          mainButtonStyles={{ backgroundColor: '#aa0000' }}
          children={
            [
              <Action text='Search' style={actionStyle}
                onClick={() => {
                  this.scrollToTop()
                  document.querySelector('.location-search-input').focus()
                }}
              >
                <Icon icon='search' />
              </Action>,

              <Action text='Register to Vote' style={actionStyle} onClick={() => window.open('https://www.vote.org/register-to-vote/', '_blank')}><Icon icon='vote-yea' /></Action>,
              <Action text='Buy me a beer' style={actionStyle} onClick={() => window.open('https://github.com/sponsors/mathiscode', '_blank')}><Icon icon='beer' /></Action>
            ]
          }
        />
      </>
    )
  }
}

export default App
