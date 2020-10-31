import React, {useState} from 'react'

import './css/App.scss'

import Footer from './FooterHome'
import Navigation from './Navigation'
import Header from './Header'

import facebook from '../icons/facebook-square.svg'
import instagram from '../icons/instagram-square.svg'
import twitter from '../icons/twitter-square.svg'
import linkedin from '../icons/linkedin-square.svg'

import './css/contact.css'
import './css/general.css'

const Contact = () => {

    // broker
    const [brokerState, setBrokerState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })
    

    const handleBrokerChange = (e) => {
          setBrokerState({ ...brokerState, [e.target.name]: e.target.value })
    }

    const handleBroker = (e) => {
          e.preventDefault()
          fetch("https://firstclassbrain-mail.herokuapp.com/customer-care/", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName: brokerState.firstName, 
                    lastName: brokerState.lastName, 
                    email: brokerState.email,
                    phone: brokerState.phone,
                    message: brokerState.message
                })
          }).then( () => {
                setBrokerState({ 
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '' 
                })
              }).then(res => res.json())
                .then(data => {
                    if(data.error){
                        alert(data.error)
                    }
                    else{
                        alert(data.message)
                        // history.push('/')
                    }
                })
                .catch(err => {
                    console.log(err)
                })
                
    }




    return (
        <div className="home">
            <Navigation />

            <Header />

            <section className="contact">
                <div className="desktop">

                    <div className="content">
                        <div><form className="form" onSubmit={handleBroker}>
                            <div className="title">SEND US A MESSAGE</div>
                            
                            <div className="input-double">
                                <input 
                                    type="text" 
                                    placeholder="First Name" 
                                    name="firstName"
                                    value={brokerState.firstName}
                                    onChange={handleBrokerChange}
                                />

                                <div></div>

                                <input 
                                    type="text" 
                                    placeholder="Last Name" 
                                    name="lastName"
                                    value={brokerState.lastName}
                                    onChange={handleBrokerChange}
                                />
                            </div>
                            
                            <div className="input-double">
                                <input 
                                    type="phone" 
                                    placeholder="Phone Number" 
                                    name="phone"
                                    value={brokerState.phone}
                                    onChange={handleBrokerChange}
                                />

                                <div></div>

                                <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    name="email"
                                    value={brokerState.email}
                                    onChange={handleBrokerChange}
                                />
                            </div>
                            
                            <div className="input-single">
                                <textarea 
                                    placeholder="Your Query"
                                    name="message"
                                    value={brokerState.message}
                                    onChange={handleBrokerChange}
                                ></textarea>
                            </div>

                            <button>Send Message</button>
                        </form></div>
                    
                        <div><div className="info">

                            <div className="title">CONTACT INFORMATION</div>

                            <div className="paragraph">
                                +234-(0)907-455-4735,<br />+234-(0)815-832-6626
                            </div>

                            <div className="paragraph">
                                firstclassbrain11@gmail.com,<br />hello@firstclassbrain.com
                            </div>

                            <div className="paragraph">
                                No. 27, Olayiwola Street, New Oko-oba, Lagos State
                            </div>

                            <div className="social">
                                <div className="title">FOLLOW US</div>

                                <img src={facebook} alt="facebook" />
                                <img src={instagram} alt="instagram" />
                                <img src={twitter} alt="twitter" />
                                <img src={linkedin} alt="linkedin" />
                            </div>

                        </div></div>

                    </div>
                
                </div>
            
                <div className="mobile">

                    <div className="content">
                        <div><div className="info">

                            <div className="title">CONTACT INFORMATION</div>

                            <div className="paragraph">
                                +234-(0)907-455-4735,<br />+234-(0)815-832-6626
                            </div>

                            <div className="paragraph">
                                firstclassbrain11@gmail.com,<br />hello@firstclassbrain.com
                            </div>

                            <div className="paragraph">
                                No. 27, Olayiwola Street, New Oko-oba, Lagos State
                            </div>

                            <div className="social">
                                <div className="title">FOLLOW US</div>

                                <img src={facebook} alt="facebook" />
                                <img src={instagram} alt="instagram" />
                                <img src={twitter} alt="twitter" />
                                <img src={linkedin} alt="linkedin" />
                            </div>

                        </div></div>

                        <div><form className="form" onSubmit={handleBroker}>
                            <div className="title">SEND US A MESSAGE</div>
                            
                            <div className="input-double">
                                <input 
                                    type="text" 
                                    placeholder="First Name" 
                                    name="firstName"
                                    value={brokerState.firstName}
                                    onChange={handleBrokerChange}
                                />

                                <div></div>

                                <input 
                                    type="text" 
                                    placeholder="Last Name" 
                                    name="lastName"
                                    value={brokerState.lastName}
                                    onChange={handleBrokerChange}
                                />
                            </div>
                            
                            <div className="input-double">
                                <input 
                                    type="phone" 
                                    placeholder="Phone Number" 
                                    name="phone"
                                    value={brokerState.phone}
                                    onChange={handleBrokerChange}
                                />

                                <div></div>

                                <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    name="email"
                                    value={brokerState.email}
                                    onChange={handleBrokerChange}
                                />
                            </div>
                            
                            <div className="input-single">
                                <textarea 
                                    placeholder="Your Query"
                                    name="message"
                                    value={brokerState.message}
                                    onChange={handleBrokerChange}
                                ></textarea>
                            </div>

                            <button>Send Message</button>
                        </form></div>
                    
                    </div>
                
                </div>
            
            </section>

            <Footer />
        </div>
    )
}

export default Contact
