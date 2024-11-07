import React from 'react';
import './Donate.css';
import Navbar from '../../Component/Navbar/Navbar';
import white from "../../assets/white.png";
import yellow from "../../assets/yellow.png";
import Footer from '../../Component/Footer/Footer';
import {NavLink } from 'react-router-dom';

function Donate() {
  return (
    <div>
        <Navbar/>
        <div className='future'>
            <h3 className='fut'>We Can Save the Future</h3>
            <h3 className='ture'>Donate Here</h3>
        </div>
        <div className='amount'>
            <div className='choose'>
                <div className='nati'>
                    <h6>Choose a donation Amount</h6>
                </div>
                <div className='bord'>
                    <div className='little'>
                        <div className='white'>
                            <img src={white} alt=''></img>
                        </div>
                        <h6>$10</h6>
                        <p>
                            The little you sacrificed  matters to he lives of peopleThe littl e you sacrificed  matters 
                            to he lives of people The littl e you sacrificed  matters to he lives of people The littl e 
                            you sacrificed  matters to he lives of peopleThe littl e you sacrificed  matters to he lives of pe
                        </p>
                    </div>
                    <div className='littles'>
                        <div className='yellow'>
                            <img src={yellow} alt=''></img>
                        </div>
                        <h6>$25</h6>
                        <p>
                            The little you sacrificed  matters to he lives of peopleThe littl e you sacrificed  matters 
                            to he lives of people The little you sacrificed  matters to he lives of people The little 
                            you sacrificed  matters to he lives of peopleThe little you sacrificed  matters to he lives of people
                        </p>
                    </div>
                    <div className='littless'>
                        <div className='yellows'>
                            <img src={yellow} alt=''></img>
                        </div>
                        <h6>$50</h6>
                        <p>
                            The little you sacrificed  matters to he lives of peopleThe littl e you sacrificed  matters 
                            to he lives of people The little you sacrificed  matters to he lives of people The little 
                            you sacrificed  matters to he lives of peopleThe little you sacrificed  matters to he lives of people
                        </p>
                    </div>
                </div>
                <div className='custom'>
                    <h6>Enter a custom donation amount</h6>
                </div>
                <div className='frequency'>
                    <h6>Choose a donation frequency</h6>
                </div>
                <div className='class'>
                    <div className='mon'>
                        <img src={white} alt=''></img>
                        <h6>Monthly</h6>
                    </div>
                    <div className='low'>
                        <img src={yellow} alt=''></img>
                        <h6>One Time</h6>
                    </div>
                </div>
                <div className='cancel'>
                    <NavLink className="nav-link" activeClassName="active" to="/">
                        <h6>Cancel</h6>
                    </NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/donate2">
                    <button>Go To Checkout</button>
                </NavLink>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Donate