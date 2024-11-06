import React, { useState } from 'react';
import './About.css';
import Navbar from '../../../Component/Navbar/Navbar';
import daddy from "../../../assets/daddy.png";
import Footer from '../../../Component/Footer/Footer';

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Navbar />
      <div className='daddy'>
        <img src={daddy} alt='Foundation' />
      </div>

      <div className='content-section'>
        <div className='missioo'>
          <div className='ouro'>
            <h3>To Partner With Us </h3>
          </div>
          <div className='miso'>
            <h3>Volunteer</h3>
          </div>
          <div className='worko'>
            <h3>Render Services</h3>
          </div>
        </div>
        <div className='promoteo'>
          <p>
            The VOJ Foundation is dedicated to fostering sustainable development in rural Nigerian communities through targeted initiatives. 
            Our core focus is on providing Microfinance seed funding for farming and agricultural ventures, alongside supporting small and 
            medium-sized enterprises (SMEs) and micro enterprises (MSMEs) in these regions. Additionally, we are committed to promoting education by offering 
            scholarships to children attending primary and secondary schools in rural areas. <br></br> Our vision extends beyond financial support to include 
            empowering economically disadvantaged women through educational workshops. These workshops aim to impart valuable skills and knowledge across various trades 
            and businesses, fostering economic independence and resilience within these communities. Furthermore, we are dedicated to establishing profit-for-purpose 
            businesses that not only generate revenue but also contribute to the long-term sustainability of the foundation's mission. 
            Through these multifaceted efforts, we strive to make a meaningful and lasting impact on the socio-economic landscape of rural Nigeria.
          </p>
        </div>
        <div className='missioso'>
          <div className='ourso'>
            <h3>To Partner With Us </h3>
          </div>
          <div className='misso'>
            <h3>Volunteer</h3>
          </div>
          <div className='workso'>
            <h3>Render Services</h3>
          </div>
        </div>
        <div className='promoteo'>
          <p>
            To create a better and brighter future for economically disadvantaged women and children, starting in West Africa. We strive to ensure that these 
            individuals in the region have access to the same opportunities, regardless of gender or age. Our goal is to eliminate all forms of disadvantage 
            and economic challenges that vulnerable women and children face, and to ensure that everyone has access to the necessary resources for a better life.
            We are committed to creating a world where everyone is respected and has the opportunity to reach their full potential.
          </p>
        </div>
        <div className='missiosso'>
          <div className='oursso'>
            <h3>To Partner With Us </h3>
          </div>
          <div className='missso'>
            <h3>Volunteer</h3>
          </div>
          <div className='worksso'>
            <h3>Render Services</h3>
          </div>
        </div>
        <div className='promoteso'>
          <p>
            Our organisation provides financial support to women, children and communities facing economic hardships that threaten their lives, 
            impede their progress and land them in unfavourable circumstances. We strive to empower these vulnerable groups by offering resources 
            that can help them improve their quality of life.
          </p>
          {expanded && (
            <div className=''>
              <h3>We Are  Transparent</h3>
              <p>
                VOJ Foundation values transparency in all aspects of our operations. We believe in being open and honest about how donations are utilized, 
                providing regular updates on our programs and initiatives, and ensuring that financial information is readily available to our supporters. 
                By being transparent, we build trust with our donors and stakeholders, demonstrating our commitment to making a real and impactful difference 
                in the lives of those we serve. Your support allows us to continue our work with integrity and compassion, and we are grateful for the opportunity 
                to work together towards a common goal of helping those in need.
              </p>
              <h3>We Are  Accountable</h3>
              <p>
                As a foundation, we prioritise accountability in everything we do. We believe in taking responsibility for our actions, decisions, and the outcomes 
                of our programs. By being accountable, we ensure that we are efficient and effective in utilising resources, transparent in our communication, and 
                responsive to the needs of the communities we serve. We hold ourselves to high standards, regularly evaluating and monitoring our work to ensure that 
                we are making a positive impact and achieving our mission. Your trust and support are essential in holding us accountable and helping us to continue 
                serving and empowering those in need. Together, we can make a difference and create lasting change for the better. Thank you for believing in our commitment 
                to accountability.
              </p>
              <h3>60% Goes To Benficiaries</h3>
              <p>
                At VOJ Foundation, we are dedicated to maximising the impact of every donation we receive. We are proud to say that 60% of donations go directly to benefiting 
                those in need, ensuring that your support has a significant and meaningful impact on the lives of individuals and communities. We prioritise efficiency and effectiveness 
                in our operations, striving to use resources wisely and transparently so that we can make a positive difference in the most cost-effective way possible. Your generosity 
                allows us to continue our vital work and we are committed to ensuring that your contributions have a tangible and lasting impact on those we serve. Thank you for helping us 
                make a difference and for giving hope to those who need it most.
              </p>
            </div>
            
          )}
          <span className="see-more" onClick={handleToggle}>
            {expanded ? 'See Less' : 'See More'}
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
