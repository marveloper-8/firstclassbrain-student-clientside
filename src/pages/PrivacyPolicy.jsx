import React, {useState} from 'react'
// components
import Footer from './FooterHome'
import Navigation from './Navigation'
import Header from './Header'
// icons
import facebook from '../icons/facebook-square-teal.svg'
import instagram from '../icons/instagram-square-teal.svg'
import twitter from '../icons/twitter-square-teal.svg'
import linkedin from '../icons/linkedin-square-teal.svg'
import pagination_arrow from '../icons/pagination-arrow.svg'
// css
import './css/general.css'
import './css/privacy-policy.css'

function PrivacyPolicy() {

    return (
        <div className="classroom">
            <Navigation />

            <Header title="PRIVACY POLICY" nav="Privacy Policy" image="https://extras.firstclassbrain.com/five.png" />
            
            <div className="privacy-policy">
                <p>Your privacy is important to us. It is Firstclassbrain 's policy to respect your privacy regarding any information we may collect from you across our website, https://firstclassbrain.com, and other sites we own and operate.</p>

                <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>

                <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>

                <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>

                <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>

                <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>

                <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>

                <p>This policy is effective as of 11 January 2021.</p>
            </div>

            <Footer />
        </div>
    )
}

export default PrivacyPolicy
