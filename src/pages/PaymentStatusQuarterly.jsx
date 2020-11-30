import React from 'react'
import {useLocation, useHistory} from 'react-router-dom'
// components
import Footer from './FooterHome'
import Navigation from './Navigation'
// css
import './css/general.css'
import './css/contact.css'
// illustrations
import payment_successful from "../icons/payment-successful.svg"

function PaymentStatusQuarterly() {
    const history = useHistory()
    const location = useLocation()
    const studentState = JSON.parse(localStorage.getItem("student"))

    const queryString = require('query-string')
    console.log(location.search)

    const parsed = queryString.parse(location.search)
    console.log(parsed)

    const payment_token = `${parsed.reference}`

    const PostPayment = (paymentToken) => {
        fetch(`https://firstclassbrain-server.herokuapp.com/verify/payment/quarterly/${paymentToken}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({payment_token})
        }).then(res => res.json())
            .then(data => {
                if(data.error){
                    alert(data.error)
                }
                else{
                    alert(data.message)
                    history.push('/classroom')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="classroom" onLoad={PostPayment(payment_token)}>
            <Navigation />
            
            <div className="payment-status">
                <img src={payment_successful} alt="payment successful" />
                {studentState ? studentState.firstName: "loading"}, you have successfully subscribed to the Silver (Three Months) subscription plan! Logout and log back in to access the First Class Brain Classroom!
            </div>

            <Footer />
        </div>
    )
}

export default PaymentStatusQuarterly
