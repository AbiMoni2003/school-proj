import React, { Fragment, useState } from 'react'
import logo from '../assets/CFlogo.png'
import '../login/Logi-Style.css';
import {Link} from 'react-router-dom';

function Login() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const loginvalidate=()=>{
    if(username==""){
      alert("Username is Empty");
    }
    else if(password==""){
      alert("Password is Empty")
    }
    else{
      
    }
  }
  return (
    <Fragment>
       <header>
        <img src={logo} alt='logo' className='header-logo'/>
        <h1>School Management</h1>
       </header>
       <div className='login-top-div'>
        <h1>Login</h1>
        <input type="text"  placeholder='👤 username'  value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="password" placeholder='🔐 password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <p className='login-forgot'><a><u><Link to="/forgot">forgot password?</Link></u></a></p>
        <button className='login-btn' onClick={loginvalidate}>Login</button>
        <p className='login-dont'>Don't have an account?<a><u><Link to="/register"> Sign up</Link> </u></a></p>
       </div>
    </Fragment>
  )
}

export default Login;