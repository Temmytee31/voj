import React from 'react';
import './Project.css';
import Navbar from '../../../Component/Navbar/Navbar';
import sit from "../../../assets/sit.png";
import rice from "../../../assets/rice.png";
import women from "../../../assets/women.png";
import Footer from '../../../Component/Footer/Footer';

function Project() {
  return (
    <div>
        <Navbar/>
        <div className='Project'>
            <h3>Our Project</h3>
            <p>
                Our organization provides financial support to women, children and communities facing economic 
                hardships that threaten their lives, impede their progress and land them in unfavorable 
                circumstances. We strive to empower these vulnerable groups by offering resources that can help 
                them improve their quality of life.
            </p>
            <img src={sit} alt=''></img>
        </div>
        <div className='food'>
            <div className='rice'>
                <img src={rice} alt=''></img>
            </div>
            <div className='angel'>
                <h6>Angel Food Relief Program </h6>
                <p>
                    It is dedicated to addressing the critical issue of hunger in Nigeria, especially during 
                    these challenging  economic times. 
                </p>
                <button className='learn'>Learn More</button>
            </div>
        </div>
        <div>
        </div>
        <div className='foods'>
            <div className='angels'>
                <h6>Project Zero Hunger</h6>
                <p>
                    The project aims to address the immediate needs of economically disadvantaged women and 
                    children in Nigeria by providing them with food and  provision. 
                </p>
                <button className='learn'>Learn More</button>
            </div>
            <div className='rices'>
                <img src={women} alt=''></img>
            </div>
        </div>
        <div className='food'>
            <div className='rice'>
                <img src={rice} alt=''></img>
            </div>
            <div className='angel'>
                <h6>Project to Zero Homelesness </h6>
                <p>
                    The iniiative focus on addressing homelessness among economically disadvantaged women in 
                    rural Nigeria by not only providing housing solutions but also advocating for systematic change. 
                </p>
                <button className='learn'>Learn More</button>
            </div>
        </div>
        <div className='donor'>
            <h6 className='become'>Become A Donor</h6>
            <h6 className='most'>
                One of the most meaningful ways to make an impact is by making a donation to our
                organization. Your financial contribution will enable us to continue providing critical 
                support to those in need, funding innovative programs, and amplifying our advocacy efforts.
            </h6>
            <a href='Donate'><button className='donate'>Donate Now</button></a>
        </div>
        <Footer/>
    </div>
  )
}

export default Project