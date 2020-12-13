import React from 'react'
import {Link} from 'react-router-dom'
// components
import Footer from './FooterHome'
import Navigation from './Navigation'
// css
import './css/general.css'
import './css/contact.css'

function PaymentStatusYearly() {
    return (
        <div className="classroom">
            <Navigation />
            
            <div className="payment-status bad-request">
                <div className="title">404</div>
                <div>Page not found</div>
                <Link to='/'>
                    Go back to home page
                </Link>
            </div>

            <Footer />
        </div>
    )
}

export default PaymentStatusYearly
