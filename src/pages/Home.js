import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'
import {Link} from 'react-router-dom'

import './css/App.scss'

import Footer from './FooterHome'
import Navigation from './Navigation'
import Slides from './Slides'

import header from '../images/student-learning.png'
import aboutUs from '../images/about-us.png'
import coursesImage from '../images/courses.png'
import logoClient from '../images/about-us.jpg'
import logoClientTwo from '../images/about-us.jpg'

import goal from '../icons/goal.svg'
import students from '../icons/students.svg'
import courses from '../icons/courses.svg'
import instructors from '../icons/instructors.svg'
import art from '../icons/art.svg'
import accounting from '../icons/accounting.svg'
import law from '../icons/law.svg'
import science from '../icons/science.svg'
import call from '../icons/call.svg'
import email from '../icons/email.svg'
import emailTwo from '../icons/email-two.svg'
import location from '../icons/location.svg'

import clientOne from '../icons/clients/client-one.png'
import clientTwo from '../icons/clients/client-two.png'
import clientThree from '../icons/clients/client-three.png'

import './css/home.css'
import './css/general.css'

const Home = () => {

    // broker
    const [brokerState, setBrokerState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })
    

    const handleBrokerChange = (e) => {
          setBrokerState({ ...brokerState, [e.target.name]: e.target.value })
    }

    const handleBroker = (e) => {
          e.preventDefault()
          fetch("https://firstclassbrain-mail.herokuapp.com/customer-care/", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName: brokerState.firstName, 
                    lastName: brokerState.lastName, 
                    email: brokerState.email,
                    phone: brokerState.phone,
                    message: brokerState.message
                })
          }).then( () => {
                setBrokerState({ 
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '' 
                })
              }).then(res => res.json())
                .then(data => {
                    if(data.error){
                        alert(data.error)
                    }
                    else{
                        alert(data.message)
                        // history.push('/')
                    }
                })
                .catch(err => {
                    console.log(err)
                })
                
    }




    return (
        <div className="home">
            <Navigation />


            
            <div className="header">
                <Slides className="text" />


                <div className="icons">
                    <div className="tab">
                        <img src={students} alt="students" />
                        <div className="content">
                            <div className="title">10K+</div>
                            <div className="subhead">
                                Student Enrolled
                            </div>
                        </div>
                    </div>
                    
                    <div className="tab">
                        <img src={courses} alt="courses" />
                        <div className="content">
                            <div className="title">500+</div>
                            <div className="subhead">
                                Online Courses
                            </div>
                        </div>
                    </div>
                    
                    <div className="tab">
                        <img src={instructors} alt="instructors" />
                        <div className="content">
                            <div className="title">100+</div>
                            <div className="subhead">
                                Instructors
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        
            <section className="about">

                <div className="content">
                    <div 
                        className="image"
                        style={{
                            backgroundImage: `url(${aboutUs})`,
                            backgroundSize:`cover`,
                            backgroundPosition:`center`
                        }}
                    ></div>

                    <div className="text">
                        <div className="title">ABOUT US</div>
                        
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                
            </section>
            
            <section className="courses">

                <div 
                    className="content"
                    style={{
                        backgroundImage: `url(${coursesImage})`,
                        backgroundSize:`cover`,
                        backgroundPosition:`center`
                    }}
                >
                    <div className="background-overlay"></div>

                    <div className="title">
                        COURSES ON ALL SECONDARY SCHOOL LEVELS
                    </div>
                    <div className="subhead">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                    <button>
                        Enroll Now
                    </button>
                </div>
                
            </section>
       
            
            <section className="categories">
                <div className="content">
                    <div><div className="tab">
                        <img src={art} alt="art" />
                        <div className="label">Art</div>    
                    </div></div>
                    
                    <div><div className="tab">
                        <img src={accounting} alt="accounting" />
                        <div className="label">Accounting</div>    
                    </div></div>
                    
                    <div><div className="tab">
                        <img src={science} alt="science" />
                        <div className="label">Science</div>    
                    </div></div>
                    
                    <div><div className="tab">
                        <img src={law} alt="law" />
                        <div className="label">Law</div>    
                    </div></div>
                    
                    <div><div className="tab">
                        <img src={science} alt="science" />
                        <div className="label">Science</div>    
                    </div></div>
                    
                    <div><div className="tab">
                        <img src={law} alt="law" />
                        <div className="label">Law</div>    
                    </div></div>
                </div>

                <div className="view-more">
                    View More {`>`}
                </div>
            </section>
       
            <section className="testimonials">
                <Carousel>
                    <Carousel.Item>
                    <div className="content">
                        <div><div className="tabs">
                            <div className="quote-mark title">"</div>
                            <div className="text">
                                <div className="main">
                                    The course and trainer was awesome. He took time explaining in detail.
                                </div>
                                
                                <div className="name title">Tega Ikechukwu</div>
                            </div>
                            <div 
                                className="image"
                                style={{
                                    backgroundImage: `url(${header})`,
                                    backgroundSize:`cover`,
                                    backgroundPosition:`center`
                                }}
                            ></div>
                        </div></div>
                        
                        <div><div className="tabs">
                            <div className="quote-mark title">"</div>
                            <div className="text">
                                <div className="main">
                                    The course and trainer was awesome. He took time explaining in detail.
                                </div>
                                
                                <div className="name title">Tega Ikechukwu</div>
                            </div>
                            <div 
                                className="image"
                                style={{
                                    backgroundImage: `url(${header})`,
                                    backgroundSize:`cover`,
                                    backgroundPosition:`center`
                                }}
                            ></div>
                        </div></div>
                        
                        <div><div className="tabs">
                            <div className="quote-mark title">"</div>
                            <div className="text">
                                <div className="main">
                                    The course and trainer was awesome. He took time explaining in detail.
                                </div>
                                
                                <div className="name title">Tega Ikechukwu</div>
                            </div>
                            <div 
                                className="image"
                                style={{
                                    backgroundImage: `url(${header})`,
                                    backgroundSize:`cover`,
                                    backgroundPosition:`center`
                                }}
                            ></div>
                        </div></div>
                    </div>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                    <div className="content">
                        <div><div className="tabs">
                            <div className="quote-mark title">"</div>
                            <div className="text">
                                <div className="main">
                                    The course and trainer was awesome. He took time explaining in detail.
                                </div>
                                
                                <div className="name title">Tega Ikechukwu</div>
                            </div>
                            <div 
                                className="image"
                                style={{
                                    backgroundImage: `url(${header})`,
                                    backgroundSize:`cover`,
                                    backgroundPosition:`center`
                                }}
                            ></div>
                        </div></div>
                        
                        <div><div className="tabs">
                            <div className="quote-mark title">"</div>
                            <div className="text">
                                <div className="main">
                                    The course and trainer was awesome. He took time explaining in detail.
                                </div>
                                
                                <div className="name title">Tega Ikechukwu</div>
                            </div>
                            <div 
                                className="image"
                                style={{
                                    backgroundImage: `url(${header})`,
                                    backgroundSize:`cover`,
                                    backgroundPosition:`center`
                                }}
                            ></div>
                        </div></div>
                        
                        <div><div className="tabs">
                            <div className="quote-mark title">"</div>
                            <div className="text">
                                <div className="main">
                                    The course and trainer was awesome. He took time explaining in detail.
                                </div>
                                
                                <div className="name title">Tega Ikechukwu</div>
                            </div>
                            <div 
                                className="image"
                                style={{
                                    backgroundImage: `url(${header})`,
                                    backgroundSize:`cover`,
                                    backgroundPosition:`center`
                                }}
                            ></div>
                        </div></div>
                    </div>
                    </Carousel.Item>
                </Carousel>
            </section>

            <section className="contact">

                <div className="content">
                    <div><form className="form" onSubmit={handleBroker}>
                        <div className="title">SEND US A MESSAGE</div>
                        
                        <div className="input-double">
                            <input 
                                type="text" 
                                placeholder="First Name" 
                                name="firstName"
                                value={brokerState.firstName}
                                onChange={handleBrokerChange}
                            />

                            <div></div>

                            <input 
                                type="text" 
                                placeholder="Last Name" 
                                name="lastName"
                                value={brokerState.lastName}
                                onChange={handleBrokerChange}
                            />
                        </div>
                        
                        <div className="input-double">
                            <input 
                                type="phone" 
                                placeholder="Phone Number" 
                                name="phone"
                                value={brokerState.phone}
                                onChange={handleBrokerChange}
                            />

                            <div></div>

                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                name="email"
                                value={brokerState.email}
                                onChange={handleBrokerChange}
                            />
                        </div>
                        
                        <div className="input-single">
                            <textarea 
                                placeholder="Your Query"
                                name="message"
                                value={brokerState.message}
                                onChange={handleBrokerChange}
                            ></textarea>
                        </div>

                        <button>Send Message</button>
                    </form></div>
                
                    <div><div className="info">

                        <div className="title">CONTACT INFORMATION</div>

                        <div className="paragraph">
                            <img src={call} alt="phone" /> +2349876543210
                        </div>

                        <div className="paragraph">
                            <img src={emailTwo} alt="email" /> hello@e-learning.com
                        </div>

                        <div className="paragraph">
                            <img src={location} alt="location" /> 25, Lorem Ipsum, Lagos
                        </div>

                        <div className="social">
                            <div className="title">FOLLOW US</div>

                            <img src={students} alt="facebook" />
                            <img src={students} alt="instagram" />
                            <img src={students} alt="twitter" />
                            <img src={students} alt="linkedin" />
                        </div>

                    </div></div>

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home
