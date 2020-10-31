import React from 'react'
// components
import Footer from './FooterHome'
import Navigation from './Navigation'
import Header from './Header'
// icons
import facebook from '../icons/facebook-square-teal.svg'
import instagram from '../icons/instagram-square-teal.svg'
import twitter from '../icons/twitter-square-teal.svg'
import linkedin from '../icons/linkedin-square-teal.svg'
import pagination_arrow from '../icons/pagination-arrow.svg'
// css
import './css/general.css'
import './css/faq.css'

function Faq() {

    return (
        <div className="classroom">
            <Navigation />

            <Header title="FREQUENTLY ASKED QUESTIONS" nav="FAQ" image="https://extras.firstclassbrain.com/five.png" />
            
            <div className="faq">
                <div>
                    <div className="info">

                        <div className="title">CONTACT US <span className="enhanced">DIRECTLY</span></div>

                        <div className="paragraph">
                            +234-(0)907-455-4735,<br />+234-(0)815-832-6626
                        </div>

                        <div className="paragraph">
                            firstclassbrain11@gmail.com,<br />hello@firstclassbrain.com
                        </div>

                        <div className="paragraph">
                            No. 27, Olayiwola Street, New Oko-oba, Lagos State
                        </div>

                        <div className="paragraph">
                            FOLLOW US
                            <br /><br />
                            <img src={facebook} alt="facebook" />
                            <img src={instagram} alt="instagram" />
                            <img src={twitter} alt="twitter" />
                            <img src={linkedin} alt="linkedin" />
                        </div>

                    </div>
                </div>

                <div className="faq-container">
                    <div className="tab">
                        <div className="nav">
                            <div className="head">First most asked question</div>
                            <img src={pagination_arrow} alt="pagination arrow" />
                        </div>
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                    <div className="tab">
                        <div className="nav">
                            <div className="head">Second most asked question</div>
                            <img src={pagination_arrow} alt="pagination arrow" />
                        </div>
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                    <div className="tab">
                        <div className="nav">
                            <div className="head">Third most asked question</div>
                            <img src={pagination_arrow} alt="pagination arrow" />
                        </div>
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Faq
