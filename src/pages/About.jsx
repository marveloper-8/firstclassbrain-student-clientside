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
                <div className="content">
                    <div className="tab">
                        <div className="image desktop"
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
                                Courses that exist on the First Class Brain platform are available for video streaming which aids students who find it difficult to read.
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
                                Video conference like interactions with a teacher as a group of students are also available for all existing courses on the First Class Brain platform.
                            </div>
                            <Link className="links" to='/classroom'>
                                <button>GO TO CLASSROOM</button>
                            </Link>
                        </div>
                        <div className="image desktop"
                            style={{
                                backgroundImage: `url(https://extras.firstclassbrain.com/three.png)`,
                                backgroundSize:`cover`,
                                backgroundPosition:`center`
                            }}
                        ></div>
                    </div>
                    
                    <div className="tab">
                        <div className="image desktop"
                            style={{
                                backgroundImage: `url(https://extras.firstclassbrain.com/four.png)`,
                                backgroundSize:`cover`,
                                backgroundPosition:`center`
                            }}
                        ></div>
                        <div className="text">
                            <img src={text_course} alt="video course" />
                            <div className="title normal">Readable</div>
                            <div className="title enhanced">Courses</div>
                            <div className="line"></div>
                            <div className="text-container">
                                Typed courses are available on the First Class Brain platform for students who find it better to assimilate through reading.
                            </div>
                            <Link className="links" to='/classroom'>
                                <button>GO TO CLASSROOM</button>
                            </Link>
                        </div>
                    </div>
                    
                </div>

                <div className="board-members">
                    <div className="title enhanced">Board Members</div>

                    <div className="text-container">
                        <p>First class brain is an initiative a first class Fimmol Integrted Nig limited with interest in SME, manufacture representatives and media under the leadership of Mr Rupert Ojenuwa, The chief Executive Officer. Rupert Ojenuwa is a man of multiple sides, an entrepreneur, whose business interest cuts across media to Banking and Manufacturing.</p>

                        <p>Rupert also has a passion for reforming Society, hence he initiated prestigious HOG(Hall of Fame) Awards, now Africa hall of Fame Awards. His objective was using the awards platform to shape the society by ensuring quality and inspiring countless young people. Recipients of the awards include very influential Nigerians including Alh. Atiku Abubakar, Ooni Adeyeye Enitan Oguwusi , Dr Akinwunmi Ambode Adesina, Dr. Olusegun Mimiko, Babatunde Fashola SAN, Dr Aliko Dangote , Sen Shehu Sani, to mention a few.</p>

                        <p>His desire to impact the educational sector led him to putting together the First Class Brain App to Bridge the wide gap in the teaching and learning experience in Nigeria and Africa.</p>
                    </div>
                </div>
            
                <div className="board-members">
                    <div className="title enhanced">For Schools and Organisations</div>

                    <div className="text-container">
                        <p>First class brain offers schools, Humanitarianism, organizations and well-meaning people across the globe the opportunity to sponsor the education of pupil and students on our platform.</p>

                        <p>You may discuss a school package on how to train a community through the FCB app with us. Please se reach out to us by filling in the form on the website and you could also call or send an email to our email address also on the website.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About
