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
    const {classSelected, subject, term} = useParams()
    console.log(classSelected, subject, term)
    let compsClass = ""
    let compsTerm = ""

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
        case `15`: compsClass = "SSS 3 (Science)";
        break;
        case `16`: compsClass = "SSS 3 (Commercial)";
        break;
        case `17`: compsClass = "SSS 3 (Art)";
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
    
    return (
        <div className="classroom">
            <Navigation />

            <section>
                <div className="head sub-title">
                    <Link className="link" to='/'><span>home</span></Link> / 
                    <Link className="link" to='/classroom'><span> {compsClass}</span></Link> / 
                    <Link className="link" to={'/subjects/' + classSelected}><span> {subject}</span></Link> / 
                    <Link className="link" to={'/terms/' + classSelected + '/' + subject}><span> {compsTerm}</span></Link> / 
                    <span className="active"> weeks</span>
                </div>
            </section>
            
            <div className="subjects-container">
                {
                    weeks.map(item => {
                        return(
                            <div>
                                <Link className="link" to={'/topics/' + classSelected + '/' + subject + '/' + term + '/' + item.week}>
                                <div className="subjects">
                                    <div className="image">
                                        <img src={goal} alt="Mathematics" />
                                    </div>
                                    <div className="label sub-title">{item.name}</div>
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
