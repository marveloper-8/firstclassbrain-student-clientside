import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useTimer} from 'react-timer-hook'

import Footer from './Footer'
import Navigation from './Navigation'
import QuestionItem from './QuestionItem'
import Correction from './Correction'

import './css/general.css'
import './css/classroom.css'

import wrong from '../illustrations/wrong.svg'
import correct from '../illustrations/correct.svg'

function Assignment() {
    const [submitAnswers, setSubmitAnswers] = useState(false)
    const {postId} = useParams()
    const [correction, setCorrection] = useState(false)
    const [testDetails, setTestDetails] = useState([])
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

    // questions
    const [testQuestions, setTestQuestions] = useState([
        {score: ""}
    ])

    useEffect(() => {
        fetch(`https://firstclassbrain-server.herokuapp.com/student/test-details/${postId}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setTestQuestions(result.test.questions)
            })
    }, [postId])

    console.log(testQuestions)

    // percentage
    const percent = testQuestions.length
    const value = testQuestions.filter(i => i.score === "correct").length
    const percentages = (value/percent) * 100
    const percent_value = percentages.toFixed(0)
    console.log(percent_value)

    // submit action
    const submitAction = e => {
        e.preventDefault()
        setSubmitAnswers(!submitAnswers)
    }

    const [isRunning, setIsRunning] = useState(true)

    const correction_info = () => {
        if(correction){
            return [
                <>
                    <section>
                        <div className="sub-title">
                            <span className="main">{testDetails.test ? testDetails.test.title : "loading"}:</span> TEST SCORE AND CORRECTIONS ({testDetails.test ? testDetails.test.questions.length : "loading"} Questions)
                        </div>
                    </section>

                    <div className="score-projection">
                        <div className="incline-decline">
                            <img src={wrong} alt="incline" />
                            <br />
                            {percent - value} wrong answers
                        </div>
                        <div className="percentage">
                            <div className="bold">{percent_value}%</div>
                            answered correctly
                        </div>
                        <div className="incline-decline">
                            <img src={correct} alt="decline" />
                            <br />
                            {value} correct answers
                        </div>
                    </div>
                    
                    <div className="test-questions">
                        <ol>
                            {
                                testQuestions 
                                ? 
                                testQuestions.map(questions => {
                                    return <li className="item" key={questions._id}>
                                        <Correction questions={questions} />
                                    </li>
                                })
                                : 
                                "loading"
                            }
                        </ol>
                    </div>

                </>
            ]
        } else{
            return[
                <>
                    <section>
                        <div className="sub-title">
                            <span className="main">Assignment:</span> {testDetails.test ? testDetails.test.title : "loading"} ({testDetails.test ? testDetails.test.questions.length : "loading"} Questions)
                        </div>

                        <div className="navigation">
                            {/* <Link className="link" to='/topics'>
                                <span className="back">{`<`} Back</span>
                            </Link> */}
                        </div>

                        <div className="margin-bottom"></div>
                        <div></div>

                        <div className="time">
                            Time Limit: 0:{parseInt(`${1}`)} minutes
                        </div>

                        <div className="time time-remaining">
                            {1} : {1} minutes remaining
                        </div>
                    </section>
                    <form className="test-questions">
                        <ol>
                            {
                                testQuestions 
                                ? 
                                testQuestions.map((questions, i) => {
                                    return <li className="item" key={questions._id}>
                                        <QuestionItem 
                                            questions={questions} 
                                            isRunning={isRunning}
                                            value={questions.score}
                                            handleChange={e => {
                                                testQuestions[i].score = e.target.value;
                                                setTestQuestions([...testQuestions])
                                            }}
                                        />
                                    </li>
                                })
                                : 
                                "loading"
                            }
                        </ol>

                        <button className="submit" onClick={submitAction}>SUBMIT ANSWERS</button>
                        
                        {/* {
                            testDetails.test 
                            ? 
                            testDetails.test.questions.foreach({

                            })
                        } */}
                    </form>

                    <div className={submitAnswers ? "popup-toggle popup" : "popup"}>
                        <div className="background" onClick={() => setSubmitAnswers(!submitAnswers)}></div>
                        <div className="submit-answers-inner">
                            <div className="text">
                                Do you want to submit?
                            </div>

                            <div className="buttons">
                                <button className="no" onClick={() => setSubmitAnswers(!submitAnswers)}>No</button>

                                {/* <Link className="link" to={`/assignment-score/${postId}/${percentages}`}>
                                    <button className="yes">Yes</button>
                                </Link> */}
                                <button className="yes" 
                                    onClick={() => setCorrection(true)
                                    // () => setSubmitAnswers(!submitAnswers)
                                }>
                                    Yes
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ]
        }
        
    }

    return (
        <div className="course-details">
            {isRunning ? "" : alert("Your time for this test is up. Click on the Submit Answers button to proceed.")}
            <Navigation />
            <div className="main-content test-container">
                <div className="test-container-inner">
                    {correction_info()}
                </div>
                
                <Footer />
            </div>
        </div>
    )
}

export default Assignment
