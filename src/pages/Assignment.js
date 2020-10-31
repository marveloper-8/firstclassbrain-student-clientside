import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

import Footer from './Footer'
import Navigation from './Navigation'

import './css/general.css'
import './css/classroom.css'

import calender from '../icons/calender.svg'
import courses from '../icons/course-details.svg'

function Terms() {
    const [submitAnswers, setSubmitAnswers] = useState(false)
    const {postId} = useParams()
    const {week} = useParams()
    console.log(postId)
    const [data, setData] = useState([])
    const [course, setCourse] = useState([])

    const {classSelected, subject, term} = useParams()
    console.log(classSelected, subject, term)
    
    useEffect(()=>{
        fetch(`https://firstclassbrain-server.herokuapp.com/all-tests`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                setData(result.tests)
            })
    },[])

    useEffect(()=>{
        fetch(`https://firstclassbrain-server.herokuapp.com/all-courses`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                setCourse(result.posts)
            })
    },[])

    console.log({postId})
    
    
    return (
        <div className="course-details">
            <Navigation />

            <div className="assignment-container">

            <div className="side-nav">
                <div className="week">
                    <img src={calender} alt="week" />
                    <div className="label title">Week {week}</div>
                </div>

                <div className="details-assignment">
                    <Link className="link" to={`/course-video/${postId}`}>
                    <div className="navigation">
                        <img src={courses} alt="course details" />
                        Video Section
                    </div>
                    </Link>
                    
                    <Link className="link" to={`/course-text/${postId}`}>
                    <div className="navigation">
                        <img src={courses} alt="Assignment" />
                        Text Section
                    </div>
                    </Link>
                    
                    <div className="navigation active">
                        <img src={courses} alt="Assignment" />
                        Assignment
                    </div>
                    
                </div>
            </div>

                <div className="main-content">
                    {
                        data.map(item => {
                            return(
                                <div className={postId === item.topic ? "" : "disappear"}>
                                    {/* {item.topic} */}
                                    {
                                        course.map(courseItem =>{
                                            return(
                                                <div className={postId === courseItem._id ? "" : "disappear"}>
                                                    <section style={{marginBottom:`5vh`}}>
                                                        <div className="head sub-title">
                                                            <span className="main">Assignment:</span> {courseItem.courseTitle} ({item.questions.length} Questions)
                                                        </div>

                                                        <div className="navigation">
                                                            {/* <Link className="link" to='/topics'>
                                                                <span className="back">{`<`} Back</span>
                                                            </Link> */}
                                                        </div>

                                                        <div className="margin-bottom"></div>
                                                        <div></div>

                                                        <div className="time">
                                                            Time Limit: 600 minutes
                                                        </div>

                                                        <div className="time time-remaining">
                                                            308 minutes remaining
                                                        </div>
                                                    </section>
                                
                                                    <div className="test-questions">
                                                        {
                                                            item.questions.map(questionsItem => {
                                                                console.log({questionsItem})
                                                                return(
                                                                    <div className="item">
                                                                        <div className="number">Question 1</div>
                                                                        <div className="question">
                                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum. Augue ut lectus arcu bibendum at varius vel pharetra. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ut aliquam purus sit amet luctus venenatis lectus. Quisque egestas diam in arcu cursus euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Lacinia quis vel eros donec ac odio. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra tellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vulputate odio ut enim blandit. Ut venenatis tellus in metus. Sed velit dignissim sodales ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Ultricies leo integer malesuada nunc vel risus.
                                                                        </div>
                                                                        <div className="answer-options">
                                                                            <div className="tab">
                                                                                <div className="select">
                                                                                    Option A
                                                                                </div>
                                                                                <div></div>
                                                                                <div className="label">
                                                                                    Option A Answer
                                                                                </div>
                                                                            </div>
                                                                            <div className="tab">
                                                                                <div className="select correct-answer">
                                                                                    Option B
                                                                                </div>
                                                                                <div></div>
                                                                                <div className="label">
                                                                                    Option B Answer
                                                                                </div>
                                                                            </div>
                                                                            <div className="tab">
                                                                                <div className="select">
                                                                                    Option C
                                                                                </div>
                                                                                <div></div>
                                                                                <div className="label">
                                                                                    Option C Answer
                                                                                </div>
                                                                            </div>
                                                                            <div className="tab">
                                                                                <div className="select">
                                                                                    Option D
                                                                                </div>
                                                                                <div></div>
                                                                                <div className="label">
                                                                                    Option D Answer
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                        <button className="submit" onClick={() => setSubmitAnswers(!submitAnswers)}>SUBMIT ANSWERS</button>
                                                    </div>
                
                                                    <div className={submitAnswers ? "popup-toggle popup" : "popup"}>
                                                        <div className="background" onClick={() => setSubmitAnswers(!submitAnswers)}></div>
                                                        <div className="submit-answers-inner">
                                                            <div className="text">
                                                                Do you want to submit?
                                                            </div>

                                                            <div className="buttons">
                                                                <button className="no" onClick={() => setSubmitAnswers(!submitAnswers)}>No</button>

                                                                <Link className="link" to='/assignment-score'>
                                                                    <button className="yes">Yes</button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    
                                </div>
                            )
                        })
                    }

                    <Footer />
                </div>
                
            </div>
        </div>
    )
}

export default Terms
