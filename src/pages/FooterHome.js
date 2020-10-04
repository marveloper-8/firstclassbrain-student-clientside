import React, {useContext} from 'react'

import './css/footer.css'

import students from '../icons/students.svg'

import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            
            <div className="second">
                <div className="footer-content">
                    <h4 className="sub-title">About Firstclass Brain</h4>

                    <p>FOCII is a platform that brings together some of the best real estate marketing professionals in Nigeria saddled with the key responsibility of delivering quality, document assigned,  government friendly land and housing schemes throughout the nation.</p>
                </div>

                <div className="footer-content social-media">
                    <h4 className="sub-title">Follow Us</h4>

                    <span>
                        <a className="link" href="https://www.facebook.com/aoestatechariots" rel="noopener noreferrer" target="_blank">
                            <img src={students} alt="facebook" /> 
                        </a>
                    </span>
                    <span>
                        <a className="link" href="https://www.linkedin.com/company/aoestatechariots" rel="noopener noreferrer" target="_blank">
                            <img src={students} alt="linkedin" /> 
                        </a>
                    </span>
                    <span>
                        <a className="link" href="https://twitter.com/AOEstateChariot" rel="noopener noreferrer" target="_blank">
                            <img src={students} alt="facebook" /> 
                        </a>
                    </span>
                    <span>
                        <a className="link" href="https://www.instagram.com/aoestatechariots" rel="noopener noreferrer" target="_blank">
                            <img src={students} alt="instagram" /> 
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
                            +234-(0)902-000-1111
                        </span>
                    </div>
                    <div className="tab">
                        <div className="head">
                            Email Address
                        </div>
                        <span>
                            info@focii.org
                        </span>
                    </div>
                    <div className="tab">
                        <div className="head">
                            Location
                        </div>
                        <span>
                            Lekki Phase 1, Lagos, Nigeria
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
