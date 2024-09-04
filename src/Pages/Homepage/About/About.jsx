import React from 'react';
import './About.css';
import Navbar from '../../../Component/Navbar/Navbar';
import daddy from "../../../assets/daddy.png";
import Footer from '../../../Component/Footer/Footer';


function About() {
  return (
    <div>
      <Navbar/>
      <div className='daddy'>
        <img src={daddy} alt=''></img>
      </div>
      <div>
        <div className='missio'>
          <div className='our'>
            <h3>Our Mission</h3>
          </div>
          <div className='mis'>
            <h3>Our Mission</h3>
          </div>
          <div className='work'>
            <h3>How We Work</h3>
          </div>
        </div>
      </div>
      <div className='promote'>
        <p>
          The VOJ Foundation is dedicated to fostering sustainable development in rural Nigerian communities through targeted initiatives. Our core focus is on providing Microfinance seed funding for farming and agricultural ventures, alongside supporting small and medium-sized enterprises (SMEs) and micro enterprises (MSMEs) in these regions. Additionally, we are committed to promoting education by offering scholarships to children attending primary and secondary schools in rural areas. <br></br>
          Our vision extends beyond financial support to include empowering economically disadvantaged women through educational workshops. These workshops aim to impart valuable skills and knowledge across various trades and businesses, fostering economic independence and resilience within these communities. <br></br>
          Furthermore, we are dedicated to establishing profit-for-purpose businesses that not only generate revenue but also contribute to the long-term sustainability of the foundation's mission. Through these multifaceted efforts, we strive to make a meaningful and lasting impact on the socio-economic landscape of rural Nigeria.
        </p>
      </div>
      <div className='missios'>
        <div className='ours'>
          <h3>Our Mission</h3>
        </div>
        <div className='miss'>
          <h3>Our Mission</h3>
        </div>
        <div className='works'>
          <h3>How We Work</h3>
        </div>
      </div>
      <div className='promote'>
        <p>
          To create a better and brighter future for economically disadvantaged women and children, 
          starting in West Africa. We strive to ensure that these individuals in the region have access to the 
          same opportunities, regardless of gender or age. Our goal is to eliminate all forms of disadvantage and 
          economic challenges that vulnerable women and children face, and to ensure that everyone has access to the necessary resources for a better life. We are committed to creating a world where everyone is respected and has the opportunity to reach their full potential.
        </p>
      </div>
      <div className='missioss'>
        <div className='ourss'>
          <h3>Our Mission</h3>
        </div>
        <div className='misss'>
          <h3>Our Mission</h3>
        </div>
        <div className='workss'>
          <h3>How We Work</h3>
        </div>
      </div>
      <div className='promotes'>
        <p>
          Our organization provides financial support to women, children and communities facing economic hardships 
          that threaten their lives, impede their progress and land them in unfavorable circumstances. We strive to 
          empower these vulnerable groups by offering resources that can help them improve their quality of life. <span className='see-more'>See More</span>
        </p>
      </div>
      <div className='donors'>
        <h6 className='becomes'>Become a volunteer</h6>
        <h6 className='mosts'>
          Join us to make an impact Lets make an end  to te suffering Join us to make an impact Lets make an end  
          to te suffering Join us to make an impact    
        </h6>
        <button className='donates'>Join Now</button>
      </div>
      <Footer/>
    </div>
  )
}

export default About