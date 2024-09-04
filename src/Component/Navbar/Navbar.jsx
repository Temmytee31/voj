import React from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png";
import About from '../../Pages/Homepage/About/About';
import Homepage from '../../Pages/Homepage/Homepage';

function Navbar() {
  return (
    <div className='logo'>
      <div className='navbar'>
        <img src={logo} alt=''></img>
        <div className='social'>
          <a href='Homepage'> <p className='home'>Home</p></a>
          <a href='About'> <p className='about'>About</p> </a>
          <a href='Project'> <p className='project'>Project</p> </a>
          <a href='Started'> <p className='get'>Get Involoved</p> </a>
          <a href='Donate'> <button className='button'>Donate Now</button></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar