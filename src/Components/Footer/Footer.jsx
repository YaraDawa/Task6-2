import './Footer.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight}  from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <section className="footer text-light">
        <p className="text-center text-light ">SUBSCRIBE NOW</p>
        <h2 class="text-center mb-4 mt-2 text-light">GET OUR UPDATES ALWAYS FAST</h2>
        <p className="text-center text-light">YOUR PERSONAL DATA WILL ALWAYS BE SAFE</p>

        <div className="container">

            <div className="row">
                <div className="col-md-12">
                    <div class="text-center justify-content-center inp">
                        <input type="email" placeholder="Enter YOUR EMAIL ID" required />
                        <span><FontAwesomeIcon icon={faArrowRight} className="icons" color='black' /></span>
                    </div>
                        <div className="col-md-12">
                            <ul className=" subscrib-ul">
                                <li>SEARCH </li>
                                <li>HELP</li>
                                <li>INFORMATION</li>
                                <li> PRIVACY POLICY</li>
                                <li> SHIPPING DETAILS</li>
                            </ul>
                        </div>
                </div>
                </div>
        
        </div>
        
    </section>
    


    )
}

export default Footer