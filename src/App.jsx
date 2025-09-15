import React from 'react'
import './index.css'

export default () => {
  return (
    <main className='retired-page'>
      <div className='retired-card'>
        <h1 className='retired-title'>WhoGoverns.me is retired</h1>

        <a className='retired-link' href='https://www.congress.gov/members/find-your-member' rel='noopener noreferrer'>
          https://www.congress.gov/members/find-your-member
        </a>

        <hr />

        <p className='retired-lede'>
          The Google Civic Information API has changed significantly, and this app no longer works as built.
        </p>

        <p className='retired-body'>
          Reviving the project will require a full rewrite and a fresh approach to data sources and UI. Until then, this
          site is archived for history.
        </p>

        <a className='retired-link' href='https://github.com/mathiscode' rel='noopener noreferrer'>
          Jay Mathis
        </a>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', marginTop: '1rem' }}>
          <a href='https://jaymath.is' rel='noopener noreferrer'>
            https://jaymath.is
          </a>

          <a href='https://github.com/mathiscode/whogoverns.me' rel='noopener noreferrer'>
            https://github.com/mathiscode/whogoverns.me
          </a>
        </div>
      </div>
      <footer className='retired-footer'>
        <small>
          Originally built to help citizens find and contact their representatives. See repository for details.
        </small>
      </footer>
    </main>
  )
}