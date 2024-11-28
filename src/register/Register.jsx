import React, { Fragment, useState } from 'react';
import './Regis-Style.css';
import logo from '../assets/CFlogo.png'

function Register() {
    const [usrname, setUsrname] = useState("");
    const [number, setNumber] = useState("");
    const [generateotp, setGenerateotp] = useState("");
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConpassword] = useState("");
    const [msg, setMsg] = useState("");

    const getotp = () => {
        if (!usrname.trim()) {
            alert("Username cannot be empty");
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
    const verifyotp = () => {
        if (!otp) {
            alert("Please enter the OTP");
            return;
        }
        if (otp !== generateotp) {
            alert("Invalid OTP");
        } else {
            alert("OTP verified successfully");
        }
    };
    
    

    const validateAllFields = () => {
        if (!usrname.trim()) {
            alert("Username cannot be empty");
            return false;
        }
        if (number.length !== 10) {
            alert("Please enter a valid 10-digit phone number");
            return false;
        }
        if (generateotp === "") {
            alert("Please generate an OTP");
            return false;
        }
        if (otp !== generateotp) {
            alert("Invalid OTP. Please verify.");
            return false;
        }
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
        }
    };

    return (
        <Fragment>
       <header>
    <img src={logo} alt="School Logo" className="header-logo" />
    <h1>School Management</h1>
    </header>
        <div className="top-div">
            <h1>Register</h1>
            <div className="input-container">
                <input
                    type="text"
                    name="username"
                    className="name"
                    placeholder= "👤 Username"
                    value={usrname}
                    onChange={(e) => setUsrname(e.target.value)}
                />
                <input
                    type="text"
                    name="phonenumber"
                    className="number"
                    placeholder="📞 Phone Number"
                    maxLength={10}
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <button onClick={getotp} className="btn">Get OTP</button>
            </div>

            <div className="otp-container">
                <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={4}
                    placeholder=" 🔗 Enter OTP"
                    className="otp-input"
                />
                <button onClick={verifyotp} className="btn small-btn">Verify OTP</button>
            </div>

            <div className="password-container">
                <input
                    type="password"
                    className="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder=" 🔐 Password"
                />
                <input
                    type="password"
                    className="cnfmpassword"
                    value={conpassword}
                    onChange={(e) => setConpassword(e.target.value)}
                    placeholder=" 🗝️ Confirm Password"
                />
                <p className="error-msg">{msg}</p>
                <button onClick={handleRegister} className="btn register-btn">Register</button>
            </div>
            <p>Have already an account?<a><u> Login here</u></a></p>
        </div>
        </Fragment>
    );
}

export default Register;
