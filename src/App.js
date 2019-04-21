import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

import keys from './config/keys'
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

  handleHashChange = () => {
    // console.log(window.location.hash)
    // this.setState({ divisionID: window.location.hash })
  }

  componentDidMount = () => {
    window.addEventListener('hashchange', this.handleHashChange)
    window.addEventListener('scroll', e => {
      // if (window.scrollY > 107) document.querySelector('.sidebar').style.top = '100px'
      // const wrapper = document.querySelector('.search-results-wrapper')
      // const group = wrapper.closest('.list-group')
      // const hash = wrapper.getAttribute('id')
      // console.log(window.scrollY, { wrapper, group, hash })
    })

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
    } catch (e) {
      console.error(e)
    }
  }

  anchorClick = e => {
    // const group = e.target.closest('.list-group')
    // const item = e.target.closest('.list-group-item')
    // const hash = item.getAttribute('href')
    // console.log(group, item, hash)
    
    // group.querySelectorAll('.list-group-item').forEach(currentItem => currentItem.classList.remove('active'))
    // item.classList.add('active')

    // if(window.history.pushState) {
    //   window.history.pushState(null, null, hash);
    // } else {
    //   window.location.hash = hash;
    // }
  }

  scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Who Governs Me?</title>
          <script src={MapsAPIUrl}></script>
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
              { /* Done messing with navigation for now. Didn't want to resort to react-router. */ }
              {/* <div className='col-lg-3'>
                <StickyBox className='sidebar'>
                  <div className='card mt-4'>
                    <div className='list-group' onClick={this.anchorClick}>
                      {
                        this.state.representatives.divisions.map(division => {
                          if (!division.offices || division.offices.length === 0) return

                          return (
                            <AnchorLink
                              key={division.name}
                              offset={70}
                              href={`#${division.name.toLowerCase().replace(/%[0-9A-F]{2}/gi, '').replace(/\s/g, '_').replace(/'/g, '')}`}
                              className={classNames(
                                'list-group-item list-group-item-action',
                                // {
                                //   active: `#${division.name.toLowerCase().replace(/%[0-9A-F]{2}/gi, '').replace(/\s/g, '_')}` === this.state.divisionID
                                // }
                              )}
                            >
                                <span>{division.name !== 'United States' ? division.name : 'Federal'}</span>
                            </AnchorLink>
                          )
                        })
                      }
                    </div>
                  </div>
                </StickyBox>
              </div> */}

              <div className='col'>
                {
                  this.state.representatives.divisions.map(division => {
                    if (!division.offices || division.offices.length === 0) return null

                    return (
                      <section key={division.name} id={division.name.toLowerCase().replace(/%[0-9A-F]{2}/gi, '').replace(/\s/g, '_').replace(/'/g, '')}>
                        <div className='card mt-4'>
                          <div className='card-header bg-dark text-white'>
                            <h3>
                              {division.name !== 'United States' ? division.name : 'Federal'}
                              <span title='Go to Top' className='float-right' style={{ cursor: 'pointer' }} onClick={this.scrollToTop}><Icon icon='angle-double-up' /></span>
                            </h3>
                          </div>
                          <div className='card-body'>
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

                {/* <div style={{ height: '500px' }} /> */ }
                { /* Make scrolling to last section scroll properly */ }
              </div>
            </div>
          }

          {/* <pre>{JSON.stringify(this.state.representatives, null, 2)}</pre> */}
          { !this.state.isLoading && <small className='float-right'><em>Data provided by <a href='https://developers.google.com/civic-information' target='_blank' rel='noopener noreferrer'>Google Civic Information</a></em></small> }
        </div>
      </>
    )
  }
}

export default App
