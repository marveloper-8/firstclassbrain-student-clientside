import React, {useState, useEffect, useContext} from 'react'
import {useLocation, useHistory, useParams} from 'react-router-dom'
import { toast } from 'react-toastify';
import {UserContext} from '../App'
// components
import Footer from './FooterHome'
import Navigation from './Navigation'
// css
import './css/general.css'
import './css/contact.css'
// illustrations
import verification_successful from "../icons/email-confirmation.svg"
import verification_failed from "../icons/unverified.svg"

function VerifyAccount() {
    // authentication
    const history = useHistory()
    const {dispatch} = useContext(UserContext)
    const user = JSON.parse(localStorage.getItem("student"))

    useEffect(() => {
      if(user){
        dispatch({type: "USER", payload: user})
      } else{
        history.push('/')
      }
    }, [])
    // authentication end

    const {token} = useParams()
    const [loading, setLoading] = useState(false)

    const VerifyEmail = () => {
        setLoading(true)
        fetch(`https://firstclassbrain-server.herokuapp.com/verify-email/student`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({token})
        }).then(res => res.json())
            .then(data => {
                if(data.error){
                    toast.error(data.error)
                    setLoading(false)
                }
                else{
                    toast.success("Account verified successfully. Logout and log back in to access classroom.")
                    history.push('/classroom')
                }
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    }

    console.log(token)

    return (
        <div className="classroom" onLoad={VerifyEmail}>
            <Navigation />
            {
                token != `${user ? user.emailToken : "loading"}`
                ?
                <div className="payment-status">
                    <img src={verification_failed} alt="payment successful" />
                    {user ? user.firstName: "loading"}, you have used an incorrect token. Please check your email for the correct link to confirm your account!
                    {user ? user.emailToken : "loading"}
                </div>
                :
                <div className="payment-status">
                    <img src={verification_successful} alt="payment successful" />
                    {user ? user.firstName: "loading"}, your account has been verified! Logout and log back in to access the First Class Brain Classroom!
                </div>
            }
            

            <Footer />
        </div>
    )
}

export default VerifyAccount
