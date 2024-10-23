// import React, {useState} from 'react';
// import './Navbar.css';
// import logo from "../../assets/logo.png";
// import About from '../../Pages/Homepage/About/About';
// import Homepage from '../../Pages/Homepage/Homepage';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     }

//   return (
//     <div>
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <img src={logo} alt="Logo" />
//         </div>
//           <div className={`navbar-links ${isOpen ? "open" : ""}`}>
//             <a href="#home">
//               <li>Home</li>
//             </a>
//             <a href="about">
//               <li> About</li>
//             </a>
//             <a href="projects">
//               <li>Projects</li>
//             </a>
//             <a href="involved">
//               <li>Get Involved</li>
//             </a>
//             <a href="donate"> <button className="donate-btn">Donate Now</button> </a>
//           </div>
//         <div className="hamburger" onClick={toggleMenu}>
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </div>
//     </nav>
//   </div>
// )
// }

// export default Navbar