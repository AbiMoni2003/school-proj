import React, { Fragment, useEffect, useState } from 'react'
import './Style.css';
function Register() {
    const [step,setStep]=useState(1);
    const [usrname,setUsrname]=useState("");
    const [number,setNumber]=useState("");
    const [generateotp,setGenerateotp]=useState("");
    const [x,setX]=useState("none");
    const [otp,setOtp]=useState("");
    const [password,setPassword]=useState("");
    const [conpassword,setConpassword]=useState("");
    const [msg,setMsg]=useState("");
    const [y,setY]=useState("none");
    const [z,setZ]=useState("inline-block");
   
    

   const handleotp=()=>{
    if (!usrname.trim()) {
        alert("Username cannot be empty");
        return;
    }
    if(number.length==10){
        const generateotp=Math.floor(1000 + Math.random() * 9000).toString();
        console.log(generateotp); 
        setGenerateotp(generateotp);
        alert("OTP send to your mobile number..")   
        setX("inline-block");
        setZ("none");
    }
    else{
        alert("Not a valid  Mobile Number")
    }   
   };
   const verifyotp=()=>{
    if(generateotp==otp){
        alert("verified successfully");
        setX("none")
        setY("inline-block")
    }
    else{
        alert("OTP is not valid");
    }
   }
   const checkpassword = () => {
    if (password.length < 8) {
        setMsg("Password is too short");
    } else if (password !== conpassword) {
        setMsg("Password Mismatch");
    } else {
        setMsg(""); 
    }
};

  return (
    <Fragment>
       <div className='top-div'>
        <h1>Register</h1>
        <div style={{display:z}}>
        <input type="text" name="username" className="name" placeholder='Username' value={usrname} onChange={(e)=>setUsrname(e.target.value)}/><br/>
        <input type="text" name="phonenumber" className="number" placeholder='Phone Number' maxLength={10} value={number} onChange={(e)=>setNumber(e.target.value)}/><br/>
        <button onClick={handleotp}>Get OTP</button><br/>
        </div>
        <div style={{display:x}}>
        <input  type="text" value={otp} onChange={(e)=>setOtp(e.target.value)} maxLength={4}/>
        <button onClick={verifyotp}>Verify OTP</button>
        </div>
        <div style={{display:y}}>
        <input type="password" className="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/><br/>
        <input type="password" className='cnfmpassword' value={conpassword} onChange={(e)=>setConpassword(e.target.value)} placeholder='Confrm Password'/><br/>
        <p>{msg}</p>
        <button onClick={checkpassword}>Register</button>
        </div>
       </div>
       
    </Fragment>
  )
}

export default Register