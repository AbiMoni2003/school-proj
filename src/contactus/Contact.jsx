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
            <div className="container">
                <div className="contactinfo">
                    <div className="box">
                        <div className="icon"> <i class="fa-solid fa-location-dot"></i></div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>#520A/1, Kesava Thirupapuram,<br/>
                                MS Road Vettunimadam,<br/>
                                Nagercoil - 629003</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i class="fa-solid fa-envelope"></i></div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>info@corpfield.com</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i class="fa-solid fa-phone"></i></div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>+91-9003031143</p>
                        </div>
                    </div>
                </div>
                <div className="contactform">
                    <form>
                        <h2> Send Message</h2>
                        <div className="inputbox">
                            <input type="text"  placeholder='Write your name '/>
                           
                        </div>
                        <div className="inputbox">
                            <input type="text" placeholder='Write your email'/>
                           
                            </div>
                            <div className="inputbox">
                               <input type="text" placeholder='Write Your message' className='text-area' />
                                
                                </div>
                                <button>Submit</button>
                    </form>
                </div>
            </div>
               </Fragment>
  )
}

export default Contact