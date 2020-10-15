import React, {useContext} from 'react'

import './css/footer.css'

import students from '../icons/students.svg'

import facebook from '../icons/facebook-square.svg'
import instagram from '../icons/instagram-square.svg'
import twitter from '../icons/twitter-square.svg'
import linkedin from '../icons/linkedin-square.svg'

import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            
            <div className="second">
                <div className="footer-content">
                    <h4 className="sub-title">About Firstclass Brain</h4>

                    <p>FIRST CLASS BRAIN is an elearning school platform that proffer solutions to bridge the gap in the drop of rEducational system in NIgeria.</p>
                </div>

                <div className="footer-content social-media">
                    <h4 className="sub-title">Follow Us</h4>

                    <span>
                        <a className="link" href="https://www.facebook.com/aoestatechariots" rel="noopener noreferrer" target="_blank">
                            <img src={facebook} alt="facebook" /> 
                        </a>
                    </span>
                    <span>
                        <a className="link" href="https://www.linkedin.com/company/aoestatechariots" rel="noopener noreferrer" target="_blank">
                            <img src={linkedin} alt="linkedin" /> 
                        </a>
                    </span>
                    <span>
                        <a className="link" href="https://twitter.com/AOEstateChariot" rel="noopener noreferrer" target="_blank">
                            <img src={twitter} alt="facebook" /> 
                        </a>
                    </span>
                    <span>
                        <a className="link" href="https://www.instagram.com/aoestatechariots" rel="noopener noreferrer" target="_blank">
                            <img src={instagram} alt="instagram" /> 
                        </a>
                    </span>

                    <div className="app-download">
                        <h4 className="sub-title">Download the App</h4>

                    </div>
                </div>
            
                <div className="footer-content contact-us">
                    <h4 className="sub-title">Contact Us</h4>

                    <div className="tab">
                        <div className="head">
                            Phone Number
                        </div>
                        <span>
                            +234-(0)907-455-4735
                            <br />
                            +234-(0)815-832-6626
                        </span>
                    </div>
                    <div className="tab">
                        <div className="head">
                            Email Address
                        </div>
                        <span>
                            firstclassbrain11@gmail.com
                            hello@firstclassbrain.com
                        </span>
                    </div>
                    <div className="tab">
                        <div className="head">
                            Location
                        </div>
                        <span>
                            No. 27, Olayiwola Street, New Oko-oba, Lagos State
                        </span>
                    </div>
                </div>
            
            </div>

            <div className="copyright-container">
                <div className='logo sub-title'>Firstclass Brain</div>
                <div className='copyright'>Copyright &copy; 2020, All rights reserved</div>
            </div>
        
        </div>
    )
}

export default Footer
