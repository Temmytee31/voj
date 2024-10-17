import React from 'react';
import './Homepage.css';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import photo from "../../assets/photo.png";
import health from "../../assets/health.png";
import economic from "../../assets/economic.png";
import provide from "../../assets/provide.png";
import kehinde from "../../assets/kehinde.png";
import two from "../../assets/two.png";
// import family from "../../assets/family.png";


function Homepage() {
  return (
    <div>
        {/* <Navbar/> */}
        <section className='section'>
            <div className='header'>
                <h3>VOJ FOUNDATION</h3>
                <p>
                    The VOJ Foundation is dedicated to providing support and resources to economically disadvantaged 
                    women, children and communities in Nigeria. We aim to empower these individuals through 
                    education skill-building, and financial assistance , so they can become self-sufficient and lead fulfilling  lives 
                </p>
                <img src={photo} alt='' className='head'></img>
            </div>
            
        </section>
        
    </div>
  )
}

export default Homepage