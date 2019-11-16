/*
  App: WhoGoverns.me
  Author: J.R. Mathis <https://github.com/mathiscode/whogoverns.me>
  License: See LICENSE.md

  Description:
    This app pulls Google Civic data to assist citizens in contacting their representatives.
*/

import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { Fab, Action } from 'react-tiny-fab'
import 'react-tiny-fab/dist/styles.css'

import keys from './config/keys.json'
import Google from './lib/google-api'

import Navbar from './components/Navbar'
import LoadingSpinner from './components/LoadingSpinner'
import AddressBar from './components/AddressBar'
import OfficialCard from './components/OfficialCard'

const MapsAPIUrl = `https://maps.googleapis.com/maps/api/js?key=${keys.PLACES_API_KEY}&libraries=places`

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
    keys.GOOGLE_ANALYTICS_TRACKING_ID = process.env.GOOGLE_ANALYTICS_TRACKING_ID || keys.GOOGLE_ANALYTICS_TRACKING_ID || ''

    const actionStyle = {
      backgroundColor: '#2222aa'
    }

    return (
      <>
        <Helmet>
          <script src={MapsAPIUrl}></script>

          {
            keys.ADSENSE_DATA_AD_CLIENT &&
            <script data-ad-client={keys.ADSENSE_DATA_AD_CLIENT} async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          }

          {
            keys.GOOGLE_ANALYTICS_TRACKING_ID &&
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${keys.GOOGLE_ANALYTICS_TRACKING_ID}`}></script>
          }

          {
            keys.GOOGLE_ANALYTICS_TRACKING_ID &&
            <script>
              {
                `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${keys.GOOGLE_ANALYTICS_TRACKING_ID}');
              `}
            </script>
          }
        </Helmet>
        
        <Navbar />

        <div className='container address-search-container'>
          {
            this.state.showAddressBar &&
            <>
              <AddressBar 
                onChange={this.onChange}
              />
            </>
          }
        </div>
        
        <div className='container search-results-wrapper'>
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

        <footer className='footer mt-auto py-3'>
          <div className='container'>
            <a href='https://github.com/mathiscode/whogoverns.me' target='_blank' rel='noopener noreferrer'>Made with <Icon icon='heart' color='#d00' /> by J.R. Mathis</a>
            <small className='float-right'><em>Data provided by <a href='https://developers.google.com/civic-information' target='_blank' rel='noopener noreferrer'>Google Civic Information</a></em></small>
          </div>
        </footer>

        <Fab
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
              <Action text='Buy me a beer' style={actionStyle} onClick={() => window.open('https://beerpay.io/mathiscode/whogoverns.me', '_blank')}><Icon icon='beer' /></Action>
            ]
          }
        />
      </>
    )
  }
}

export default App
