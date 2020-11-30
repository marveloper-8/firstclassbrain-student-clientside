import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useTimer} from 'react-timer-hook'

import Footer from './FooterHome'
import Navigation from './Navigation'

import './css/general.css'
import './css/classroom.css'

import calender from '../icons/calender.svg'
import courses from '../icons/course-details.svg'

function Terms() {
    const time = new Date();
    
    const [submitAnswers, setSubmitAnswers] = useState(false)
    const {postId} = useParams()

    const [testDetails, setTestDetails] = useState([])
    const [data, setData] = useState([])

    const submitAction = e => {
        e.preventDefault()
        setSubmitAnswers(!submitAnswers)
    }
    
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

    useEffect(() => {
        fetch(`https://firstclassbrain-server.herokuapp.com/student/test-details/${postId}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setTestDetails(result)
            })
    }, [postId])

    console.log({postId})
    
    
    return (
        <div className="course-details">
            <Navigation />

            <div className="assignment-container">

            <div className="side-nav">
                <div className="week">
                    <img src={calender} alt="week" />
                    <div className="label title">Week {testDetails.test ? testDetails.test.week : "loading"}</div>
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
                <section style={{marginBottom:`5vh`}}>
                    <div className="head sub-title">
                        <span className="main">Assignment:</span> {testDetails.test ? testDetails.test.topic : "loading"} ({testDetails.test ? testDetails.test.questions.length : "loading"} Questions)
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

                <form className="test-questions">
                    <ol>
                        {
                            testDetails.test 
                            ? 
                            testDetails.test.questions.map(questionsItem => {
                                console.log({questionsItem})
                                return(
                                    <div className="item">
                                        <div className="number">Question<li>&nbsp;</li></div>
                                        <div className="question">
                                            {questionsItem.question}
                                        </div>
                                        <div className="answer-options">
                                            <div className="tab">
                                                <div className="select">
                                                    Option A
                                                </div>
                                                <div></div>
                                                <div className="label">
                                                    {questionsItem.answerA}
                                                </div>
                                            </div>
                                            <div className="tab">
                                                <div className="select correct-answer">
                                                    Option B
                                                </div>
                                                <div></div>
                                                <div className="label">
                                                    {questionsItem.answerB}
                                                </div>
                                            </div>
                                            <div className="tab">
                                                <div className="select">
                                                    Option C
                                                </div>
                                                <div></div>
                                                <div className="label">
                                                    {questionsItem.answerC}
                                                </div>
                                            </div>
                                            <div className="tab">
                                                <div className="select">
                                                    Option D
                                                </div>
                                                <div></div>
                                                <div className="label">
                                                    {questionsItem.answerD}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            : 
                            "loading"
                        }
                    </ol>
                    <button className="submit" onClick={submitAction}>SUBMIT ANSWERS</button>
                </form>

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
                <Footer />
            </div>
                
            </div>
        </div>
    )
}

export default Terms
