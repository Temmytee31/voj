import React from 'react';
import './Donate2.css';
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer';

function Donate2() {
  return (
    <div>
        <Navbar/>
        <div className='future'>
            <h3 className='fut'>Give Hope To Those Who Need It Most</h3>
            <h3 className='ture'>Donate Here</h3>
        </div>
        <div className='hope'>
            <div className='inform'>
                <div className='mat'>
                    <h6>Your Information</h6>
                </div>
                <div className='bordered'>
                    <div className='fir'>
                        <h6>FIRST NAME</h6>
                    </div>
                    <div className='las'>
                        <h6>LAST NAME</h6>
                    </div>
                </div>
                <div className='stree'>
                    <h6>STREET ADDRESS</h6>
                </div>
                <div className='city'>
                    <h6 className='cit'>CITY NAME</h6>
                    <h6 className='sta'>STATE</h6>
                    <h6 className='zip'>ZIP CODE</h6>
                </div>
                <div className='stree'>
                    <h6>EMAIL ADDRESS</h6>
                </div>
                <div className='pay'>
                    <h6>Payment Information</h6>
                </div>
                <div className='cred'>
                    <h6>CREDIT CARD NUMBER</h6>
                </div>
                <div className='citys'>
                    <h6 className='cits'>EXPIRATION </h6>
                    <h6 className='cits'>CVC</h6>
                </div>
                <div>
                    <p className='para'>Did you want to Confirm your donation of $10 Monthly?  If yes click on Proceed payment if not Go back</p>
                </div>
                <div className='cancels'>
                    <a href='Donate'><h6>Cancel</h6></a> 
                    <button>Proceed Payment</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Donate2