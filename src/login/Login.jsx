import React, { Fragment, useState } from 'react'
import logo from '../assets/CFlogo.png'
import holo from '../assets/home.svg';
import '../assets/Style.css';
import {Link} from 'react-router-dom';
import sli1 from '../assets/hand.svg';


function Login() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const loginvalidate=()=>{
   if(!username){
    alert("Username is empty");
    return;
   }
   if(!password){
    alert("Password is empty");
   }
   else{
    alert("Login Successfully");
   }
  }
  return (
    <Fragment>
       <header className='head-rlf'>
       <a href='https://www.corpfield.com/' target='_blank'>   <img src={logo} alt='Company Logo' className='header-logo' /></a> 
       <h1>School Management</h1>
        <Link to="/home"><img src={holo} className='home-logo'/></Link> 
       </header>
       <div className="login-whole-div">
       <div className='login-top-div login-top-div1'>
        <img src={sli1}/>
       </div>
       <div className='login-top-div login-top-div2'>
        <h1>Login</h1>
        <div class="input-wrapper">
                        <i class="fas fa-user"></i>
        <input type="text"  placeholder='Username'  value={username} onChange={(e)=>setUsername(e.target.value)}/></div>
        <div class="input-wrapper">
                        <i class="fas fa-lock"></i>
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} /></div>
        <p className='login-forgot'><Link to="/forgot">Forgot Password?</Link></p>
        <button className='login-btn' onClick={loginvalidate}>Login</button>
        <p className='login-dont'>Don't have an account?<Link to="/register"> Sign up</Link></p>
       </div>
       </div>
    </Fragment>
  )
}

export default Login;