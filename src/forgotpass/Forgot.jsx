import React, { Fragment } from 'react'
import logo from '../assets/CFlogo.png'
import '../forgotpass/Forgo.css';
import {Link} from 'react-router-dom';


function Forgot() {
  return (
   <Fragment>
     <header>
    <img src={logo} alt="School Logo" className="header-logo" />
    <h1>School Management</h1>
    </header>
    <div className='forgot-top-div'>
        <h1>Forgot Password</h1>
        <input type="text"  placeholder="📞 Phone Number" maxLength={10}/>
        <button className='btn'>Get OTP</button>
        <div className="otp-container forgot-otp">
                <input
                    type="text"
                    maxLength={4}
                    placeholder=" 🔗 Enter OTP"
                    className="otp-input"
                />
                <button className="btn small-btn">Verify OTP</button>
            </div>
            <input type="text" placeholder="🔐 New Password" className='newpass' />
            <button className='btn'>Reset Password</button>
            <p><a><Link to="/login">⬅ Back to log in</Link></a></p>
    </div>
   </Fragment>
  )
}

export default Forgot