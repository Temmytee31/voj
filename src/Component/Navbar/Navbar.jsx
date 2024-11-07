import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // close menu on link click for mobile view
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Link 
          to="/" 
          className={activeLink === "#home" ? "active" : ""}
          onClick={() => handleLinkClick("#home")}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={activeLink === "#about" ? "active" : ""}
          onClick={() => handleLinkClick("#about")}
        >
          About
        </Link>
        <Link 
          to="/project" 
          className={activeLink === "#project" ? "active" : ""}
          onClick={() => handleLinkClick("#project")}
        >
          Projects
        </Link>
        <Link 
          to="/started" 
          className={activeLink === "#started" ? "active" : ""}
          onClick={() => handleLinkClick("#started")}
        >
          Get Involved
        </Link>
        <Link to="/donate">
          <button className="donate-btn">Donate Now</button>
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;