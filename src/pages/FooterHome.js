import React from 'react'
import {Link} from 'react-router-dom'

import './css/footer.css'

import facebook from '../icons/facebook-square.svg'
import instagram from '../icons/instagram-square.svg'
import twitter from '../icons/twitter-square.svg'
import linkedin from '../icons/linkedin-square.svg'

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
                        <a className="link" href="https://www.linkedIn.com/company/firstclassbrain" rel="noopener noreferrer" target="_blank">
                            <img src={facebook} alt="facebook" /> 
                        </a>
                    </span>
                    <span>
                        <a className="link" href="https://www.linkedIn.com/company/firstclassbrain" rel="noopener noreferrer" target="_blank">
                            <img src={linkedin} alt="linkedin" />
                        </a>
                    </span>
                    <span>
                        <a className="link" href="https://mobile.twitter.com/firstclassbrain" rel="noopener noreferrer" target="_blank">
                            <img src={twitter} alt="facebook" /> 
                        </a>
                    </span>
                    <span>
                        <a className="link" href="https://www.instagram.com/firstclassbrain" rel="noopener noreferrer" target="_blank">
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
                            <a className="link" href="tel:+2349074554735">
                                +234-(0)907-455-4735,
                            </a>
                            <br />
                            <a className="link" href="tel:+2348158326626">
                                +234-(0)815-832-6626
                            </a>
                        </span>
                    </div>
                    <div className="tab">
                        <div className="head">
                            Email Address
                        </div>
                        <span>
                            <a className="link" href="mailto:firstclassbrain11@gmail.com">
                                firstclassbrain11@gmail.com,
                            </a>
                            <br />
                            <a className="link" href="mailto:hello@firstclassbrain.com">
                                hello@firstclassbrain.com
                            </a>
                        </span>
                    </div>
                    <div className="tab">
                        <div className="head">
                            Location
                        </div>
                        <span>
                            <a className="link" href="https://goo.gl/maps/mMbMwrJQVxoRrb1R8" rel="noopener noreferrer" target="_blank">
                                No. 27, Olayiwola Street, New Oko-oba, Lagos State
                            </a>
                        </span>
                    </div>
                </div>
            
                <div className="footer-content">
                    <h4 className="sub-title">Navigation</h4>

                    <Link className="link" to='/about'>
                        <p>About Us</p>
                    </Link>
                    
                    <Link className="link" to='/contact'>
                        <p>Contact Us</p>
                    </Link>
                    
                    <Link className="link" to='/faq'>
                        <p>FAQ</p>
                    </Link>
                    
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
