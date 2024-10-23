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
import family from "../../assets/family.png";


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
            <div className='hero'>
                <div className='vision'>
                    <h6>Our Vision & Mission</h6>
                    <p className='bright'>
                        Vision: Our vision is to create a better and brighter future for economically disadvantaged women 
                        and children in West Africa, starting from Nigeria, by focusing on reducing poverty. <span className='span'>Learn More</span>
                    </p>
                    <p className='mission'>
                        Mission:Our mission at the VOJ Foundation is to empower economically marginalized women in rural Nigeria by providing microfinance seed 
                        solutions for Small and Medium Enterprises (SMEs) and Micro, Small, and Medium Enterprises (MSMEs). <span className='span'>Learn More</span>
                    </p>
                </div>
            </div>
            <div className='together'>
                <h6 className='gether'>Together in 2021,</h6>
                <div className='aware'>
                    <div className='health'>
                        <img className='ealth' src={health} alt=''></img>
                        <h6>Health And Nutrition  Awareness</h6>
                        <p>
                            It ensures that they have essential items to sustain themselves for the next two weeks . <a href='https://www.linkedin.com/posts/voj-foundation_the-session-delivered-by-ms-temisaren-on-activity-7191132758256082944-4qyd?utm_source=share&utm_medium=member_android'>
                            <span className='spans'> Learn More</span> </a> 
                        </p>
                    </div>
                    <div className='economic'>
                        <img className='ealths' src={economic} alt=''></img>
                        <h6>Providing Economic Empowerment</h6>
                        <p>
                            Industry experts conducted speaking sessions highlighting the significance of human rights . <a href='https://www.linkedin.com/posts/voj-foundation_through-participation-in-voj-foundations-activity-7193580824380747776-lT1L?utm_source=share&utm_medium=member_desktop'>
                            <span className='spans'> Learn More</span></a>
                        </p>
                    </div>
                    <div className='provide'>
                        <img className='ealthss' src={provide} alt=''></img>
                        <h6>Providing Housing Solutions</h6>
                        <p>
                            The VOJ Foundation assited Three families in securing housing by providing finacial support. <a href='https://www.linkedin.com/posts/voj-foundation_the-session-delivered-by-ms-temisaren-on-activity-7191132758256082944-4qyd?utm_source=share&utm_medium=member_android'>
                            <span className='spans'> Learn More</span></a> 
                        </p>
                    </div>
                </div> 
            </div>
            <div className='testimon'>
                <h6 className='testi'>TESTIMONIALS</h6>
                <div className='comment'>
                    <div className='two'>
                        <img src={two} alt=''></img>
                        <h6> Name:Victoria Godwin</h6>
                        <h6> Profile: Single Mother</h6>
                        <h6> No of Children:Two Children</h6>
                        <p>
                            I am pleased with the quality of services provided by the VOJ Foundation. Having my 
                            rent paid by them filled me with excitement. Prior to being in touch with VOJ 
                            Foundation, I consistently experienced worrisome and sad thoughts. However, since 
                            then, my overall happiness has increased, and my anxiety has diminished significantly. 
                            I am even hopeful for an opportunity to meet you in person (VOJ Foundation team). 
                            May you be blessed abundantly.
                        </p>
                    </div>
                    <div className='twos'>
                        <img src={kehinde} alt=''></img>
                        <h6>  Name:Kehinde Opatimilehin</h6>
                        <h6> Profile: widow</h6>
                        <h6>  No of Children:Four Children</h6>
                        <p>
                            I want to express my heartfelt gratitude for helping me secure the rental property. 
                            Your support was incredibly valuable throughout the process. Your consistent communication 
                            before finalizing the rental eased my worries about payment, and I was impressed by your 
                            professionalism. Interestingly, a colleague of mine is interested in your services and 
                            asked about referrals; I explained that selections are made through the Foundation's 
                            community liaison channels, not referrals.
                        </p>
                    </div>
                    <div className='twoss'>
                        <img src={family} alt=''></img>
                        <h6>  Name:Mrs. Chidinma Okechukwu</h6>
                        <h6> Profile: Single Mother</h6>
                        <h6> No of Children:Three Children</h6>
                        <p>
                            I extend my gratitude to the VOJ Foundation for their invaluable assistance to my 
                            family and me. May God's blessings be upon you for your generosity. I am truly elated 
                            and profoundly grateful for the significant support you provided, which has brought 
                            great joy and positivity to our lives.
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className='donor'>
                <h6 className='become'>Become A Donor</h6>
                <h6 className='most'>
                    One of the most meaningful ways to make an impact is by making a donation to our
                    organization. Your financial contribution will enable us to continue providing critical 
                    support to those in need, funding innovative programs, and amplifying our advocacy efforts.
                </h6>
                <a href='Donate'><button className='donate'>Donate Now</button></a>
            </div> */}
        </section>
        {/* <Footer/>  */}
    </div>
  )
}

export default Homepage