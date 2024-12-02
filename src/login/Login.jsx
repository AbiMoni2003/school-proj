import React, { Fragment, useState } from 'react'
import logo from '../assets/CFlogo.png'
import holo from '../assets/home.svg';
import '../assets/Style.css';
import {Link} from 'react-router-dom';

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
        <img src={logo} alt='logo' className='header-logo'/>
        <h1>School Management</h1>
        <Link to="/home"><img src={holo} className='home-logo'/></Link> 
       </header>
       <div className='login-top-div'>
        <h1>Login</h1>
        <input type="text"  placeholder='👤 Username'  value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="password" placeholder='🔐 Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <p className='login-forgot'><Link to="/forgot">Forgot Password?</Link></p>
        <button className='login-btn' onClick={loginvalidate}>Login</button>
        <p className='login-dont'>Don't have an account?<Link to="/register"> Sign up</Link></p>
       </div>
    </Fragment>
  )
}

export default Login;