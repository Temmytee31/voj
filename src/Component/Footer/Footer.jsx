import React from 'react';
import './Footer.css';
import donate from "../../assets/donate.png";
import blog from "../../assets/blog.png";
import volunteer from "../../assets/volunteer.png";
import contact from "../../assets/contact.png";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagam from "../../assets/instagam.png";

function Footer() {
  return (
    <div className='foundation'>
        <div className='dation'>
            <div className='support'>
                <h6>VOJ Foundation</h6>
                <p>
                    The VOJ Foundation is dedicated to providing support and resources to economically disadvantaged 
                    women, children and communities in Nigeria. We aim to empower these individuals through education 
                    skill-building, and financial assistance , so they can become self-sufficient and lead fulfilling  lives 
                </p>
            </div>
            <div className='blog'>
                <h6>About</h6>
                <div className='all'>
                    <img src={donate} alt=''></img> 
                    <p>Donate</p>
                </div>
                <div className='all'>
                    <img src={blog} alt=''></img> 
                    <p>Blog</p>
                </div>
                <div className='all'>
                    <img src={volunteer} alt=''></img> 
                    <p>Volunteer</p>
                </div>
                <div className='all'>
                    <img src={contact} alt=''></img> 
                    <p>Contact Us</p>
                </div>
            </div>
            <div className='socials'>
                <h6>Socials</h6>
                <div className='all'>
                    <img src={linkedin} alt=''></img> 
                    <p>Linkedin</p>
                </div>
                <div className='all'>
                    <img src={facebook} alt=''></img> 
                    <p>Facebook</p>
                </div>
                <div className='all'>
                    <img src={twitter} alt=''></img> 
                    <p>Twitter</p>
                </div>
                <div className='all'>
                    <img src={instagam} alt=''></img> 
                    <p>Instagram</p>
                </div>
            </div>
            <div className='subscribe'>
                <h6>Subscribe to our Newsletter</h6>
                <div className='holder'>
                    <input placeholder='Your email' type='email'/>
                </div>
                <button>Subscribe Now</button>
            </div>
        </div>
        <div className='oya'>
            <div className='copy'>
                <p>Copyright @VOJ Foundation2024  </p>
            </div>
            <div className='policy'>
                <p>Privacy/ Policy Terms/License </p>
            </div>
        </div>
    </div>
  )
}

export default Footer