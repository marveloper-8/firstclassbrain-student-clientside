import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

import Footer from './Footer'
import Navigation from './Navigation'

import './css/general.css'
import './css/classroom.css'

import calender from '../icons/calender.svg'
import courses from '../icons/course-details.svg'

function Terms() {
    const [test, setTest] = useState(false)
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
                    <div className="navigation active">
                        <img src={courses} alt="course details" />
                        Video Section
                    </div>
                    
                    <Link className="link" to={`/course-text/${postDetails.post ? postDetails.post._id : "loading"}`}>
                    <div className="navigation">
                        <img src={courses} alt="Assignment" />
                        Text Section
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
                
                <div className="content">
                    <video className="video" 
                        src={postDetails.post ? postDetails.post.video : "loading"} 
                        title="video"
                        controls 
                    >
                        Your browser does not support the HTML5 Video element.
                    </video>
                </div>

                <div className="course-details-extras">
                    <div className="left"><button className="attendance">MARK ATTENDANCE</button></div>
                    <div className="right"><button className="assignment" onClick={() => setTest(!test)}>TAKE ASSIGNMENT</button></div>
                </div>
                
                <div className={test == false ? "take-test" : "take-test take-test-visible"}>
                    <div className="background" onClick={() => setTest(!test)}></div>

                    <div className="container">
                        <span className="close" onClick={() => setTest(!test)}>&times;</span>
                        <div className="title">Take this test</div>
                        <div className="text">
                            By clicking on the "Proceed to Test" button, you have therefore agreed to take this test. Reloading this page will result to automatic termination of the test and will result in a fail. Closing your browser will result to automatic termination of the test and will result in a fail.
                        </div>
                        <Link className="link" to={`/assignment/${postDetails.post ? postDetails.post._id : "loading"}`}>
                            <button>PROCEED TO TEST</button>
                        </Link>
                    </div>
                </div>


                <Footer />
            </div>
            
        </div>
    )
}

export default Terms
