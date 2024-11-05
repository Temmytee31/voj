import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png";

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
        <a 
          href="home" 
          className={activeLink === "#home" ? "active" : ""}
          onClick={() => handleLinkClick("#home")}
        >
          Home
        </a>
        <a 
          href="about" 
          className={activeLink === "#about" ? "active" : ""}
          onClick={() => handleLinkClick("#about")}
        >
          About
        </a>
        <a 
          href="projects" 
          className={activeLink === "#projects" ? "active" : ""}
          onClick={() => handleLinkClick("#projects")}
        >
          Projects
        </a>
        <a 
          href="involved" 
          className={activeLink === "#involved" ? "active" : ""}
          onClick={() => handleLinkClick("#involved")}
        >
          Get Involved
        </a>
        <a href="donate">
          <button className="donate-btn">Donate Now</button>
        </a>
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
