import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Homepage from './Pages/Homepage/Homepage'
import Footer from './Component/Footer/Footer'
import About from './Pages/Homepage/About/About'
import Project from './Pages/Homepage/Project/Project'
import Started from './Pages/Homepage/Started/Started'
import Donate from './Pages/Donate/Donate'
import Donate2 from './Pages/Donate/Donate2'
// import useCollapse from 'react-collapsed';


const App = () => {


  // const mainMenu = document.querySelector('.mainMenu');
  // const closeMenu = document.querySelector('.closeMenu');
  // const openMenu = document.querySelector('.openMenu');
  // const menu_items = document.querySelectorAll('nav .mainMenu li a');

  // openMenu.addEventListener('click',show);
  // closeMenu.addEventListener('click',close);

  // // close menu when you click on a menu item 
  // menu_items.forEach(item => {
  //     item.addEventListener('click',function(){
  //         close();
  //     })
  // })

  // function show(){
  //     mainMenu.style.display = 'flex';
  //     mainMenu.style.top = '0';
  // }
  // function close(){
  //     mainMenu.style.top = '-100%';
  // }

  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    {/* {<Homepage/>} */}
    {/* <Footer/> */}
    {/* <About/> */}
    <Routes>

    <Route index element={<Homepage/>}/>
    <Route path='about' element= {<About/>}/>
    <Route path='project' element= {<Project/>}/>
    <Route path='started' element= {<Started/>}/>
    <Route path='donate' element= {<Donate/>}/>
    <Route path='donate2' element= {<Donate2/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App
