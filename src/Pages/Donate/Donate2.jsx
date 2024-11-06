import React from 'react';
import './Donate2.css';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';

function Donate2() {
  return (
    <div>
      <Navbar />
      <div className="future">
        <h3 className="fut">Give Hope To Those Who Need It Most</h3>
        <h3 className="ture">Donate Here</h3>
      </div>
      <div className="hope">
        <div className="inform">
          <h6 className="section-title">Your Information</h6>
          <div className="input-group">
            <input type="text" placeholder="First Name" className='incut' />
            <input  type="text" placeholder="Last Name" className='incut' />
          </div>
          <input type="text" placeholder="Street Address" className="incut" />
          <div className="input-group">
            <input type="text" placeholder="City Name" className='incut'/>
            <input type="text" placeholder="State" className='incut' />
            <input type="text" placeholder="Zip Code" className='incut' />
          </div>
          <input type="email" placeholder="Email Address" className="incut" />

          <h6 className="section-title">Payment Information</h6>
          <input type="text" placeholder="Credit Card Number" className="incut" />
          <div className="input-group">
            <input type="text" placeholder="Expiration" className='incut' />
            <input type="text" placeholder="CVC" className='incut' />
          </div>

          <p className="confirmation-text">
            Did you want to confirm your donation of $10 Monthly? If yes, click on "Proceed Payment"; if not, click "Cancel".
          </p>

          <div className="action-buttons">
            <a href="Donate"><h6>Cancel</h6></a>
            <button>Proceed Payment</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Donate2;
