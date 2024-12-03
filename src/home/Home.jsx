import React, { Fragment,useState } from 'react'
import logo from '../assets/CFlogo.png'
import image from '../assets/schoolimg.jpg'
import { Link,useNavigate } from 'react-router-dom'

function Home() {
const [schoolName,setSchoolName]=useState("");
const [error,setError]=useState("");
const navigate=useNavigate();

const schoolValidate=()=>{
  if(!schoolName){
    setError("Enter a valid Name");
  }
  else{
    navigate("/register", { state: { schoolName } });
  }

}


  return (
    <Fragment>
    <div className='whole-div'>
        <header className='home-header'>
          <nav>
        <a href='https://www.corpfield.com/' target='_blank'>   <img src={logo} alt='Company Logo' className='header-logo' /></a> 
            <ul >
              <li className="nav-item">Home</li>
              <li className="nav-item">About</li>
              <li className="nav-item">Contact</li>
            </ul>
            <div className='home-btn-div'>
              <Link to="/login">
                <button className="home-btn">Login</button>
              </Link>
            </div>
            <input type='checkbox' id='check'   />
            <button htmlFor='check' className='check-box'>
              <i className='fas fa-bars'></i>
            </button>
          </nav>
        </header>
        </div>
        <div className='body-div'>
          <div className="home-body-div div1"><img src={image}/></div>
          <div className="home-body-div div2">
            <h6>Welcome to School Management</h6>
            <div  className='school-input-div'>
              <p> Enter School name</p>
              <input type='text' className='school-input-box' value={schoolName} onChange={(e)=>setSchoolName(e.target.value)}/>
              <p style={{color:"red"}}>{error}</p>
            <button onClick={schoolValidate}>Submit</button>
            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default Home