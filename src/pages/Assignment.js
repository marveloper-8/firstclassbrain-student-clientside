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
    const [submitAnswers, setSubmitAnswers] = useState(false)
    const {postId} = useParams()
    const {week} = useParams()
    console.log(postId)
    const [data, setData] = useState([])
    const [course, setCourse] = useState([])
    const [questions, setQuestions] = useState([])

    const {classSelected, subject, term} = useParams()
    console.log(classSelected, subject, term)
    let compsClass = ""
    let compsTerm = ""
    let compsWeek = ""

    switch(classSelected){
        case `1`: compsClass = "Basic 1";
        break;
        case `2`: compsClass = "Basic 2";
        break;
        case `3`: compsClass = "Basic 3";
        break;
        case `4`: compsClass = "Basic 4";
        break;
        case `5`: compsClass = "Basic 5";
        break;
        case `6`: compsClass = "JSS 1";
        break;
        case `7`: compsClass = "JSS 2";
        break;
        case `8`: compsClass = "JSS 3";
        break;
        case `9`: compsClass = "SSS 1 (Science)";
        break;
        case `10`: compsClass = "SSS 1 (Commercial)";
        break;
        case `11`: compsClass = "SSS 1 (Art)";
        break;
        case `12`: compsClass = "SSS 2 (Science)";
        break;
        case `13`: compsClass = "SSS 2 (Commercial)";
        break;
        case `14`: compsClass = "SSS 2 (Art)";
        break;
        default: compsClass = "Classroom"
    }

    switch(term){
        case `1`: compsTerm = "1st Term";
        break;
        case `2`: compsTerm = "2nd Term";
        break;
        case `3`: compsTerm = "3rd Term";
        break;
        default: compsTerm = "Term"
    }

    switch(week){
        case `1`: compsWeek = "Week 1";
        break;
        case `2`: compsWeek = "Week 2";
        break;
        case `3`: compsWeek = "Week 3";
        break;
        case `4`: compsWeek = "Week 4";
        break;
        case `5`: compsWeek = "Week 5";
        break;
        case `6`: compsWeek = "Week 6";
        break;
        case `7`: compsWeek = "Week 7";
        break;
        case `8`: compsWeek = "Week 8";
        break;
        case `9`: compsWeek = "Week 9";
        break;
        case `10`: compsWeek = "Week 10";
        break;
        case `11`: compsWeek = "Week 11";
        break;
        case `12`: compsWeek = "Week 12";
        break;
        case `13`: compsWeek = "Week 13";
        break;
        case `14`: compsWeek = "Week 14";
        break;
        default: compsWeek = "Week"
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
                    <div className="label">Week {week}</div>
                </div>

                <div className="details-assignment">
                    <Link className="link" to={`/course-video/${postId}`}>
                    <div className="navigation">
                        <img src={courses} alt="course details" />
                        Video Section
                    </div>
                    </Link>
                    
                    <Link className="link" to={`/assignment/${postId}`}>
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
                                <div className={postId == item.topic ? "" : "disappear"}>
                                    {/* {item.topic} */}
                                    {
                                        course.map(courseItem =>{
                                            return(
                                                <div className={postId == courseItem._id ? "" : "disappear"}>
                                                    <section style={{marginBottom:`5vh`}}>
                                                        <div className="head sub-title">
                                                            <span className="main">Assignment:</span> {courseItem.courseTitle} ({item.questions.length} Questions)
                                                        </div>

                                                        <div className="navigation">
                                                            {/* <Link className="link" to='/topics'>
                                                                <span className="back">{`<`} Back</span>
                                                            </Link> */}
                                                        </div>

                                                        <div style={{marginBottom:`5vh`}}></div>
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
