import React from 'react'
import {Link, useParams} from 'react-router-dom'
// components
import Dashboard from './DashboardComp'
import Footer from './Footer'
import Navigation from './Navigation'
// css
import './css/general.css'
import './css/classroom.css'
// icons
import calendar from '../icons/calendar-alt.svg'

// data

function Classroom() {
    const {classSelected, subject} = useParams()
    console.log(classSelected, subject)
    
    return (
        <div className="classroom">
            <Navigation />

            <section>
                <div className="head sub-title">
                    <Link className="link" to='/'><span>home</span></Link> / 
                    <Link className="link" to={'/classroom'}><span> {subject}</span></Link> / 
                    <span className="active"> terms</span>
                </div>
            </section>
            
            <div className="dashboard-container">
                <div className="desktop">
                    <Dashboard />
                </div>
            
                <div className="subjects-container">
                    <div>
                        <Link className="link" to={'/weeks/' + subject + '/' + 1}>
                        <div className="subjects">
                            <div className="image">
                                <img src={calendar} alt="Mathematics" />
                            </div>
                            <div className="label sub-title">First Term</div>
                        </div>
                        </Link>
                    </div>
                    
                    <div>
                        <Link className="link" to={'/weeks/' + subject + '/' + 2}>
                        <div className="subjects">
                            <div className="image">
                                <img src={calendar} alt="Mathematics" />
                            </div>
                            <div className="label sub-title">Second Term</div>
                        </div>
                        </Link>
                    </div>
                    
                    <div>
                        <Link className="link" to={'/weeks/' + subject + '/' + 3}>
                        <div className="subjects">
                            <div className="image">
                                <img src={calendar} alt="Mathematics" />
                            </div>
                            <div className="label sub-title">Third Term</div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Classroom
