import React, { Fragment,useState } from 'react'
import logo from '../assets/CFlogo.png'
import image from '../assets/schoolimg.jpg'
import { Link,useNavigate } from 'react-router-dom'
import Footer from '../footer/Footer';

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
              <li className="nav-item"><Link to="/home">Home</Link></li>
              <li className="nav-item"><Link to="/about">About</Link></li>
           <li className="nav-item"> <Link to="/contact">Contact</Link>  </li>
            </ul>
            <div className='home-btn-div'>
              <Link to="/login">
                <button className="home-btn">Login</button>
              </Link>
            </div>  
          </nav>
        </header>
        </div>
        <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={image} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={image} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        <div className='body-div'>
          <div className="home-body-div div1"><img src={image}/></div>
          <div className="home-body-div div2">
            <h6>Welcome to School Management</h6>
            <p className='home-para'> The School Management System is a secure, user-friendly platform for streamlining school operations. It customizes the school name, supports responsive design, and ensures data integrity with input validations. Scalable and efficient, it enhances navigation and offers future-ready features for a connected educational experience.</p>

            <div  className='school-input-div'>
              <p> Enter School name</p>
              <input type='text' className='school-input-box' value={schoolName} onChange={(e)=>setSchoolName(e.target.value)}/>
              <p style={{color:"red"}}>{error}</p>
            <button onClick={schoolValidate}>Submit</button>
            </div>
          </div>
        </div>
        <label>
              <input type='checkbox'/>
            <div className="toggle" >
                <span className="top-line common"></span>
                <span className="mid-line common"></span>
                <span className="bottom-line common"></span>
                 </div>
              <div className='slide'>
              <h1>Menu</h1>
              <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>  
              </ul>
              </div>
            </label>
            <Footer/>
    </Fragment>
  )
}

export default Home