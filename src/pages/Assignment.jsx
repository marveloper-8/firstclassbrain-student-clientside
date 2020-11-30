import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useTimer} from 'react-timer-hook'

import Footer from './Footer'
import Navigation from './Navigation'

import './css/general.css'
import './css/classroom.css'

function Terms() {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 30);

    const {
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp, autoStart:true, onExpire: () => console.warn('onExpire called') });
    
    const [submitAnswers, setSubmitAnswers] = useState(false)
    const [testScore, setTestScore] = useState(0)
    // const [answerSelected, setAnswerSelected] = useState("answerA")

    const [state, setState] = useState({
        answers:[{answerElected: "answerA"}]
    })

    const handleAnswerElected = (idx) => (evt) => {
        const newAnswers = state.answers.map((shareholder, qidx) => {
          if (idx !== qidx) return shareholder;
          return { ...shareholder, answerElected: evt.target.value };
        });
        
        setState({...state, answers: newAnswers });
    }

    const [testDetails, setTestDetails] = useState([])
    const [data, setData] = useState([])

    const testIncrease = () => {
        setTestScore(testScore + 1)
    }

    const testHello = () => {
        alert("Hello")
    }

    const {postId} = useParams()

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

    console.log(testDetails.test)

    
    
    
    return (
        <div className="course-details">
            {isRunning ? "" : alert("Your time for this test is up. Click on the Submit Answers button to proceed.")}
            <Navigation />
            <div className="main-content test-container">
                <div className="test-container-inner">
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
                            Time Limit: 0:45 minutes
                        </div>

                        <div className="time time-remaining">
                            {minutes} : {seconds} minutes remaining
                        </div>
                    </section>

                    {testScore}
                    <br />

                    <form className="test-questions">
                        <ol>
                            {
                                testDetails.test 
                                ? 
                                testDetails.test.questions.map((questionsItem, idx) => {
                                    console.log({questionsItem})
                                    return(
                                        <>
                                        {state.answers.map((shareholder, tidx) => (
                                            <div className="item" key={idx}>
                                                {shareholder.answerElected}

                                                <div className="number">Question<li className="digits">&nbsp;</li></div>
                                                <div className="question">
                                                    {questionsItem.question}
                                                </div>
                                                <div className="answer-options">
                                                    <div className="tab">
                                                        <div className="select" onClick={testHello}>
                                                            <input 
                                                                type="radio"
                                                                name={tidx + 1}
                                                                value="answerA"
                                                                className="radio"
                                                                onChange={handleAnswerElected(tidx)}
                                                                disabled = {
                                                                    isRunning
                                                                    ?
                                                                    false
                                                                    :
                                                                    true
                                                                }
                                                            />
                                                            <span className={
                                                                isRunning 
                                                                ? 
                                                                "checkmark" 
                                                                : 
                                                                "checkmark select-background-change"
                                                            }></span>
                                                            <span className="text">
                                                                Option A
                                                            </span>
                                                        </div>
                                                        <div></div>
                                                        <div className="label">
                                                            {questionsItem.answerA}
                                                        </div>
                                                    </div>
                                                    <div className="tab">
                                                        <div className="select">
                                                            <input 
                                                                type="radio"
                                                                name={tidx + 1}
                                                                value="answerB"
                                                                className="radio"
                                                                onChange={handleAnswerElected(tidx)}
                                                                disabled = {
                                                                    isRunning
                                                                    ?
                                                                    false
                                                                    :
                                                                    true
                                                                }
                                                            />
                                                            <span className={
                                                                isRunning 
                                                                ? 
                                                                "checkmark" 
                                                                : 
                                                                "checkmark select-background-change"
                                                            }></span>
                                                            <span className="text">
                                                                Option B
                                                            </span>
                                                        </div>
                                                        <div></div>
                                                        <div className="label">
                                                            {questionsItem.answerB}
                                                        </div>
                                                    </div>
                                                    <div className="tab">
                                                        <div className="select">
                                                            <input 
                                                                type="radio"
                                                                name={tidx + 1}
                                                                value="answerC"
                                                                className="radio"
                                                                onChange={handleAnswerElected(tidx)}
                                                                disabled = {
                                                                    isRunning
                                                                    ?
                                                                    false
                                                                    :
                                                                    true
                                                                }
                                                            />
                                                            <span className={
                                                                isRunning 
                                                                ? 
                                                                "checkmark" 
                                                                : 
                                                                "checkmark select-background-change"
                                                            }></span>
                                                            <span className="text">
                                                                Option C
                                                            </span>
                                                        </div>
                                                        <div></div>
                                                        <div className="label">
                                                            {questionsItem.answerC}
                                                        </div>
                                                    </div>
                                                    <div className="tab">
                                                        <div className="select">
                                                            <input 
                                                                type="radio"
                                                                name={tidx + 1}
                                                                value="answerD"
                                                                className="radio"
                                                                onChange={handleAnswerElected(tidx)}
                                                                disabled = {
                                                                    isRunning
                                                                    ?
                                                                    false
                                                                    :
                                                                    true
                                                                }
                                                            />
                                                            <span className={
                                                                isRunning 
                                                                ? 
                                                                "checkmark" 
                                                                : 
                                                                "checkmark select-background-change"
                                                            }></span>
                                                            <span className="text">
                                                                Option D
                                                            </span>
                                                        </div>
                                                        <div></div>
                                                        <div className="label">
                                                            {questionsItem.answerD}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        </>
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
                    
                </div>
                
                <Footer />
            </div>
        </div>
    )
}

export default Terms
