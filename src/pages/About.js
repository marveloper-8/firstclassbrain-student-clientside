import React from 'react'
import {Link} from 'react-router-dom'
// components
import Footer from './FooterHome'
import Navigation from './Navigation'
import Header from './Header'
// image
import video_course from '../illustrations/video-course.svg'
import text_course from '../illustrations/text-course.svg'
import conventional_course from '../illustrations/conventional-course.svg'
// css
import './css/general.css'
import './css/about.css'

function About() {

    return (
        <div className="classroom">
            <Navigation />

            <Header title="ABOUT US" nav="About Us" image="https://extras.firstclassbrain.com/one.png" />
            
            <div className="about">
                <div className="desktop">
                    <div className="content">
                        <div className="tab">
                            <div className="image"
                                style={{
                                    backgroundImage: `url(https://extras.firstclassbrain.com/two.png)`,
                                    backgroundSize:`cover`,
                                    backgroundPosition:`center`
                                }}
                            ></div>
                            <div className="text">
                                <img src={video_course} alt="video course" />
                                <div className="title normal">Video</div>
                                <div className="title enhanced">Courses</div>
                                <div className="line"></div>
                                <div className="text-container">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <Link className="links" to='/classroom'>
                                    <button>GO TO CLASSROOM</button>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="tab">
                            <div className="text">
                                <img src={conventional_course} alt="video course" />
                                <div className="title normal">Conventional</div>
                                <div className="title enhanced">Courses</div>
                                <div className="line"></div>
                                <div className="text-container">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <Link className="links" to='/classroom'>
                                    <button>GO TO CLASSROOM</button>
                                </Link>
                            </div>
                            <div className="image"
                                style={{
                                    backgroundImage: `url(https://extras.firstclassbrain.com/three.png)`,
                                    backgroundSize:`cover`,
                                    backgroundPosition:`center`
                                }}
                            ></div>
                        </div>
                        
                        <div className="tab">
                            <div className="image"
                                style={{
                                    backgroundImage: `url(https://extras.firstclassbrain.com/four.png)`,
                                    backgroundSize:`cover`,
                                    backgroundPosition:`center`
                                }}
                            ></div>
                            <div className="text">
                                <img src={text_course} alt="video course" />
                                <div className="title normal">PDF</div>
                                <div className="title enhanced">Courses</div>
                                <div className="line"></div>
                                <div className="text-container">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <Link className="links" to='/classroom'>
                                    <button>GO TO CLASSROOM</button>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            
                <div className="mobile">

                </div>
            
            </div>

            <Footer />
        </div>
    )
}

export default About
