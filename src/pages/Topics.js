import React, {useState, useContext, useEffect} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'

import Footer from './Footer'
import Navigation from './Navigation'

import './css/general.css'
import './css/classroom.css'

import goal from '../icons/goal.svg'

// data
import weeks from '../data/weeks.json'

function Classroom() {
    const [data, setData] = useState([])

    const {classSelected, subject, term, week} = useParams()
    console.log(classSelected, subject, term, week)
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
        fetch('https://firstclassbrain-server.herokuapp.com/all-courses', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                setData(result.posts)
            })
    },[])
    
    return (
        <div className="classroom">
            <Navigation />

            <section>
                <div className="head sub-title">
                    <Link className="link" to='/'><span>home</span></Link> / 
                    <Link className="link" to='/classroom'><span> {compsClass}</span></Link> / 
                    <Link className="link" to={'/subjects/' + classSelected}><span> {subject}</span></Link> / 
                    <Link className="link" to={'/terms/' + classSelected + '/' + subject}><span> {compsTerm}</span></Link> / 
                    <Link className="link" to={'/weeks/' + classSelected + '/' + subject + '/' + week}><span> {compsWeek}</span></Link> / 
                    <span className="active"> topics</span>
                </div>
            </section>
            
            <div className="subjects-container">
                {
                    data.map(item => {
                        return(
                            <div className={classSelected == item.classSelected && subject == item.subject && term == item.term && week == item.week ? "" : "disappear"}>
                                <Link className="link" to={'/topics/' + classSelected + '/' + subject + '/' + term + '/' + item.week}>
                                <div className="topics"
                                    style={{
                                        backgroundImage: `url(${item.courseThumbnail})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                >
                                    <div className="label sub-title">
                                        {item.courseTitle}
                                  
                                        <div className="button-container">
                                            <Link className="link" to={'/course-video/' + item._id}>
                                            <button className="video">
                                                Watch Video
                                            </button>
                                            </Link>
                                            <Link className="link" to={'/course-text/' + item._id}>
                                            <button className="text">
                                                Read Text
                                            </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
            
                        )
                    })
                }
            </div>

            <Footer />
        </div>
    )
}

export default Classroom
