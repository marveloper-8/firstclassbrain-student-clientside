import React, {
    useState, 
    useContext, 
    useEffect,
    useCallback
} from 'react'
// import {ToastContainer} from "react-toastr"
import {UserContext} from '../App'
import {
    Link,
    useHistory
} from 'react-router-dom'
// logo
import logo from '../logo.jpeg'
// icon
import emailIcon from '../icons/email.svg'
import phoneIcon from '../icons/call-two.svg'
import passwordIcon from '../icons/password.svg'
import user from '../icons/user.svg'
import classroom from '../icons/classroom.svg'
import menuIcon from '../icons/menu.svg'
// data
import classes from '../data/classes.json'
// css
import './css/navigation.css'

const Navigation = () => {
    const {dispatch} = useContext(UserContext)

    const studentState = JSON.parse(localStorage.getItem("student"))

    console.log(studentState)

    const history = useHistory()

    let [login, setLogin] = useState(false)
    let [signup, setSignup] = useState(false)
    let [forgotPassword, setForgotPassword] = useState(false)
    let [menu, setMenu] = useState(false)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [classSelected, setClassSelected] = useState("")
    const [password, setPassword] = useState("")

    // const [image, setImage] = useState("")

    const [url, setUrl] = useState(undefined)

    const uploadFields = useCallback(() => {
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
    })
    
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

    const PostSignin = (e) => {
        e.preventDefault()
        if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert("invalid email")
            return
        }
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
                    history.push('/classroom')
                }
            })
            .catch(err => {
                console.log(err)
            })
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


    // end of signin

    const SignupOpen = () => {
        if(signup === true || signup === false){
            setSignup(signup = true)
            setLogin(login = false)
            setForgotPassword(forgotPassword = false)
        }
    }
    const LoginOpen = () => {
        if(login === true || login === false){
            setSignup(signup = false)
            setLogin(login = true)
            setForgotPassword(forgotPassword = false)
        }
    }
    const ForgotPasswordOpen = () => {
        if(forgotPassword === true || forgotPassword === false){
            setSignup(signup = false)
            setLogin(login = false)
            setForgotPassword(forgotPassword = true)
        }
    }
    const CloseNav = () => {
        setSignup(signup = false)
        setLogin(login = false)
        setForgotPassword(forgotPassword = false)
    }
    // end of signup



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
        if(studentState){
            return [
                <Link className="link" to='/classroom'>
                    <button className="login desktop-hide">CLASSROOM</button>
                </Link>,
                <Link className="link" to='/classroom'>
                    <div className="nav-item pro-nav-item mobile-hide">CLASSROOM</div>
                </Link>,
                <Link className="link" to='/dashboard'>
                    <div className="nav-item pro-nav-item mobile-hide">DASHBOARD</div>
                </Link>,
                <div 
                    className="nav-item mobile-hide logout"
                    onClick={() => {
                        localStorage.clear()
                        dispatch({type: "CLEAR"})
                        history.push('/')
                    }}
                >LOGOUT</div>
            ]
        } else{
            return [
                <button className="login desktop-hide" onClick={() => LoginOpen()}>LOGIN</button>,
                <button className="signup desktop-hide" onClick={() => SignupOpen()}>SIGNUP</button>,
                <div className="nav-item pro-nav-item mobile-hide" onClick={() => LoginOpen()}>LOGIN</div>,
                <div className="nav-item pro-nav-item mobile-hide" onClick={() => SignupOpen()}>SIGNUP</div>
            ]
        }
    }

    return (
        <div className="navigation">
            <div className="mobile-hide">
                <div className="nav-bar">
                    <Link className="link" to='/'>
                        <span className="logo-container">
                            <img src={logo} alt="logo" />
                        </span>
                    </Link>

                    <div className="buttons menu-icon">
                        <img src={menuIcon} alt="menu" onClick={() => setMenu(!menu)} />
                    </div>
                </div>
            </div>
    
            <div className="desktop-hide">
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
            </div>

            <div className={menu ? "popup-toggle popup" : "popup"}>
                <div className="background" onClick={() => setMenu(!menu)}></div>
                <div className="inner">
                    <div className="close-donate">
                        <span onClick={() => setMenu(!menu)}>
                            &times; close
                        </span>
                    </div>

                    <div className="content">
                        <Link className="link" to='/'>
                            <div className="nav-item">
                                HOME
                            </div>
                        </Link>

                        <Link className="link" to='/about'>
                            <div className="nav-item">
                                ABOUT US
                            </div>
                        </Link>
                        
                        <Link className="link" to='/faq'>
                            <div className="nav-item">
                                FAQ
                            </div>
                        </Link>
                        
                        <Link className="link" to='/contact'>
                            <div className="nav-item">
                                CONTACT US
                            </div>
                        </Link>
                        
                        {navItem()}
                    </div>
                </div>
            </div>
        
            <div className={login ? "popup-toggle popup" : "popup"}>
                <div className="background" onClick={() => CloseNav()}></div>
                <div className="inner">
                    <div className="close-donate">
                        <span onClick={() => CloseNav()}>
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

                            <button type="submit">LOGIN</button>
                        </form>
                        
                        <div className="extras">
                            <p><span className="important" onClick={() => ForgotPasswordOpen()}>Forgot Password?</span></p>
                            <p>Don't have an account? <span className="important"  onClick={() => SignupOpen()}>Sign up</span></p>
                        </div>
                        

                    </div>
                </div>
            </div>
        
            <div className={signup ? "popup-toggle popup" : "popup"}>
                <div className="background" onClick={() => CloseNav()}></div>
                <div className="inner">
                    <div className="close-donate">
                        <span onClick={() => CloseNav()}>
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
                                <img src={classroom} alt="class" />
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
                            <p>Already have an account? <span className="important" onClick={() => LoginOpen()}>Login</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={forgotPassword ? "popup-toggle popup" : "popup"}>
                <div className="background" onClick={() => CloseNav()}></div>
                <div className="inner">
                    <div className="close-donate">
                        <span onClick={() => CloseNav()}>
                            &times; close
                        </span>
                    </div>

                    <div className="content">
                        {/* <div className="image">
                            <img src={signinImage} alt="signin" />
                        </div> */}

                        <form className="text" onSubmit={PostForgotPassword}>
                            <h1 className="title">FORGOT PASSWORD?</h1>

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

                            <button type="submit">EMAIL ME A RESET PASSWORD LINK</button>
                        </form>
                        
                        <div className="extras">
                            <p>Go back to <span className="important"  onClick={() => LoginOpen()}>login</span></p>
                        </div>
                        

                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Navigation
