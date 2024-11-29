import React, { Fragment } from 'react'
import logo from '../assets/CFlogo.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Fragment>
        <div className='whole-div'>
          <header className='home-header'>
            <nav>
                <ul>
                    <li><img src={logo} alt="School Logo" className="header-logo" /></li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                   <Link to="/register"><li><button className='home-btn'>SignUp</button></li></Link> 
                  <Link to="/login" className='link2'> <li><button className="home-btn">Login</button></li></Link>
                </ul>
            </nav>
          </header>
        </div>
    </Fragment>
  )
}

export default Home