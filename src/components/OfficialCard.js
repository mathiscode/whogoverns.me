import React, { Component } from 'react'
import Img from 'react-image'
import VisibilitySensor from 'react-visibility-sensor'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

import defaultPhoto from '../assets/images/default-photo.jpg'

export default class OfficialCard extends Component {
  render () {
    const { office, official } = this.props
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
              decode={false}
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
            <div className='col-sm'>
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

            <div className='col-sm text-right'>
              {
                official.urls && official.urls.length > 0 &&
                <>
                  <a className='icon-text-left' href={official.urls[0]} target='_blank' rel='noopener noreferrer'>Visit Website</a>
                  <Icon icon='globe-americas' />
                  <br />
                </>
              }
              
              {
                official.channels && official.channels.length > 0 &&
                official.channels.map(channel => {
                  let icon = null
                  let url = null

                  switch (channel.type) {
                    case 'Facebook':
                      icon = <Icon icon={['fab', 'facebook']} />
                      url = `https://fb.me/${channel.id}`
                      break;
                    case 'Twitter':
                      icon = <Icon icon={['fab', 'twitter']} />
                      url = `https://twitter.com/${channel.id}`
                      break;
                    case 'YouTube':
                      icon = <Icon icon={['fab', 'youtube']} />
                      url = `https://youtube.com/user/${channel.id}`
                      break;
                    default:
                      icon = null
                  }

                  return (
                    <React.Fragment key={channel.type + channel.id}>
                      {
                        icon &&
                        <>
                          <a className='icon-text-left' href={url} target='_blank' rel='noopener noreferrer'>{channel.id}</a>
                          {icon}
                          <br />
                        </>
                      }
                    </React.Fragment>
                  )
                })
              }
            </div>
          </div>
          
          {/* <pre>{JSON.stringify(official, null, 2)}</pre> */}
        </div>
      </div>
    )
  }
}
