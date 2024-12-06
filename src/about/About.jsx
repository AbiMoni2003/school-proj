import React, { Fragment } from 'react'
import logo from '../assets/CFlogo.png'
import School from '../assets/newabout5.png';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

function About() {
  return (
    <Fragment>
          <div className='whole-div'>
        <header className='home-header'>
          <nav>
        <a href='https://www.corpfield.com/' target='_blank'>   <img src={logo} alt='Company Logo' className='header-logo' /></a> 
            <ul >
              <li className="nav-item"><Link to="/home">Home</Link></li>
              <li className="nav-item"><Link to="/about">About</Link></li>
           <li className="nav-item"> <Link to="/contact">Contact</Link>  </li>
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
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>  
                </ul>
              </div>
            </label>
        <div className="card">
                <div className="content">
                    <div className="heading">Our Dream is Global Learning Transformation</div>
                    <div className="para">
                        <p>Corpfield is team organisation, a passionate lifelong learner, and Maria Sanchez,
                            
                             a visionary educator.With a foundation rooted in creativity, collaboration, and 
                             excellence, Kawruh stands as a beacon for lifelong learners, educators, and 
                             institutions striving for better learning outcomes. Together, we aim to inspire 
                             change, foster innovation, and build a community that thrives on shared knowledge
                              and growth.
                            Your success is our inspiration, and we are proud to be part of your journey
                             toward a brighter future!</p>
                    </div>
                </div>
                <div className="schoolimage">
                    <img
                        src={School}
                        alt="School Image"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </div>
            <div className="stats-container">
                <div className="stat-card">
                    <h3>3.5</h3>
                    <p>Years Experience</p>
                </div>
                <div className="stat-card">
                    <h3>23</h3>
                    <p>Project Challenges</p>
                </div>
                <div className="stat-card">
                    <h3>430+</h3>
                    <p>Positive Reviews</p>
                </div>
                <div className="stat-card">
                    <h3>100+</h3>
                    <p>Trusted Clints</p>
                </div>
            </div>
            <Footer/>
    </Fragment>
  )
}

export default About