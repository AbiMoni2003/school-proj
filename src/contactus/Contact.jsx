import React, { Fragment } from 'react'
import logo from '../assets/CFlogo.png'
import { Link } from 'react-router-dom'
function Contact() {
  return (
   <Fragment>
    <div className='whole-div'>
        <header className='home-header'>
          <nav>
        <a href='https://www.corpfield.com/' target='_blank'>   <img src={logo} alt='Company Logo' className='header-logo' /></a> 
            <ul >
         <li className="nav-item"><Link to="/home">Home</Link></li>
              <li className="nav-item">About</li>
              <li className="nav-item"><Link to="/contact">Contact</Link></li>
            </ul>
            <div className='home-btn-div'>
              <Link to="/login">
                <button className="home-btn">Login</button>
              </Link>
            </div>
          </nav>
        </header>
        </div>
        <label>
              <input type='checkbox'/>
            <div className="toggle" >
                <span className="top-line common"></span>
                <span className="mid-line common"></span>
                <span className="bottom-line common"></span>
                 </div>
              <div className='slide'>
              <h1>Menu</h1>
              <ul>
              <li><Link to="/home">Home</Link></li>
                <li>About</li>
                <li><Link to="/contact">Contact</Link></li>  
                </ul>
              </div>
            </label>
            
   </Fragment>
  )
}

export default Contact