import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

import Footer from './Footer'
import Navigation from './Navigation'

import './css/general.css'
import './css/classroom.css'

import calender from '../icons/calender.svg'
import courses from '../icons/course-details.svg'

function Terms() {
    const {postId} = useParams()
    console.log(postId)

    const [postDetails, setPostDetails] = useState([])

    useEffect(() => {
        fetch(`https://firstclassbrain-server.herokuapp.com/course-details/${postId}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setPostDetails(result)
            })
    }, [postId])
    
    return (
        <div className="course-details">
            <Navigation />

            <div className="side-nav">
                <div className="week">
                    <img src={calender} alt="week" />
                    <div className="label title">Week {postDetails.post ? postDetails.post.week : "loading"}</div>
                </div>

                <div className="details-assignment">
                    <Link className="link" to={`/course-video/${postDetails.post ? postDetails.post._id : "loading"}`}>
                    <div className="navigation">
                        <img src={courses} alt="course details" />
                        Video Section
                    </div>
                    </Link>
                    
                    <div className="navigation active">
                        <img src={courses} alt="Assignment" />
                        Text Section
                    </div>
                    
                    <Link className="link" to={`/assignment/${postDetails.post ? postDetails.post._id : "loading"}/${postDetails.post ? postDetails.post.week : "loading"}`}>
                    <div className="navigation">
                        <img src={courses} alt="Assignment" />
                        Assignment
                    </div>
                    </Link>
                    
                </div>
            </div>

            <div className="main-content">
                <section>
                    <div className="head">
                        {postDetails.post ? postDetails.post.courseTitle : "loading"}
                    </div>
                </section>
            
                <Carousel>
                    <Carousel.Item>
                    <div className="content">
                        <div className="video"
                        style={{
                            backgroundImage: `url(${postDetails.post ? postDetails.post.firstImageSlide : "loading"})`,
                            backgroundSize:`cover`,
                            backgroundPosition:`center`
                        }}></div>
                        <div className="sub-title">Slide 1</div>
                        <div className="text">
                            {postDetails.post ? postDetails.post.firstTextSlide : "loading"}
                        </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="content">
                        <div className="video"
                        style={{
                            backgroundImage: `url(${postDetails.post ? postDetails.post.secondImageSlide : "loading"})`,
                            backgroundSize:`cover`,
                            backgroundPosition:`center`
                        }}></div>
                        <div className="sub-title">Slide 2</div>
                        <div className="text">
                            {postDetails.post ? postDetails.post.secondTextSlide : "loading"}
                        </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="content">
                        <div className="video"
                        style={{
                            backgroundImage: `url(${postDetails.post ? postDetails.post.thirdImageSlide : "loading"})`,
                            backgroundSize:`cover`,
                            backgroundPosition:`center`
                        }}></div>
                        <div className="sub-title">Slide 3</div>
                        <div className="text">
                            {postDetails.post ? postDetails.post.thirdTextSlide : "loading"}
                        </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="content">
                        <div className="video"
                        style={{
                            backgroundImage: `url(${postDetails.post ? postDetails.post.fourthImageSlide : "loading"})`,
                            backgroundSize:`cover`,
                            backgroundPosition:`center`
                        }}></div>
                        <div className="sub-title">Slide 4</div>
                        <div className="text">
                            {postDetails.post ? postDetails.post.fourthTextSlide : "loading"}
                        </div>
                    </div>
                    </Carousel.Item>
                </Carousel>

                <div className="attendance">
                    <input type='checkbox' />
                    <span>Attendance</span>
                </div>

                <Footer />
            </div>
            
        </div>
    )
}

export default Terms
