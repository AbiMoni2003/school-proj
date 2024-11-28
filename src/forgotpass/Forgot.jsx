import React, { Fragment, useState } from 'react'
import logo from '../assets/CFlogo.png'
import '../forgotpass/Forgo.css';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Forgot() {
    const [number,setNumber]=useState("");
    const [otp,setOtp]=useState("");
    const [generateotp,setGenerateotp]=useState("");
    const [newpass,setNewpass]=useState("");
    const navigate = useNavigate();

    const getotp=()=>{
        if(!number){
            alert("Enter number");
            return;
        }
        if (number.length === 10) {
            const otp = Math.floor(1000 + Math.random() * 9000).toString();
            console.log(otp);
            setGenerateotp(otp);
            alert("OTP sent to your mobile number.");
        } else {
            alert("Not a valid mobile number");
        }
    };
    const verifyotp=()=>{
        if(!otp){
            alert("Enter the OTP");
            return;
        }
        if(otp!==generateotp){
            alert("Invalid OTP");
        }
        else{
            alert("OTP varified successfully");
        }
    }
    const resetpass=()=>{
        if(!number){
            alert("Enter the number");
            return;
        }
        if(number.length!==10){
            alert("Enter a valid Number");
            return;
        }
        if(!otp){
            alert("Enter the OTP");
            return;
        }
        if(otp!==generateotp){
            alert("Invalid OTP");
            return;
        }
        if(!newpass){
            alert("Enter the new password");
            return;
        }
        if(newpass.length<8){
            alert("Password must be at least 8 characters long");
        }
        else{
            alert("Password Changed Successfully")
            navigate('/login');
        }
    }
  return (
   <Fragment>
     <header>
    <img src={logo} alt="School Logo" className="header-logo" />
    <h1>School Management</h1>
    </header>
    <div className='forgot-top-div'>
        <h1>Forgot Password</h1>
        <input type="text"  placeholder="📞 Phone Number" maxLength={10} value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <button className='btn' onClick={getotp}>Get OTP</button>
        <div className="otp-container forgot-otp">
                <input type="text" maxLength={4} placeholder=" 🔗 Enter OTP" className="otp-input" value={otp} onChange={(e)=>setOtp(e.target.value)} />
                <button className="btn small-btn" onClick={verifyotp}>Verify OTP</button>
            </div>
            <input type="text" placeholder="🔐 New Password" className='newpass' value={newpass} onChange={(e)=>setNewpass(e.target.value)}/>
            <button className='btn' onClick={resetpass}>Reset Password</button>
            <p><Link to="/login">⬅ Back to Log in</Link></p>
    </div>
   </Fragment>
  )
}

export default Forgot