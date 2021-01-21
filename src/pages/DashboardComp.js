import React, {useContext, useState, useEffect} from 'react'
// import {ToastContainer} from "react-toastr"
import {UserContext} from '../App'
import {useHistory, Link} from 'react-router-dom'
// css
import './css/App.scss'
import './css/dashboard.css'
// icons
import passwordIcon from '../icons/password.svg'
import logout from '../icons/logout-two.svg'
import video_call from '../icons/video-call.svg'
import phone_call from '../icons/phone-svg.svg'
import text_message from '../icons/text-message.svg'
import email_svg from '../icons/email-svg.svg'

const Dashboard = (props) => {
    const [openEmail, setOpenEmail] = useState(false)
    const [video, setVideo] = useState(false)
    const [text, setText] = useState(false)
    const [instructors, setInstructors] = useState([])
    const [email, setEmail] = useState("")
    const studentState = JSON.parse(localStorage.getItem("student"))
    const history = useHistory()
    const {dispatch} = useContext(UserContext)

    useEffect(() => {
        fetch(`https://firstclassbrain-server.herokuapp.com/all-instructor`).then(res => res.json())
          .then(data => {
              if(data.error){
                  alert(data.error)
              }
              else{
                setInstructors(data.instructor)
                console.log(data)
              }
          })
          .catch(err => {
              console.log(err)
          })
    }, [instructors])

    const classSelected = `${studentState ? studentState.classSelected: "loading"}`
    let compsClass = ""
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

    const PostForgotPassword = (e) => {
        e.preventDefault()
        if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert("invalid email")
            return
        }
        fetch("https://firstclassbrain-server.herokuapp.com/student/reset-password", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email})
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.error){
                    alert(data.error)
                }
                else{
                    alert(data.message)
                    history.push('/')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="dashboard-section">   
            <div 
                className="profile-image"
                style={{
                    backgroundImage: `url(${studentState ? studentState.pic: "loading"})`,
                    backgroundSize:`cover`,
                    backgroundPosition:`center`
                }}
            ></div>

            <div className="name title">
                {studentState ? studentState.firstName: "loading"}
                <span className="surname">{studentState ? studentState.lastName: "loading"}</span>
            </div>

            <div className="profile">
                <div className="value">
                    0{studentState ? studentState.phone: "loading"}
                </div>

                <div className="bullet"></div>

                <div className="value">
                    {studentState ? studentState.email: "loading"}
                </div>

                <div className="bullet"></div>

                <div className="value">
                    {studentState ? studentState.address: "loading"}
                </div>

                <div className="bullet"></div>

                <div className="value">
                    {compsClass}
                </div>
            </div>

            <div className="extras">
                <div>
                    <img src={email_svg} alt="email" />
                </div>
                <div>
                    <img src={phone_call} alt="phone" />
                </div>
                <div>
                    <img 
                        src={video_call} 
                        alt="video" 
                        onClick={() => setVideo(!video)}
                    />
                </div>
                <div>
                    <img 
                        src={text_message} 
                        alt="text message" 
                        onClick={() => setText(!text)} 
                    />
                </div>
            </div>
            
            <div className="reset-password" onClick={() => setOpenEmail(!openEmail)}>
                <img src={passwordIcon} alt="class icon" /> Reset Password
            </div>

            <form className={openEmail ? "forgot-password open-forgot-password" : "forgot-password"} onSubmit={PostForgotPassword}>
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />

                <button className="reset-password" type="submit">EMAIL ME A RESET PASSWORD LINK</button>
            </form>
            
            <div 
                className="logout"
                onClick={() => {
                    localStorage.clear()
                    dispatch({type: "CLEAR"})
                    history.push('/')
                }}
            >
                <img src={logout} alt="class icon" /> Logout
            </div>

            <div className={text ? "chat text-chat-open" : "chat text-chat-close"}>
                <div className="background" onClick={() => setText(!text)}></div>

                <div className="container">
                    <div className="close" onClick={() => setText(!text)}>&times;</div>
                    <div className="content">
                        <div className="title">TEXT AN INSTRUCTOR</div>
                        <hr />
                        <div className="list">
                            {
                                instructors.map((ins, id) => (
                                    <div className="item" key={id}>
                                        <Link to={`/chat-instructor?instrusctorId=${ins._id}`} className="link" target="_blank">
                                            <div className="picture">
                                                <div className="online"></div>
                                            </div>
                                        </Link>
                                        <div className="name">
                                            <Link to={`/chat-instructor?instrusctorId=${ins._id}`} className="link" target="_blank">
                                                {ins.firstName} {ins.lastName}
                                            </Link>
                                        </div>
                                        <div className="email">
                                            <Link to={`/chat-instructor?instrusctorId=${ins._id}`} className="link" target="_blank">
                                                {ins.email}
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="content">
                        <div className="title">JOIN A CLASSROOM CHAT</div>
                        <hr />
                        <div className="list">
                            <div className="item">
                                <div className="picture"></div>
                                <div className="name">Groupie</div>
                                <div className="email">15 active students online</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    
    )
}

export default Dashboard
