import React, { Fragment, useState } from 'react';
import '../assets/Style.css';
import logo from '../assets/CFlogo.png';
import holo from '../assets/home.svg';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import sli1 from '../assets/hand.svg';

function Register() {
    const location=useLocation();
    const schoolName=location.state?.schoolName || "School Manage";
    const [usrname, setUsrname] = useState("");
    const [number, setNumber] = useState("");
    const [mail,setMail]=useState("");
    const [generateotp, setGenerateotp] = useState("");
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConpassword] = useState("");
    const [msg, setMsg] = useState("");
    const [step, setStep] = useState(1); 
  

    const getotp = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!usrname.trim()) {
            alert("Username cannot be empty");
            return;
        }
        if (number.length !== 10) {
           alert("Enter a valid number");
           return;
        }
        if(!mail){
            alert("Enter a mail id");
            return;
        } 
        if(!emailRegex.test(mail)){
            alert("Enter a valid mail id");
            return;
        }
        else {
            const otp = Math.floor(1000 + Math.random() * 9000).toString();
            console.log(otp);
            setGenerateotp(otp);
            alert("OTP sent to your mobile number.");
            setStep(2);
        }
    };

    const verifyotp = () => {
        if (!otp) {
            alert("Please enter the OTP");
            return;
        }
        if (otp !== generateotp) {
            alert("Invalid OTP");
        } else {
            alert("OTP verified successfully");
            // Move to the next step
        }
    };

    const validateAllFields = () => {
        if (password.length < 8) {
            alert("Password must be at least 8 characters long");
            return false;
        }
        if (password !== conpassword) {
            alert("Password mismatch");
            return false;
        }
        return true;
    };

    const handleRegister = () => {
        if (validateAllFields()) {
            alert("Registration Successful");
            setUsrname("");
            setNumber("");
            setGenerateotp("");
            setOtp("");
            setPassword("");
            setConpassword("");
            setMsg("");
            setStep(1); // Reset to the initial step
        }
    };

    return (
        <Fragment>
            <header className='head-rlf'>
            <a href='https://www.corpfield.com/' target='_blank'>   <img src={logo} alt='Company Logo' className='header-logo' /></a> 
            <h1 className='regi-head'>{schoolName}</h1>
                <Link to="/home"><img src={holo} className='home-logo' /></Link>
            </header>
           <div className="register-whole-div">
          <div className="top-div top-div1">
            <img src={sli1}/>
          </div>
            <div className="top-div top-div2">
                <h1>Register</h1>

               
                {step === 1 && (
                    <div className="input-container">
                        <div class="input-wrapper">
                        <i class="fas fa-user"></i>
                        <input
                            type="text"
                            name="username"
                            className="name"
                            placeholder="Username"
                            value={usrname}
                            onChange={(e) => setUsrname(e.target.value)}
                        />
                        </div>
                        <div class="input-wrapper">
                        <i class="fas fa-phone"></i>
                        <input
                            type="text"
                            name="phonenumber"
                            className="number "
                            placeholder="Phone Number"
                            maxLength={10}
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                        </div>
                        <div class="input-wrapper">
                        <i class="fas fa-envelope"></i>
                       <input type="email" 
                       placeholder='Email'
                       value={mail}
                       onChange={(e)=>setMail(e.target.value)}
                       />
                       </div>
                        <button onClick={getotp} className="btn">Get OTP</button>
                    </div>
                )}

              {step === 2 && (
                <div>
                    <div className="otp-container">
                    <div class="input-wrapper">
                    <i class="fas fa-link"></i>
                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            maxLength={4}
                            placeholder="Enter OTP"
                            className="otp-input"
                        /></div>
                        <button onClick={verifyotp} className="btn small-btn">Verify OTP</button>
                    </div>
                    <div className="password-container">
                    <div class="input-wrapper">
                    <i class="fas fa-lock"></i>
                        <input
                            type="password"
                            className="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        </div>
                        <div class="input-wrapper">
                        <i class="fas fa-key"></i>
                        <input
                            type="password"
                            className="cnfmpassword"
                            value={conpassword}
                            onChange={(e) => setConpassword(e.target.value)}
                            placeholder="Confirm Password"
                        />
                        </div>
                        <p className="error-msg">{msg}</p>
                        <button onClick={handleRegister} className="btn register-btn">Register</button>
                    </div>
                    </div>
                  )}

                <p>Have already an account?<Link to="/login"> Login here</Link></p>
            </div>
            </div>
        </Fragment>
    );
}

export default Register;
