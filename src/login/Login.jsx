import React, { Fragment } from 'react'
import logo from '../assets/CFlogo.png'
import '../login/Logi-Style.css';

function Login() {
  return (
    <Fragment>
       <header>
        <img src={logo} alt='logo' className='header-logo'/>
        <h1>School Management</h1>
       </header>
       <div className='login-top-div'>
        <h1>Login</h1>
        <input type="text"  placeholder='👤 username'  />
        <input type="password" placeholder='🔐 password'  />
        <p className='login-forgot'><a><u>forgot password?</u></a></p>
        <button className='login-btn'>Login</button>
        <p className='login-dont'>Don't have an account?<a><u> Sign up</u></a></p>
       </div>
    </Fragment>
  )
}

export default Login;