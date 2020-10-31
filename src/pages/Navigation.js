import React, {useState, useContext, useEffect} from 'react'
// import {ToastContainer} from "react-toastr"
import {UserContext} from '../App'
import {
    Link,
    useHistory
} from 'react-router-dom'


import logo from '../logo.jpeg'

import emailIcon from '../icons/email.svg'
import phoneIcon from '../icons/call-two.svg'
import passwordIcon from '../icons/password.svg'
import user from '../icons/user.svg'
import group from '../icons/group.svg'
import logout from '../icons/logout-two.svg'

// data
import classes from '../data/classes.json'

import './css/navigation.css'

const Navigation = () => {
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()

    const [login, setLogin] = useState(false)
    const [signup, setSignup] = useState(false)
    const [profile, setProfile] = useState(false)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    // const [dateOfBirth, setDateOfBirth] = useState("")
    const [address, setAddress] = useState("")
    const [classSelected, setClassSelected] = useState("")
    const [password, setPassword] = useState("")

    // const [image, setImage] = useState("")

    const [url, setUrl] = useState(undefined)

    const uploadFields = () => {
        if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert("invalid email")
            return
        }
        fetch("https://firstclassbrain-server.herokuapp.com/signup-student", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                phone,
                // dateOfBirth,
                address,
                classSelected,
                pic: url,
                password
            })
        }).then(res => res.json())
            .then(data => {
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
    
    useEffect(()=>{
        if(url){
            uploadFields()
        }
    },[url, uploadFields])
    
    const uploadPic = ()=>{
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","ao-estate")
        data.append("cloud_name","josh-equere")
        fetch("https://api.cloudinary.com/v1_1/josh-equere/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
           setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    const PostSignup = (e) =>{
        e.preventDefault()
        if(image){
            uploadPic()
        }else{
            uploadFields()
        }
    }

    const CloseSignUp = () => {
        if(login){
            setLogin(!login)
            setSignup(!signup)
        }else{
            setLogin(!login)
            setSignup(!signup)
        }
    }
    // end of signup



    const PostSignin = (e) => {
        e.preventDefault()
        fetch("https://firstclassbrain-server.herokuapp.com/web/signin-student", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.error){
                    alert(data.error)
                }
                else{
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("student", JSON.stringify(data.student))
                    dispatch({type: "USER", payload: data.student})
                    history.push('/dashboard')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }


    // end of signin

    // end of authentication system

    
    const [image, setImage] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!image) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(image)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [image])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setImage(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setImage(e.target.files[0])
    }

    

    const navItem = () => {
        if(state){
            return [
                <Link className="link" to='/dashboard'>
                    <button className="login">DASHBOARD</button>
                </Link>
            ]
        } else{
            return [
                <button className="login" onClick={() => setLogin(!login)}>LOGIN</button>,
                <button className="signup" onClick={() => setSignup(!signup)}>SIGNUP</button>
            ]
        }
    }

    return (
        <div className="navigation">
            <div className="nav-bar">
                <Link className="link" to='/'>
                    <span className="logo-container">
                        <img src={logo} alt="logo" />
                    </span>
                </Link>

                <div className="buttons">
                    <Link className="link" to='/about'>
                        <button className="navigation-link">
                            ABOUT US
                        </button>
                    </Link>
                    
                    <Link className="link" to='/faq'>
                        <button className="navigation-link">
                            FAQ
                        </button>
                    </Link>
                    
                    <Link className="link" to='/contact'>
                        <button className="navigation-link">
                            CONTACT US
                        </button>
                    </Link>
                    {navItem()}
                </div>
            </div>
        
            <div className={login ? "popup-toggle popup" : "popup"}>
                <div className="background" onClick={() => setLogin(!login)}></div>
                <div className="inner">
                    <div className="close-donate">
                        <span onClick={() => setLogin(!login)}>
                            &times; close
                        </span>
                    </div>

                    <div className="content">
                        {/* <div className="image">
                            <img src={signinImage} alt="signin" />
                        </div> */}

                        <form className="text" onSubmit={PostSignin}>
                            <h1 className="title">LOGIN</h1>

                            <div className="input">
                                <img src={emailIcon} alt="email" />
                                <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required 
                                />
                            </div>

                            <div className="input">
                                <img src={passwordIcon} alt="password" />
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required 
                                />
                            </div>

                            <button>LOGIN</button>
                        </form>
                        
                        <div className="extras">
                            <p>Forgot Password?</p>
                            <p>Don't have an account? <span className="important"  onClick={() => CloseSignUp()}>Sign up</span></p>
                        </div>
                        

                    </div>
                </div>
            </div>
        
            <div className={signup ? "popup-toggle popup" : "popup"}>
                <div className="background" onClick={() => setSignup(!signup)}></div>
                <div className="inner">
                    <div className="close-donate">
                        <span onClick={() => setSignup(!signup)}>
                            &times; close
                        </span>
                    </div>

                    <div className="content">
                        <form className="text" onSubmit={PostSignup}>
                            <h1 className="title">SIGN UP</h1>

                            <div className="input">
                                <img src={user} alt="first name" />
                                <input 
                                    type="text" 
                                    placeholder="First Name" 
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required 
                                />
                            </div>

                            <div className="input">
                                <img src={user} alt="last name" />
                                <input 
                                    type="text" 
                                    placeholder="Last Name" 
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required 
                                />
                            </div>

                            <div className="input">
                                <img src={emailIcon} alt="email" />
                                <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required 
                                />
                            </div>

                            <div className="input">
                                <img src={phoneIcon} alt="phone" />
                                <input 
                                    type="phone" 
                                    placeholder="Phone" 
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required 
                                />
                            </div>

                            <div className="input">
                                <img src={emailIcon} alt="phone" />
                                <div className="input-file">
                                    <span>Upload Profile Picture +</span>
                                    <input
                                        className="input" 
                                        type="file"
                                        onChange={onSelectFile}
                                    />
                                </div>
                            </div>

                            {image && <img src={preview} alt="profile preview" className="preview-picture" />}

                            {/* <div className="input">
                                <img src={user} alt="Date of Birth" />
                                <input 
                                    type="date" 
                                    placeholder="Date of Birth" 
                                    value={dateOfBirth}
                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                />
                            </div> */}

                            <div className="input">
                                <img src={user} alt="Address" />
                                <input 
                                    type="text" 
                                    placeholder="Address" 
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>

                            <div className="input">
                                <img src={group} alt="class" />
                                <select 
                                    className="sub-title"
                                    value={classSelected}
                                    onChange={(e) => setClassSelected(e.target.value)}
                                    required
                                >
                                    {
                                        classes.map(item => {
                                            return(
                                                <option value={item.class} selected>{item.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            {/* <div className="input">
                                <img src={group} alt="department" />
                                <input 
                                    type="text" 
                                    placeholder="Department" 
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    required 
                                />
                            </div> */}

                            <div className="input">
                                <img src={passwordIcon} alt="password" />
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required 
                                />
                            </div>

                            <div className="input">
                                <img src={passwordIcon} alt="password" />
                                <input type="password" placeholder="Confirm Password" required />
                            </div>

                            <button type="submit">SIGN UP</button>
                        </form>

                        <div className="extras">
                            <p>By signing up, you agree to our <a className="important" href="https://google.com">TOC</a> & <a className="important" href="https://google.com">Privacy Policy</a></p>
                            <p>Already have an account? <span className="important" onClick={() => CloseSignUp()}>Login</span></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navigation
