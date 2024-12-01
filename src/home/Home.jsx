import React, { Fragment,useState } from 'react'
import logo from '../assets/CFlogo.png'
import { Link } from 'react-router-dom'

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Fragment>
      <div className='whole-div'>
        <header className='home-header'>
          <nav>
            <img src={logo} alt='Company Logo' className='header-logo' />
            <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
              <li className="nav-item">Home</li>
              <li className="nav-item">About</li>
              <li className="nav-item">Contact</li>
            </ul>
            <div>
              <Link to="/register">
                <button className="home-btn">Sign Up</button>
              </Link>
              <Link to="/login">
                <button className="home-btn">Login</button>
              </Link>
            </div>
            <input type='checkbox' id='check' checked={isMenuOpen} onChange={toggleMenu} />
            <label htmlFor='check' className='check-box' onClick={toggleMenu}>
              <i className='fas fa-bars'></i>
            </label>
          </nav>
        </header>
        <div>
          {/* Additional content can go here */}
        </div>
      </div>
    </Fragment>
  )
}

export default Home