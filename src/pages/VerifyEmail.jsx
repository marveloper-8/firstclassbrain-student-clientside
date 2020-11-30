import React from 'react'
import {useLocation} from 'react-router-dom'
// components
import Footer from './FooterHome'
import Navigation from './Navigation'
// css
import './css/general.css'
import './css/contact.css'
// illustrations
import payment_successful from "../icons/email-confirmation.svg"

function PaymentStatus() {
    const location = useLocation()
    const studentState = JSON.parse(localStorage.getItem("student"))

    const queryString = require('query-string')
    console.log(location.search)

    const parsed = queryString.parse(location.search)
    console.log(parsed)

    const verify_email_token = `${parsed.token}`

    const VerifyEmail = () => {
        fetch(`https://firstclassbrain-server.herokuapp.com/verify-email/student?token=${verify_email_token}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    return (
        <div className="classroom" onLoad={VerifyEmail()}>
            <Navigation />
            
            <div className="payment-status">
                <img src={payment_successful} alt="payment successful" />
                {studentState ? studentState.firstName: "loading"}, your account has been verified! Logout and log back in to access the First Class Brain Classroom!
            </div>

            <Footer />
        </div>
    )
}

export default PaymentStatus
