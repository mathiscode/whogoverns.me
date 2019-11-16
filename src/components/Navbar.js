import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const topCities = [
  'New York, NY',
  'Los Angeles, CA',
  'Chicago, IL'
]

export default function Navbar(props) {
  const urlParams = new URLSearchParams(window.location.search)

  return (
    <nav id='navbar' className='navbar sticky-top navbar-expand-lg navbar-dark bg-dark'>
      <button className='navbar-brand navbar-title btn btn-link animated slideInLeft'>
        <Icon icon='gavel' />
        <span className='icon-text'>Who Governs Me?</span>
      </button>

      <div id="navbarMenu" className='collapse navbar-collapse'>
        <ul className='navbar-nav ml-auto animated slideInRight'>

          {
            topCities.map(city => {
              return (
                <li key={city} className={`nav-item ${urlParams.get('address') === city ? 'active' : '' }`}>
                  <a className='nav-link btn btn-link' href={`?address=${city}`}>
                    <Icon icon='city' />
                    <span style={{ marginLeft: '10px' }}>{city}</span>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}
