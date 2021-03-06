import React, {useState} from 'react'
import {Link, useParams} from 'react-router-dom'
// components
import Dashboard from './DashboardComp'
import Footer from './Footer'
import Navigation from './Navigation'
// css
import './css/general.css'
import './css/classroom.css'
// calender
import calendar from '../icons/calender.svg'
import tests from '../icons/tests.svg'
// data
import weeks from '../data/weeks.json'

function Classroom() {
    const [test, setTest] = useState(false)
    const {subject, term} = useParams()
    console.log(subject, term)
    let compsTerm = ""

    switch(term){
        case `1`: compsTerm = "1st Term";
        break;
        case `2`: compsTerm = "2nd Term";
        break;
        case `3`: compsTerm = "3rd Term";
        break;
        default: compsTerm = "Term"
    }
    
    return (
        <div className="classroom">
            <Navigation />

            <section>
                <div className="head sub-title">
                    <Link className="link" to='/'><span>home</span></Link> / 
                    <Link className="link" to='/classroom'><span> {subject} </span></Link> / 
                    <Link className="link" to={'/terms/' + subject}><span> {compsTerm}</span></Link> / 
                    <span className="active"> weeks</span>
                </div>
            </section>
            
            <div className="dashboard-container">
                <div className="desktop">
                    <Dashboard />
                </div>
            
                <div className="subjects-container">
                    {
                        weeks.map(item => {
                            return(
                                <div>
                                    <Link className="link" to={'/topics/' + subject + '/' + term + '/' + item.week}>
                                    <div className="subjects">
                                        <div className="image">
                                            <img src={calendar} alt="Mathematics" />
                                        </div>
                                        <div className="label sub-title">{item.name}</div>
                                    </div>
                                    </Link>
                                </div>
                
                            )
                        })
                    }
                    <div className="subjects take-test-container" onClick={() => setTest(!test)}>
                        <div className="image">
                            <img src={tests} alt="Mathematics" />
                        </div>
                        <div className="label">TAKE EXAM</div>
                    </div>
                </div>
            </div>
                
            <div className={test == false ? "take-test" : "take-test take-test-visible"}>
                <div className="background" onClick={() => setTest(!test)}></div>

                <div className="container">
                    <span className="close" onClick={() => setTest(!test)}>&times;</span>
                    <div className="title">Take this test</div>
                    <div className="text">
                        By clicking on the "Proceed to Test" button, you have therefore agreed to take this test. Reloading this page will result to automatic termination of the test and will result in a fail. Closing your browser will result to automatic termination of the test and will result in a fail.
                    </div>
                    <Link className="link" to={'/examination/' + subject + '/' + term}>
                        <button>PROCEED TO TEST</button>
                    </Link>
                </div>
            </div>

            
            <Footer />
        </div>
    )
}

export default Classroom
