import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
// components
import Dashboard from './DashboardComp'
import Footer from './Footer'
import Navigation from './Navigation'
// css
import './css/general.css'
import './css/classroom.css'

function Classroom() {
    const [data, setData] = useState([])
    const {subject, term, week} = useParams()
    const studentState = JSON.parse(localStorage.getItem("student"))
    const classSelected = `${studentState ? studentState.classSelected: "loading"}`
    console.log(classSelected, subject, term, week)
    let compsTerm = ""
    let compsWeek = ""

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
                    <Link className="link" to='/classroom'><span> {subject}</span></Link> / 
                    <Link className="link" to={'/terms/' + subject}><span> {compsTerm}</span></Link> / 
                    <Link className="link" to={'/weeks/' + subject + '/' + week}><span> {compsWeek}</span></Link> / 
                    <span className="active"> topics</span>
                </div>
            </section>
            
            <div className="dashboard-container">
                <div className="desktop">
                    <Dashboard />
                </div>
            
                <div className="subjects-container">
                    {
                        data.filter(itemData => itemData.classSelected == classSelected && itemData.subject == subject && itemData.term == term && itemData.week == week).map(item => {
                            return(
                                <Link className="link" to={'/course-text/' + item._id}>
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
                            )
                        })
                    }
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Classroom
