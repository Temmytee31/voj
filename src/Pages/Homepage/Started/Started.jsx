import React from 'react';
import './Started.css';
import Navbar from '../../../Component/Navbar/Navbar';
import backgrounds from "../../../assets/backgrounds.png";
import paypal from "../../../assets/paypal.png";
import squad from "../../../assets/squad.png";
import zenith from "../../../assets/zenith.png";
import Footer from '../../../Component/Footer/Footer';

function Started() {
  return (
    <div>
      <Navbar/>
      <div className='Started'>
        <div className='starte'>
          <p>
            Welcome to VOJ Foundation , a non- profit organization dedicated to empowering individuals and 
            communities around the world. Our mission is to inspire positive change through education ,advocacy 
            and community engagement.  By getting involved wth VOJ Foundation, you’ll join a network of like-minded 
            individuals  who share our passion for making a difference . Whether you’re looking to volunteer your 
            time, donate resources , or spread the word about our initiatives  every contribution counts . Together, 
            we an work towards creating a brighter future for all, and we invite you to join us on ths journey.
          </p>
        </div>
      </div>
      <div className='don'>
        <h6>Donate</h6>
          <p>
            One of the most meaningful ways to make an impact is by making a donation to our
            organization. Your financial contribution will enable us to continue providing critical support to
            those in need, funding innovative programs, and amplifying our advocacy efforts. Every gift, no
            matter the size, brings us closer to creating a more just and equitable world. Donate today and
            become a part of our community of change makers, helping us create a brighter future for all.
          </p>
          <div className='bank'>
            <div className='paypal'>
              <img src={paypal} alt=''></img>
            </div>
            <div className='squad'>
              <img src={squad} alt=''></img>
            </div>
            <div className='zenith'>
              <img src={zenith} alt=''></img>
            </div>
          </div>
      </div>
      <h6 className='months'>To become a Monthly Donor <span className='https'>: <a href='#'> https// forms.glef2C53vfo6n4Vdvvu8</a></span></h6>
      <div>
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
      </div>
      <div className='promoteo'>
        <p>
          Partnering with us is a fantastic way amplify your impact nd make a meaningful differences in the world. 
          By joining forces , we can leverage each other’s strengths and resources to create something truly remarkable. 
          Our partnership options range from one- time donation of services to ongoing collaborations, and an include everything 
          from event planing and promotion to photography and social media management. Whether you’re an individual with a 
          passion project or a business looking to give back, we welcome the opportunity to work together and create positive change. <br></br>
          <a href='https://forms.gle/aaQpovdW97CiqUNy7'><span className='see-more'> Here is the Link </span> </a> 
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
          Want t make a difference in a hand -on way? VOJ Foundations offers a variety of volunteer opportunities 
          for individuals and groups to get involved and gve back. From event planning and fundraising to community 
          outreach and program support, there are many ways to lend a helping hand. Whether you have a few hours a 
          week or a day, we have a role that’s right for you. As a volunteer with VOJ Foundation , you’ll not onl 
          be making a tangible impact , but also be part of a vibrant community f like- minded individuals who 
          share our passion for creating positive change. Ready to get started? <br></br> <a href='https://forms.gle/13NzpcCgKFG4tTu18'> <span className='see-more'> Apply to become a volunteer today 
          by clicking this link</span> </a>
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
          If you have a special skill or expertise, such as photography, catering, event panning, or promotion, 
          we’d love to hear from you! Consider donating your services to help us amplify our impact. By contributing 
          your talents, you ca help us take our project to the next level and make a meaningful difference in the lives 
          of those w serve.To share your skills and expertise with us.<br></br> <a href='https://forms.gle/yhnTmepJPPSwXJ3C8'><span className='see-more'> Click here to apply</span></a>
        </p>
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

export default Started