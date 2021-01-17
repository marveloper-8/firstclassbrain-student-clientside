import React from 'react'
import {Link} from 'react-router-dom'
// components
import Footer from './Footer'
import Navigation from './Navigation'
// image
import image from '../icons/video.svg'
import video from '../icons/image.svg'
import send from '../icons/send.svg'
// css
import './css/general.css'
import './css/chat.css'

const ChatText = () => {

    return (
        <div className="classroom">
            <div className="chat">
                <div className="header">
                    <div className="image">
                        <div className="picture">
                            <div className="online"></div>
                        </div>
                    </div>
                    <div className="text">
                        <div className="name">John Doe</div>
                        <div className="email">john@email.com</div>
                    </div>
                    <div className="background"></div>
                </div>
                
                <div className="message">
                    <div className="text receive">
                        <div className="bubble">
                            Hello there John Doe. How do you do? I heard you got admitted into Firstclassbrain and I would like you to put me through the signup process. I'd like to sign my son up.
                        </div>
                        <div className="extras">
                            11:11 on 20/10/21
                        </div>
                    </div>

                    <div className="text send">
                        <div className="bubble">
                            Hello there Jane. I am doing really well. Yes, Firstclassbrain has been a nice experience. I'll get back to you in an hour with the signup deets.
                        </div>
                        <div className="extras">
                            Seen<br />
                            11:11 on 20/10/21
                        </div>
                    </div>
                </div>
            
                <hr />
                
                <div className="input">
                    <div className="image">
                        <img src={image} alt="upload" />
                    </div>
                    <div className="video">
                        <img src={video} alt="upload" />
                    </div>
                    <div className="text">
                        <textarea></textarea>
                    </div>
                    <div className="send">
                        <img src={send} alt="upload" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ChatText
