
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Forgot from './forgotpass/Forgot'
import Login from './login/Login'
import Register from './register/Register'
import Home from './home/Home';
import Contact from './contactus/Contact';
import Footer from './footer/Footer';
function App() {

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter> 
      
    </>
  )
}

export default App
