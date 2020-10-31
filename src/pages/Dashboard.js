import React, {useContext} from 'react'
// import {ToastContainer} from "react-toastr"
import {UserContext} from '../App'
import {useHistory} from 'react-router-dom'
// css
import './css/App.scss'
import './css/dashboard.css'
// icons
import emailIcon from '../icons/email.svg'
import phoneIcon from '../icons/call-two.svg'
import passwordIcon from '../icons/password.svg'
import user from '../icons/user.svg'
import group from '../icons/group.svg'
import logout from '../icons/logout-two.svg'

const Dashboard = (props) => {
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()

    return (
        <div className="dashboard-section">   
            <div 
                className="profile-image"
                style={{
                    backgroundImage: `url(${state ? state.pic: "loading"})`,
                    backgroundSize:`cover`,
                    backgroundPosition:`center`
                }}
            ></div>

            <div className="name title">
                {state ? state.firstName: "loading"}
                <span className="surname">{state ? state.lastName: "loading"}</span>
            </div>

            <div className="profile-tab">
                <div className="icon">
                    <img src={phoneIcon} alt="phone icon" />
                </div>
                <div className="value">
                    {state ? state.phone: "loading"}
                </div>
            </div>

            <div className="profile-tab">
                <div className="icon">
                    <img src={emailIcon} alt="email icon" />
                </div>
                <div className="value">
                    {state ? state.email: "loading"}
                </div>
            </div>

            <div className="profile-tab">
                <div className="icon">
                    <img src={emailIcon} alt="address icon" />
                </div>
                <div className="value">
                    {state ? state.address: "loading"}
                </div>
            </div>

            <div className="profile-tab">
                <div className="icon">
                    <img src={user} alt="class icon" />
                </div>
                <div className="value">
                    {state ? state.schoolClass: "loading"}
                </div>
            </div>

            {/* <div className="profile-tab">
                <div className="icon">
                    <img src={user} alt="class icon" />
                </div>
                <div className="value">
                    {state ? state.department: "loading"}
                </div>
            </div> */}

            <div 
                className="profile-tab logout-tab"
                onClick={() => {
                    localStorage.clear()
                    dispatch({type: "CLEAR"})
                    history.push('/')
                }}
            >
                <div className="icon">
                    <img src={logout} alt="class icon" />
                </div>
                <div className="value">
                    Logout
                </div>
            </div>
        </div>
    )
}

export default Dashboard