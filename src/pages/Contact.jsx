import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
// components
import Footer from './FooterHome'
import Navigation from './Navigation'
import Header from './Header'
// icons
import facebook from '../icons/facebook-square.svg'
import instagram from '../icons/instagram-square.svg'
import twitter from '../icons/twitter-square.svg'
import linkedin from '../icons/linkedin-square.svg'
// css
import './css/general.css'
import './css/contact.css'

function Contact() {
    const history = useHistory()
    
    const [first_name, set_first_name] = useState("")
    const [last_name, set_last_name] = useState("")
    const [email, set_email] = useState("")
    const [phone_number, set_phone_number] = useState("")
    const [message, set_message] = useState("")

    const ContactForm = (e) => {
        e.preventDefault()
        if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert("invalid email")
            return
        }
        fetch("https://firstclassbrain-server.herokuapp.com/contact", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name,
                last_name,
                phone_number,
                email,
                message
            })
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
        <div className="classroom">
            <Navigation />

            <Header title="CONTACT US" nav="Contact Us" image="https://extras.firstclassbrain.com/six.png" />
            
            <div className="contact">
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4153.335952980069!2d3.308076609041229!3d6.657366422198429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNo.%2027%2C%20Olayiwola%20Street%2C%20New%20Oko-oba%2C%20Lagos%20State!5e0!3m2!1sen!2sng!4v1605873866153!5m2!1sen!2sng" width="600" height="450" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0" className="content"></iframe>

                <br />

                <div className="content">
                    <div><form className="form" onSubmit={ContactForm}>
                        <div className="title">SEND US A MESSAGE</div>
                        
                        <div className="input-double">
                            <input 
                                type="text" 
                                placeholder="First Name" 
                                name="firstName"
                                value={first_name}
                                onChange={(e) => set_first_name(e.target.value)}
                                required 
                            />

                            <div></div>

                            <input 
                                type="text" 
                                placeholder="Last Name" 
                                name="lastName"
                                value={last_name}
                                onChange={(e) => set_last_name(e.target.value)}
                                required 
                            />
                        </div>
                        
                        <div className="input-double">
                            <input 
                                type="phone" 
                                placeholder="Phone Number" 
                                name="phone"
                                value={phone_number}
                                onChange={(e) => set_phone_number(e.target.value)}
                                required 
                            />

                            <div></div>

                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                name="email"
                                value={email}
                                onChange={(e) => set_email(e.target.value)}
                                required 
                            />
                        </div>
                        
                        <div className="input-single">
                            <textarea 
                                placeholder="Your Query"
                                name="message"
                                value={message}
                                onChange={(e) => set_message(e.target.value)}
                                required 
                            ></textarea>
                        </div>

                        <button>Send Message</button>
                    </form></div>
                
                    <div><div className="info desktop">

                        <div className="title">CONTACT INFORMATION</div>

                        <div className="paragraph">
                            <a className="link" href="tel:+2349074554735">
                                +234-(0)907-455-4735,
                            </a>
                            <br />
                            <a className="link" href="tel:+2348158326626">
                                +234-(0)815-832-6626
                            </a>
                        </div>

                        <div className="paragraph">
                            <a className="link" href="mailto:firstclassbrain11@gmail.com">
                                firstclassbrain11@gmail.com,
                            </a>
                            <br />
                            <a className="link" href="mailto:hello@firstclassbrain.com">
                                hello@firstclassbrain.com
                            </a>
                        </div>

                        <div className="paragraph">
                            <a className="link" href="https://goo.gl/maps/mMbMwrJQVxoRrb1R8" rel="noopener noreferrer" target="_blank">
                                No. 27, Olayiwola Street, New Oko-oba, Lagos State
                            </a>
                        </div>

                        <div className="social">
                            <div className="title">FOLLOW US</div>

                            <img src={facebook} alt="facebook" />

                            <a className="link" href="https://www.instagram.com/firstclassbrain" rel="noopener noreferrer" target="_blank">
                                <img src={instagram} alt="instagram" />
                            </a>
                            
                            <a className="link" href="https://mobile.twitter.com/firstclassbrain" rel="noopener noreferrer" target="_blank">
                                <img src={twitter} alt="twitter" />
                            </a>
                            
                            <a className="link" href="https://www.linkedIn.com/company/firstclassbrain" rel="noopener noreferrer" target="_blank">
                                <img src={linkedin} alt="linkedin" />
                            </a>
                        </div>

                    </div></div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Contact
