import React, {useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import { toast } from 'react-toastify';
// components
import Footer from './FooterHome'
import Navigation from './Navigation'
// css
import './css/general.css'
import './css/contact.css'
// icon
import passwordIcon from '../icons/password.svg'

function ResetPassword() {
    const history = useHistory()

    const {token} = useParams()
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const ResetPassword = (e) => {
        e.preventDefault()
        setLoading(true)
        fetch("https://firstclassbrain-server.herokuapp.com/student/new-password", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({password, token})
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.error){
                    toast.error(data.error)
                    setLoading(false)
                }
                else{
                    toast.success("Password changed successfully.")
                    history.push('/')
                }
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }

    return (
        <div className="classroom">
            <Navigation />
            
            <div className="payment-status">
                <form className="text" onSubmit={ResetPassword}>
                    <h1 className="title">RESET PASSWORD</h1>

                    <div className="input">
                        <img src={passwordIcon} alt="password" />
                        <input 
                            type="password" 
                            placeholder="New Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    
                    <div className="input">
                        <img src={passwordIcon} alt="password" />
                        <input 
                            type="password" 
                            placeholder="Confirm New Password" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required 
                        />
                    </div>

                    <button 
                        disabled={loading || password.length < 6 || password != confirmPassword ? true : false}
                        type="submit"
                        className={loading || password.length < 6 || password != confirmPassword ? "disabled" : ""}
                    >
                        {loading ? "LOADING.." : "RESET PASSWORD"}
                    </button>
                    <div className="warning">
                        {
                            password.length < 6
                            ?
                            "Password must be more than 6 characters"
                            :
                            ""
                        }
                    </div>
                    <div className="warning">
                        {
                            password != confirmPassword
                            ?
                            "Password does not match"
                            :
                            ""
                        }
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default ResetPassword
