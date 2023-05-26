
import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.scss'

function Navbar(props) {
  return (
    <nav>
        <div className="navLogo">
            <p style={{color: '#EC9F05'}}>Crunchy</p>
            <p style={{color: '#8EA604'}}>Companion</p>
        </div>
        <div className="navSearch">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 21L16.65 16.65" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className='navSearchInput'>
                <input placeholder='Search Snacks...'></input>
            </div>
        </div>
        <div className="navLogin">
            <button>Login</button>
            <button>Sign Up</button>
        </div>
    </nav>
  )
}

Navbar.propTypes = {}

export default Navbar
