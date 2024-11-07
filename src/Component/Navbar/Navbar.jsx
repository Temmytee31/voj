import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png";
import {NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
      <NavLink exact className="nav-link" activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/about">
        About
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/project">
        Project
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/started">
        Get Involved
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/donate">
          <button className="donate-btn">Donate Now</button>
      </NavLink>
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