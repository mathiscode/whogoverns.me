import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

export default function Navbar(props) {
  return (
    <nav id='navbar' className='navbar sticky-top navbar-expand-lg navbar-dark bg-dark'>
      <button className='navbar-brand navbar-title btn btn-link animated slideInLeft'>
        <Icon icon='gavel' />
        <span className='icon-text'>Who Governs Me?</span>
      </button>
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item active'>
          <a className='nav-link btn btn-link' href='https://github.com/mathiscode/whogoverns.me' target='_blank' rel='noopener noreferrer'>
            Made with {<Icon icon='heart' color='#d00' />} by J.R. Mathis
          </a>
        </li>
      </ul>
    </nav>
  )
}
