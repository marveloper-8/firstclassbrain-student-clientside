import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import './css/App.scss'

import Footer from './FooterHome'
import Navigation from './Navigation'
import Slides from './Slides'

import header from '../images/student-learning.png'

import students from '../icons/students.svg'
import courses from '../icons/courses.svg'
import instructors from '../icons/instructors.svg'
import art from '../icons/art.svg'
import accounting from '../icons/accounting.svg'
import law from '../icons/law.svg'
import science from '../icons/science.svg'

import './css/home.css'
import './css/general.css'

const Home = () => {
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
                    
                    <div className="tab" style={{border:`none`}}>
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
                            backgroundImage: `url(${`https://extras.firstclassbrain.com/four.png`})`,
                            backgroundSize:`cover`,
                            backgroundPosition:`center`
                        }}
                    ></div>

                    <div className="text">
                        <div className="title">ABOUT US</div>
                        FCB App is an E-learning school platform that proffers solutions to bridge the gap in the drop of Educational standard in Nigeria and Africa. With FCB App students or pupils can improve on all subjects from the comfort of their home thereby eliminating the need for home teacher. 

                        FIRST CLASS BRAIN is developed in such a way that the pupils and students have access to classroom teaching materials that is dictated by the school curriculum. 

                        It is to support the work of the teacher in school and to ensure that your child ends up as the genius he is created to be.

                        whats more is that the use of the app exposes the pupil/student to pratical use of computer.
                    </div>
                </div>
                
            </section>
            
            <section className="courses">

                <div 
                    className="content"
                    style={{
                        backgroundImage: `url(${`https://extras.firstclassbrain.com/five.png`})`,
                        backgroundSize:`cover`,
                        backgroundPosition:`center`
                    }}
                >
                    <div className="background-overlay"></div>

                    <div className="title">
                        COURSES ON ALL PRIMARY & SECONDARY SCHOOL LEVELS
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
                <div className='desktop'>
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
                </div>
                
                
                <div className='mobile'>
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
                        </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                
            </section>
            
            <Footer />
        </div>
    )
}

export default Home