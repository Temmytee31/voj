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



function App() {

  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    {/* {<Homepage/>} */}
    {/* <Footer/> */}
    {/* <About/> */}
    <Routes>

    {/* <Route index element={<Homepage/>}/> */}
    <Route path='homepage' element= {<Homepage/>}/>
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
