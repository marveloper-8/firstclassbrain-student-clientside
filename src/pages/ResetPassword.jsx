import React, {useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
// components
import Footer from './FooterHome'
import Navigation from './Navigation'
// css
import './css/general.css'
import './css/contact.css'
// icon
import passwordIcon from '../icons/password.svg'

function ResetPassword() {
    const {token} = useParams()
    const history = useHistory()
    const [password, setPassword] = useState("")

    const ResetPassword = (e) => {
        e.preventDefault()
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
                    alert(data.error)
                }
                else{
                    history.push('/classroom')
                }
            })
            .catch(err => {
                console.log(err)
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

                    <button type="submit">RESET PASSWORD</button>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default ResetPassword
