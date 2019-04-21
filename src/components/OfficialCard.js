import React, { Component } from 'react'
import Img from 'react-image'
import VisibilitySensor from 'react-visibility-sensor'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

import defaultPhoto from '../assets/images/default-photo.jpg'

export default class OfficialCard extends Component {
  mapAddress = (address) => {
    const formattedAddress = `${address.line1} ${address.line2} ${address.line3} ${address.city} ${address.state} ${address.zip}`
    const encodedAddress = encodeURIComponent(formattedAddress)
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`

    // console.log(formattedAddress, encodedAddress, mapUrl)
    window.open(mapUrl)
  }

  render () {
    const { office, official } = this.props

    // Some tweaks for best Ballotpedia search results
    let searchName
    switch (official.name) {
      case 'Donald J. Trump':
        searchName = 'Donald Trump'; break;
      default:
        searchName = official.name
    }

    const party = 
      official.party ?
        official.party === 'Unknown' ? 'Unknown Party' : official.party
        : 'Unknown Party'

    let officeName = office.name
    switch (office.name) {
      case 'governmentOfficer':
        officeName = 'Government Officer'; break;
      case 'legislatorUpperBody':
        officeName = 'Legislator, Upper Body'; break;
      case 'headofGovernment':
        officeName = 'Head of Government'; break;
      default:
    }

    return (
      <div className='official-card card mb-4'>
        <div className='card-header'>
          <VisibilitySensor>
            <Img
              className='img-thumbnail official-profile-image float-left'
              src={official.photoUrl ? [official.photoUrl, defaultPhoto] : defaultPhoto}
              loader={<Img className='img-thumbnail official-profile-image float-left' src={defaultPhoto} />}
            />
          </VisibilitySensor>

          <p className='text-right'>
            <span className='official-name'>{official.name}</span>
            <br />
            <span className='office-name'>{officeName}</span>
            <br />

            <span className='office-party'>
              { party.includes('Republican') && <Icon icon='republican' color='#E91D0E' /> }
              { party.includes('Democrat') && <Icon icon='democrat' color='#232066' /> }
              <span className='icon-text'>{party}</span>
            </span>

          </p>
        </div>

        <div className='card-body'>
          <div className='row'>
            <div className='col'>
              <address>
                {
                  official.address && official.address.length > 0 &&
                  <p>
                    
                      { official.address[0].line1 !== '' && <span>{official.address[0].line1}<br /></span> }
                      { official.address[0].line2 !== '' && <span>{official.address[0].line2}<br /></span> }
                      { official.address[0].line3 !== '' && <span>{official.address[0].line3}<br />></span> }
                      <span>{official.address[0].city}, {official.address[0].state} {official.address[0].zip}<br /></span>
                    
                  </p>
                }

                {
                  official.phones && official.phones.length > 0 &&
                  <>
                    <Icon icon='phone' />
                    <a className='icon-text' href={`tel:${official.phones[0]}`}>{official.phones[0]}</a>
                    <br />
                  </>
                }
              </address>
            </div>
          </div>
          
          {/* <pre>{JSON.stringify(official, null, 2)}</pre> */}
        </div>

        <div className='card-footer'>
          <div className='text-center'>
            {
              <a title='Search on Ballotpedia' className='btn btn-link' href={`https://ballotpedia.org/wiki/index.php?search=${searchName}`} target='_blank' rel='noopener noreferrer'>
                <Icon icon='vote-yea' size='2x' />
              </a>
            }

            {
              official.address && official.address.length > 0 &&
              <span title='View on Map' className='btn btn-link' onClick={() => this.mapAddress(official.address[0]) }>
                <Icon icon='map-marker-alt' size='2x' />
              </span>
            }
            
            {
              official.phones && official.phones.length > 0 &&
                <a title={`Call: ${official.phones[0]}`} className='btn btn-link' href={`tel://${official.phones[0]}`}>
                  <Icon icon='phone' size='2x' />
                </a>
            }

            {
              official.urls && official.urls.length > 0 &&
                <a title={`Visit website: ${official.urls[0]}`} className='btn btn-link' href={official.urls[0]} target='_blank' rel='noopener noreferrer'>
                  <Icon icon='link' size='2x' />
                </a>
            }

            {
              official.channels && official.channels.length > 0 &&
              official.channels.map(channel => {
                let icon = null
                let url = null
                let appUrl = null

                switch (channel.type) {
                  case 'Facebook':
                    icon = <Icon icon={['fab', 'facebook']} size='2x' />
                    url = `https://fb.me/${channel.id}`
                    // Have to do extra work to convert page name to page ID; not now
                    // appUrl = `fb://profile?id=${channel.id}`
                    appUrl = url
                    break;
                  case 'Twitter':
                    icon = <Icon icon={['fab', 'twitter']} size='2x' />
                    url = `https://twitter.com/${channel.id}`
                    appUrl = `twitter://user?screen_name=${channel.id}`
                    break;
                  case 'YouTube':
                    icon = <Icon icon={['fab', 'youtube']} size='2x' />
                    url = `https://youtube.com/user/${channel.id}`
                    appUrl = url
                    break;
                  default:
                    icon = null
                }

                return (
                  <span key={channel.type + channel.id}>
                      {
                        icon &&
                        <a title={`${channel.type}: ${channel.id}`} className='btn btn-link' key={channel.type + channel.id} href={/Mobi|Android/i.test(navigator.userAgent) ? appUrl : url} target='_blank' rel='noopener noreferrer'>
                          {icon}
                        </a>
                      }
                  </span>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
