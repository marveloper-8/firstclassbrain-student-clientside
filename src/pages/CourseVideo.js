import React, {useState, useContext, useEffect} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'

import {UserContext} from '../App'

import Footer from './Footer'
import Navigation from './Navigation'

import './css/general.css'
import './css/classroom.css'

import calender from '../icons/calender.svg'
import courses from '../icons/course-details.svg'

function Terms() {
    const [addCourse, setAddCourse] = useState(false)
    const {state, dispatch} = useContext(UserContext)
    const {postId} = useParams()
    console.log(postId)
    const history = useHistory()

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
    }, [])
    
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
                
                <div className="content">
                    <iframe className="video" src={postDetails.post ? postDetails.post.video : "loading"}>
                    </iframe>
                </div>

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
