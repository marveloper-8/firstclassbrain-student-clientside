import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// components
import Dashboard from './DashboardComp'
import Footer from './FooterHome'
import Navigation from './Navigation'
// icons
import unverified_icon from '../icons/unverified.svg'
// css
import './css/general.css'
import './css/classroom.css'

function Classroom() {
    const [payment, setPayment] = useState(false)
    const studentState = JSON.parse(localStorage.getItem("student"))
    const classSelected = `${studentState ? studentState.classSelected: "loading"}`

    const subjects = [
        {
            "class": 1,
            "subject": "maths",
            "name": "Mathematics",
            "icon": require("../icons/subjects/mathematics.svg")
        },
        {
            "class": 1,
            "subject": "english",
            "name": "English",
            "icon": require("../icons/subjects/english-studies.svg")
        },
        {
            "class": 1,
            "subject": "crk",
            "name": "C.R.K",
            "icon": require("../icons/subjects/christian-religious-studies.svg")
        },
        {
            "class": 1,
            "subject": "irk",
            "name": "I.R.K",
            "icon": require("../icons/subjects/islamic-religious-studies.svg")
        },
        {
            "class": 1,
            "subject": "social_studies",
            "name": "Social Studies",
            "icon": require("../icons/subjects/social-studies.svg")
        },
        {
            "class": 1,
            "subject": "health_education",
            "name": "Health Education",
            "icon": require("../icons/subjects/health-education.svg")
        },
        {
            "class": 1,
            "subject": "computer",
            "name": "Computer Science",
            "icon": require("../icons/subjects/computer-studies.svg")
        },
        {
            "class": 1,
            "subject": "spelling",
            "name": "Spelling",
            "icon": require("../icons/subjects/spelling.svg")
        },
        {
            "class": 1,
            "subject": "language",
            "name": "Language",
            "icon": require("../icons/subjects/language.svg")
        },
        {
            "class": 1,
            "subject": "diction",
            "name": "Diction",
            "icon": require("../icons/subjects/diction.svg")
        },
        {
            "class": 2,
            "subject": "maths",
            "name": "Mathematics",
            "icon": require("../icons/subjects/mathematics.svg")
        },
        {
            "class": 2,
            "subject": "english",
            "name": "English",
            "icon": require("../icons/subjects/english-studies.svg")
        },
        {
            "class": 2,
            "subject": "crk",
            "name": "C.R.K",
            "icon": require("../icons/subjects/christian-religious-studies.svg")
        },
        {
            "class": 2,
            "subject": "irk",
            "name": "I.R.K",
            "icon": require("../icons/subjects/islamic-religious-studies.svg")
        },
        {
            "class": 2,
            "subject": "social_studies",
            "name": "Social Studies",
            "icon": require("../icons/subjects/social-studies.svg")
        },
        {
            "class": 2,
            "subject": "health_education",
            "name": "Health Education",
            "icon": require("../icons/subjects/health-education.svg")
        },
        {
            "class": 2,
            "subject": "computer",
            "name": "Computer Science",
            "icon": require("../icons/subjects/computer-studies.svg")
        },
        {
            "class": 2,
            "subject": "spelling",
            "name": "Spelling",
            "icon": require("../icons/subjects/spelling.svg")
        },
        {
            "class": 2,
            "subject": "language",
            "name": "Language",
            "icon": require("../icons/subjects/language.svg")
        },
        {
            "class": 2,
            "subject": "diction",
            "name": "Diction",
            "icon": require("../icons/subjects/diction.svg")
        },
        {
            "class": 3,
            "subject": "maths",
            "name": "Mathematics",
            "icon": require("../icons/subjects/mathematics.svg")
        },
        {
            "class": 3,
            "subject": "english",
            "name": "English",
            "icon": require("../icons/subjects/english-studies.svg")
        },
        {
            "class": 3,
            "subject": "crk",
            "name": "C.R.K",
            "icon": require("../icons/subjects/christian-religious-studies.svg")
        },
        {
            "class": 3,
            "subject": "irk",
            "name": "I.R.K",
            "icon": require("../icons/subjects/islamic-religious-studies.svg")
        },
        {
            "class": 3,
            "subject": "social_studies",
            "name": "Social Studies",
            "icon": require("../icons/subjects/social-studies.svg")
        },
        {
            "class": 3,
            "subject": "health_education",
            "name": "Health Education",
            "icon": require("../icons/subjects/health-education.svg")
        },
        {
            "class": 3,
            "subject": "computer",
            "name": "Computer Science",
            "icon": require("../icons/subjects/computer-studies.svg")
        },
        {
            "class": 3,
            "subject": "spelling",
            "name": "Spelling",
            "icon": require("../icons/subjects/spelling.svg")
        },
        {
            "class": 3,
            "subject": "language",
            "name": "Language",
            "icon": require("../icons/subjects/language.svg")
        },
        {
            "class": 3,
            "subject": "diction",
            "name": "Diction",
            "icon": require("../icons/subjects/diction.svg")
        },
        {
            "class": 4,
            "subject": "maths",
            "name": "Mathematics",
            "icon": require("../icons/subjects/mathematics.svg")
        },
        {
            "class": 4,
            "subject": "english",
            "name": "English",
            "icon": require("../icons/subjects/english-studies.svg")
        },
        {
            "class": 4,
            "subject": "crk",
            "name": "C.R.K",
            "icon": require("../icons/subjects/christian-religious-studies.svg")
        },
        {
            "class": 4,
            "subject": "irk",
            "name": "I.R.K",
            "icon": require("../icons/subjects/islamic-religious-studies.svg")
        },
        {
            "class": 4,
            "subject": "social_studies",
            "name": "Social Studies",
            "icon": require("../icons/subjects/social-studies.svg")
        },
        {
            "class": 4,
            "subject": "health_education",
            "name": "Health Education",
            "icon": require("../icons/subjects/health-education.svg")
        },
        {
            "class": 4,
            "subject": "computer",
            "name": "Computer Science",
            "icon": require("../icons/subjects/computer-studies.svg")
        },
        {
            "class": 4,
            "subject": "spelling",
            "name": "Spelling",
            "icon": require("../icons/subjects/spelling.svg")
        },
        {
            "class": 4,
            "subject": "language",
            "name": "Language",
            "icon": require("../icons/subjects/language.svg")
        },
        {
            "class": 4,
            "subject": "diction",
            "name": "Diction",
            "icon": require("../icons/subjects/diction.svg")
        },
        {
            "class": 5,
            "subject": "maths",
            "name": "Mathematics",
            "icon": require("../icons/subjects/mathematics.svg")
        },
        {
            "class": 5,
            "subject": "english",
            "name": "English",
            "icon": require("../icons/subjects/english-studies.svg")
        },
        {
            "class": 5,
            "subject": "crk",
            "name": "C.R.K",
            "icon": require("../icons/subjects/christian-religious-studies.svg")
        },
        {
            "class": 5,
            "subject": "irk",
            "name": "I.R.K",
            "icon": require("../icons/subjects/islamic-religious-studies.svg")
        },
        {
            "class": 5,
            "subject": "social_studies",
            "name": "Social Studies",
            "icon": require("../icons/subjects/social-studies.svg")
        },
        {
            "class": 5,
            "subject": "health_education",
            "name": "Health Education",
            "icon": require("../icons/subjects/health-education.svg")
        },
        {
            "class": 5,
            "subject": "computer",
            "name": "Computer Science",
            "icon": require("../icons/subjects/computer-studies.svg")
        },
        {
            "class": 5,
            "subject": "spelling",
            "name": "Spelling",
            "icon": require("../icons/subjects/spelling.svg")
        },
        {
            "class": 5,
            "subject": "language",
            "name": "Language",
            "icon": require("../icons/subjects/language.svg")
        },
        {
            "class": 5,
            "subject": "diction",
            "name": "Diction",
            "icon": require("../icons/subjects/diction.svg")
        },
        {
            "class": 6,
            "subject": "maths",
            "name": "Mathematics",
            "icon": require("../icons/subjects/mathematics.svg")
        },
        {
            "class": 6,
            "subject": "english",
            "name": "English",
            "icon": require("../icons/subjects/english-studies.svg")
        },
        {
            "class": 6,
            "subject": "crk",
            "name": "C.R.K",
            "icon": require("../icons/subjects/christian-religious-studies.svg")
        },
        {
            "class": 6,
            "subject": "irk",
            "name": "I.R.K",
            "icon": require("../icons/subjects/islamic-religious-studies.svg")
        },
        {
            "class": 6,
            "subject": "basic_science",
            "name": "Basic Science",
            "icon": require("../icons/subjects/basic-science.svg")
        },
        {
            "class": 6,
            "subject": "business_studies",
            "name": "Business Studies",
            "icon": require("../icons/subjects/business-studies.svg")
        },
        {
            "class": 6,
            "subject": "civic",
            "name": "Civic Education",
            "icon": require("../icons/subjects/civic-education.svg")
        },
        {
            "class": 6,
            "subject": "basic_technology",
            "name": "Basic Technology",
            "icon": require("../icons/subjects/basic-technology.svg")
        },
        {
            "class": 7,
            "subject": "maths",
            "name": "Mathematics",
            "icon": require("../icons/subjects/mathematics.svg")
        },
        {
            "class": 7,
            "subject": "english",
            "name": "English",
            "icon": require("../icons/subjects/english-studies.svg")
        },
        {
            "class": 7,
            "subject": "crk",
            "name": "C.R.K",
            "icon": require("../icons/subjects/christian-religious-studies.svg")
        },
        {
            "class": 7,
            "subject": "irk",
            "name": "I.R.K",
            "icon": require("../icons/subjects/islamic-religious-studies.svg")
        },
        {
            "class": 7,
            "subject": "basic_science",
            "name": "Basic Science",
            "icon": require("../icons/subjects/basic-science.svg")
        },
        {
            "class": 7,
            "subject": "business_studies",
            "name": "Business Studies",
            "icon": require("../icons/subjects/business-studies.svg")
        },
        {
            "class": 7,
            "subject": "civic",
            "name": "Civic Education",
            "icon": require("../icons/subjects/civic-education.svg")
        },
        {
            "class": 7,
            "subject": "basic_technology",
            "name": "Basic Technology",
            "icon": require("../icons/subjects/basic-technology.svg")
        },
        {
            "class": 8,
            "subject": "maths",
            "name": "Mathematics",
            "icon": require("../icons/subjects/mathematics.svg")
        },
        {
            "class": 8,
            "subject": "english",
            "name": "English",
            "icon": require("../icons/subjects/english-studies.svg")
        },
        {
            "class": 8,
            "subject": "crk",
            "name": "C.R.K",
            "icon": require("../icons/subjects/christian-religious-studies.svg")
        },
        {
            "class": 8,
            "subject": "irk",
            "name": "I.R.K",
            "icon": require("../icons/subjects/islamic-religious-studies.svg")
        },
        {
            "class": 8,
            "subject": "basic_science",
            "name": "Basic Science",
            "icon": require("../icons/subjects/basic-science.svg")
        },
        {
            "class": 8,
            "subject": "business_studies",
            "name": "Business Studies",
            "icon": require("../icons/subjects/business-studies.svg")
        },
        {
            "class": 8,
            "subject": "civic",
            "name": "Civic Education",
            "icon": require("../icons/subjects/civic-education.svg")
        },
        {
            "class": 8,
            "subject": "basic_technology",
            "name": "Basic Technology",
            "icon": require("../icons/subjects/basic-technology.svg")
        },
        {
            "class": 9,
            "subject": "maths",
            "name": "Mathematics",
            "icon": require("../icons/subjects/mathematics.svg")
        },
        {
            "class": 9,
            "subject": "english",
            "name": "English",
            "icon": require("../icons/subjects/english-studies.svg")
        },
        {
            "class": 9,
            "subject": "biology",
            "name": "Biology",
            "icon": require("../icons/subjects/biology.svg")
        },
        {
            "class": 9,
            "subject": "physics",
            "name": "Physics",
            "icon": require("../icons/subjects/physics.svg")
        },
        {
            "class": 9,
            "subject": "further_maths",
            "name": "Further Mathematics",
            "icon": require("../icons/subjects/further-mathematics.svg")
        },
        {
            "class": 9,
            "subject": "chemistry",
            "name": "Chemistry",
            "icon": require("../icons/subjects/chemistry.svg")
        },
        {
            "class": 9,
            "subject": "agric",
            "name": "Agricultural Science",
            "icon": require("../icons/subjects/agricultural-science.svg")
        },
        {
            "class": 9,
            "subject": "economics",
            "name": "Economics",
            "icon": require("../icons/subjects/economics.svg")
        },
        {
            "class": 9,
            "subject": "civic",
            "name": "Civic Education",
            "icon": require("../icons/subjects/civic-education.svg")
        },
        {
            "class": 10,
            "subject": "maths",
            "name": "Mathematics",
            "icon": require("../icons/subjects/mathematics.svg")
        },
        {
            "class": 10,
            "subject": "english",
            "name": "English",
            "icon": require("../icons/subjects/english-studies.svg")
        },
        {
            "class":10,
            "subject": "crk",
            "name": "C.R.K",
            "icon": require("../icons/subjects/christian-religious-studies.svg")
        },
        {
            "class":10,
            "subject": "irk",
            "name": "I.R.K",
            "icon": require("../icons/subjects/islamic-religious-studies.svg")
        },
        {
            "class": 10,
            "subject": "commerce",
            "name": "Commerce",
            "icon": require("../icons/subjects/commerce.svg")
        },
        {
            "class": 10,
            "subject": "social_studies",
            "name": "Social Studies",
            "icon": require("../icons/subjects/social-studies.svg")
        },
        {
            "class": 10,
            "subject": "accounting",
            "name": "Financial Accounting",
            "icon": require("../icons/subjects/financial-accounting.svg")
        },
        {
            "class": 10,
            "subject": "civic",
            "name": "Civic Education",
            "icon": require("../icons/subjects/civic-education.svg")
        },
        {
            "class": 11,
            "subject": "maths",
            "name": "Mathematics",
            "icon": require("../icons/subjects/mathematics.svg")
        },
        {
            "class": 11,
            "subject": "english",
            "name": "English",
            "icon": require("../icons/subjects/english-studies.svg")
        },
        {
            "class":11,
            "subject": "crk",
            "name": "C.R.K",
            "icon": require("../icons/subjects/christian-religious-studies.svg")
        },
        {
            "class":11,
            "subject": "irk",
            "name": "I.R.K",
            "icon": require("../icons/subjects/islamic-religious-studies.svg")
        },
        {
            "class": 11,
            "subject": "government",
            "name": "Government",
            "icon": require("../icons/subjects/government.svg")
        },
        {
            "class": 11,
            "subject": "biology",
            "name": "Biology",
            "icon": require("../icons/subjects/biology.svg")
        },
        {
            "class": 11,
            "subject": "agric_science",
            "name": "Agricultural Science",
            "icon": require("../icons/subjects/agricultural-science.svg")
        },
        {
            "class": 11,
            "subject": "civic",
            "name": "Civic Education",
            "icon": require("../icons/subjects/civic-education.svg")
        },
        {
            "class": 12,
            "subject": "maths",
            "name": "Mathematics",
            "icon": require("../icons/subjects/mathematics.svg")
        },
        {
            "class": 12,
            "subject": "english",
            "name": "English",
            "icon": require("../icons/subjects/english-studies.svg")
        },
        {
            "class": 12,
            "subject": "biology",
            "name": "Biology",
            "icon": require("../icons/subjects/biology.svg")
        },
        {
            "class": 12,
            "subject": "physics",
            "name": "Physics",
            "icon": require("../icons/subjects/physics.svg")
        },
        {
            "class": 12,
            "subject": "further_maths",
            "name": "Further Mathematics",
            "icon": require("../icons/subjects/further-mathematics.svg")
        },
        {
            "class": 12,
            "subject": "chemistry",
            "name": "Chemistry",
            "icon": require("../icons/subjects/chemistry.svg")
        },
        {
            "class": 12,
            "subject": "agric",
            "name": "Agricultural Science",
            "icon": require("../icons/subjects/agricultural-science.svg")
        },
        {
            "class": 12,
            "subject": "economics",
            "name": "Economics",
            "icon": require("../icons/subjects/economics.svg")
        },
        {
            "class": 12,
            "subject": "civic",
            "name": "Civic Education",
            "icon": require("../icons/subjects/civic-education.svg")
        },
        {
            "class": 13,
            "subject": "maths",
            "name": "Mathematics",
            "icon": require("../icons/subjects/mathematics.svg")
        },
        {
            "class": 13,
            "subject": "english",
            "name": "English",
            "icon": require("../icons/subjects/english-studies.svg")
        },
        {
            "class":13,
            "subject": "crk",
            "name": "C.R.K",
            "icon": require("../icons/subjects/christian-religious-studies.svg")
        },
        {
            "class":13,
            "subject": "irk",
            "name": "I.R.K",
            "icon": require("../icons/subjects/islamic-religious-studies.svg")
        },
        {
            "class": 13,
            "subject": "commerce",
            "name": "Commerce",
            "icon": require("../icons/subjects/commerce.svg")
        },
        {
            "class": 13,
            "subject": "social_studies",
            "name": "Social Studies",
            "icon": require("../icons/subjects/social-studies.svg")
        },
        {
            "class": 13,
            "subject": "accounting",
            "name": "Financial Accounting",
            "icon": require("../icons/subjects/financial-accounting.svg")
        },
        {
            "class": 13,
            "subject": "civic",
            "name": "Civic Education",
            "icon": require("../icons/subjects/civic-education.svg")
        },
        {
            "class": 14,
            "subject": "maths",
            "name": "Mathematics",
            "icon": require("../icons/subjects/mathematics.svg")
        },
        {
            "class": 14,
            "subject": "english",
            "name": "English",
            "icon": require("../icons/subjects/english-studies.svg")
        },
        {
            "class":14,
            "subject": "crk",
            "name": "C.R.K",
            "icon": require("../icons/subjects/christian-religious-studies.svg")
        },
        {
            "class":14,
            "subject": "irk",
            "name": "I.R.K",
            "icon": require("../icons/subjects/islamic-religious-studies.svg")
        },
        {
            "class": 14,
            "subject": "government",
            "name": "Government",
            "icon": require("../icons/subjects/government.svg")
        },
        {
            "class": 14,
            "subject": "biology",
            "name": "Biology",
            "icon": require("../icons/subjects/biology.svg")
        },
        {
            "class": 14,
            "subject": "agric_science",
            "name": "Agricultural Science",
            "icon": require("../icons/subjects/agricultural-science.svg")
        },
        {
            "class": 14,
            "subject": "civic",
            "name": "Civic Education",
            "icon": require("../icons/subjects/civic-education.svg")
        },
        {
            "class": 15,
            "subject": "maths",
            "name": "Mathematics",
            "icon": require("../icons/subjects/mathematics.svg")
        },
        {
            "class": 15,
            "subject": "english",
            "name": "English",
            "icon": require("../icons/subjects/english-studies.svg")
        },
        {
            "class": 15,
            "subject": "biology",
            "name": "Biology",
            "icon": require("../icons/subjects/biology.svg")
        },
        {
            "class": 15,
            "subject": "physics",
            "name": "Physics",
            "icon": require("../icons/subjects/physics.svg")
        },
        {
            "class": 15,
            "subject": "further_maths",
            "name": "Further Mathematics",
            "icon": require("../icons/subjects/further-mathematics.svg")
        },
        {
            "class": 15,
            "subject": "chemistry",
            "name": "Chemistry",
            "icon": require("../icons/subjects/chemistry.svg")
        },
        {
            "class": 15,
            "subject": "agric",
            "name": "Agricultural Science",
            "icon": require("../icons/subjects/agricultural-science.svg")
        },
        {
            "class": 15,
            "subject": "economics",
            "name": "Economics",
            "icon": require("../icons/subjects/economics.svg")
        },
        {
            "class": 15,
            "subject": "civic",
            "name": "Civic Education",
            "icon": require("../icons/subjects/civic-education.svg")
        },
        {
            "class": 16,
            "subject": "maths",
            "name": "Mathematics",
            "icon": require("../icons/subjects/mathematics.svg")
        },
        {
            "class": 16,
            "subject": "english",
            "name": "English",
            "icon": require("../icons/subjects/english-studies.svg")
        },
        {
            "class":16,
            "subject": "crk",
            "name": "C.R.K",
            "icon": require("../icons/subjects/christian-religious-studies.svg")
        },
        {
            "class":16,
            "subject": "irk",
            "name": "I.R.K",
            "icon": require("../icons/subjects/islamic-religious-studies.svg")
        },
        {
            "class": 16,
            "subject": "commerce",
            "name": "Commerce",
            "icon": require("../icons/subjects/commerce.svg")
        },
        {
            "class": 16,
            "subject": "social_studies",
            "name": "Social Studies",
            "icon": require("../icons/subjects/social-studies.svg")
        },
        {
            "class": 16,
            "subject": "accounting",
            "name": "Financial Accounting",
            "icon": require("../icons/subjects/financial-accounting.svg")
        },
        {
            "class": 16,
            "subject": "civic",
            "name": "Civic Education",
            "icon": require("../icons/subjects/civic-education.svg")
        },
        {
            "class": 17,
            "subject": "maths",
            "name": "Mathematics",
            "icon": require("../icons/subjects/mathematics.svg")
        },
        {
            "class": 17,
            "subject": "english",
            "name": "English",
            "icon": require("../icons/subjects/english-studies.svg")
        },
        {
            "class":17,
            "subject": "crk",
            "name": "C.R.K",
            "icon": require("../icons/subjects/christian-religious-studies.svg")
        },
        {
            "class":17,
            "subject": "irk",
            "name": "I.R.K",
            "icon": require("../icons/subjects/islamic-religious-studies.svg")
        },
        {
            "class": 17,
            "subject": "government",
            "name": "Government",
            "icon": require("../icons/subjects/government.svg")
        },
        {
            "class": 17,
            "subject": "biology",
            "name": "Biology",
            "icon": require("../icons/subjects/biology.svg")
        },
        {
            "class": 17,
            "subject": "agric_science",
            "name": "Agricultural Science",
            "icon": require("../icons/subjects/agricultural-science.svg")
        },
        {
            "class": 17,
            "subject": "civic",
            "name": "Civic Education",
            "icon": require("../icons/subjects/civic-education.svg")
        }
    ]

    const subscribedAccount = () => {
        if(`${studentState ? studentState.paid : "loading"}` == "true"){
            return(
                <div className="subjects-container">
                    {
                        subjects.filter(item => item.class == classSelected).map(data => {
                            return(
                                <Link className="link" to={'/terms/' + data.subject}>
                                <div className="subjects">
                                    <div className="image">
                                        <img src={data.icon} alt={data.icon} />
                                    </div>
                                    <div className="label sub-title">{data.name}</div>
                                </div>
                                </Link>
                            )
                        })
                    }
                </div>
            )
        } else if(`${studentState ? studentState.paid : "loading"}` == "false"){
            return(
                <div className="subjects-container">
                    {
                        subjects.filter(item => item.class == classSelected).map(data => {
                            return(
                                <div className="subjects" onClick={() => setPayment(!payment)}>
                                    <div className="image">
                                        <img src={data.icon} alt={data.icon} />
                                    </div>
                                    <div className="label sub-title">{data.name}</div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }

    return (
        <div className="classroom">
            <Navigation />

            <section>
                <div className="head sub-title">
                    <Link className="link" to='/'><span>home</span></Link> / 
                    <span className="active"> classroom</span>
                </div>
            </section>
            
            <div className="dashboard-container">
                <div className="desktop">
                    <Dashboard />
                </div>

                {subscribedAccount()}
            </div>
            
            <Footer />

            <div className={payment ? "payment-plans open-payment-plans" : "payment-plans"}>
                <div className="payment-plans-inner">
                    <span className="close-payment" onClick={() => setPayment(!payment)}>&times; close</span>

                    <div className="title payment-title">SUBSCRIBE TO ACCESS THESE COURSES</div>

                    <div className="payment-table">
                        <div className="item">
                            <div className="inner bronze">
                                <div className="title">BRONZE</div>
                                <div className="price">
                                    ₦2,000
                                    <div className="subscription">1 (One) Month Subscription</div>
                                </div>
                                <a className="link" href="https://paystack.com/pay/firstclassbrain-monthly" rel="noopener noreferrer" target="_blank">
                                    <button>SUBSCRIBE NOW</button>
                                </a>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="inner silver">
                                <div className="title">SILVER</div>
                                <div className="price">
                                    ₦5,000
                                    <div className="subscription">3 (Three) Months Subscription</div>
                                </div>
                                <a className="link" href="https://paystack.com/pay/firstclassbrain-quarterly" rel="noopener noreferrer" target="_blank">
                                    <button>SUBSCRIBE NOW</button>
                                </a>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="inner gold">
                                <div className="title">GOLD</div>
                                <div className="price">
                                    ₦9,000
                                    <div className="subscription">6 (Six) Months Subscription</div>
                                </div>
                                <a className="link" href="https://paystack.com/pay/firstclassbrain-biannually" rel="noopener noreferrer" target="_blank">
                                    <button>SUBSCRIBE NOW</button>
                                </a>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="inner platinum">
                                <div className="title">PLATINUM</div>
                                <div className="price">
                                    ₦16,000
                                    <div className="subscription">1 (One) Year Subscription</div>
                                </div>
                                <a className="link" href="https://paystack.com/pay/firstclassbrain-yearly" rel="noopener noreferrer" target="_blank">
                                    <button>SUBSCRIBE NOW</button>
                                </a>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Classroom
