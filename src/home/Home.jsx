import React, { Fragment,useState } from 'react'
import logo from '../assets/CFlogo.png'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <Fragment>
    <div className='whole-div'>
        <header className='home-header'>
          <nav>
        <a href='https://www.corpfield.com/' target='_blank'>   <img src={logo} alt='Company Logo' className='header-logo' /></a> 
            <ul >
              <li className="nav-item">Home</li>
              <li className="nav-item">About</li>
              <li className="nav-item">Contact</li>
            </ul>
            <div className='home-btn-div'>
              <Link to="/login">
                <button className="home-btn">Login</button>
              </Link>
            </div>
            <input type='checkbox' id='check'   />
            <label htmlFor='check' className='check-box'>
              <i className='fas fa-bars'></i>
            </label>
          </nav>
        </header>
        </div>
        
    </Fragment>
  )
}

export default Home