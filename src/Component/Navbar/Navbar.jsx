import React from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png";
import About from '../../Pages/Homepage/About/About';
import Homepage from '../../Pages/Homepage/Homepage';

const Navbar = () => {


  return (
    <div>
      <div className='logo'>
        <nav>
          <img src={logo} alt=''></img>
          <div class="openMenu"><i class="fa fa-bars"></i></div>
          <ul  className='mainMenu'>
            <a href='Homepage'> 
              <li className='home'>Home</li>
              </a>
            <a href='About'> 
              <li className='about'>About</li> 
              </a>
              {/* <ul className='submenu'>
                <li>Our Mission</li>
                <li>Our Vision</li>
                <a href=''> <li>Meet The Team</li></a> 
              </ul> */}
            <a href='Project'> 
              <li className='project'>Project</li> 
              </a>
            <a href='Started'> 
              <li className='get'>Get Involoved</li> 
              </a>
            <a href='Donate'> 
              <button className='button'>Donate Now</button>
            </a>
            <div class="closeMenu"><i class="fa fa-times"></i></div>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar