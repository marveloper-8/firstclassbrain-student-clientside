import React, {useState} from 'react'
// components
import Footer from './FooterHome'
import Navigation from './Navigation'
import Header from './Header'
// icons
import facebook from '../icons/facebook-square-teal.svg'
import instagram from '../icons/instagram-square-teal.svg'
import twitter from '../icons/twitter-square-teal.svg'
import linkedin from '../icons/linkedin-square-teal.svg'
import pagination_arrow from '../icons/pagination-arrow.svg'
// css
import './css/general.css'
import './css/faq.css'

function Faq() {
    const [faq1, setFaq1] = useState(true)
    const [faq2, setFaq2] = useState(false)
    const [faq3, setFaq3] = useState(false)
    const [faq4, setFaq4] = useState(false)
    const [faq5, setFaq5] = useState(false)
    const [faq6, setFaq6] = useState(false)
    const [faq7, setFaq7] = useState(false)
    const [faq8, setFaq8] = useState(false)
    const [faq9, setFaq9] = useState(false)
    const [faq10, setFaq10] = useState(false)
    const [faq11, setFaq11] = useState(false)

    return (
        <div className="classroom">
            <Navigation />

            <Header title="FREQUENTLY ASKED QUESTIONS" nav="FAQ" image="https://extras.firstclassbrain.com/five.png" />
            
            <div className="faq">
                <div className="desktop">
                    <div className="info desktop">

                        <div className="title">CONTACT US <span className="enhanced">DIRECTLY</span></div>

                        <div className="paragraph">
                            +234-(0)907-455-4735,<br />+234-(0)815-832-6626
                        </div>

                        <div className="paragraph">
                            firstclassbrain11@gmail.com,<br />hello@firstclassbrain.com
                        </div>

                        <div className="paragraph">
                            No. 27, Olayiwola Street, New Oko-oba, Lagos State
                        </div>

                        <div className="paragraph">
                            FOLLOW US
                            <br /><br />
                            <img src={facebook} alt="facebook" />
                            <img src={instagram} alt="instagram" />
                            <img src={twitter} alt="twitter" />
                            <img src={linkedin} alt="linkedin" />
                        </div>

                    </div>
                </div>

                <div className="faq-container">
                    <div className="tab">
                        <div className="nav">
                            <div className="head">WHAT IS FIRST CLASS BRAIN APP?</div>
                            <img src={pagination_arrow} alt="pagination arrow" onClick={() => setFaq1(!faq1)} className={faq1 ? "" : "arrow-inactive"} />
                        </div>
                        <div className={faq1 ? "content" : "content content-inactive"}>
                            FIRST CLASS BRAIN APP is an e-learning platform that proffer solution to bad eductional system in Nigeria and in AFrica. It is to ensure that our pupils and students don’t just go to school but understand in clear terms what is being taught in school.
                            <br /><br />
                            FIRST CLASS BRAIN is developed in such a way that the pupils and students have access to classroom teaching materials that is dictated by the school curriculum. It is to support the work of the teacher in school and to ensure that your child ends up as the genius he is created to be. Whats more is that the use of the app exposes the pupil/student to pratical computer.
                        </div>
                    </div>
                    <div className="tab">
                        <div className="nav">
                            <div className="head">WHAT WILL I HAVE ACCESSS TO WHEN I SUSCRIBE FCB APP?</div>
                            <img src={pagination_arrow} alt="pagination arrow" onClick={() => setFaq2(!faq2)} className={faq2 ? "" : "arrow-inactive"} />
                        </div>
                        <div className={faq2 ? "content" : "content content-inactive"}>
                            <ul>
                                <li>
                                    Conventional Classroom Teaching
                                </li>
                                <li>
                                    Illustrative Teaching
                                </li>
                                <li>
                                    FCB Text Notes for All Classes
                                </li>
                                <li>
                                    Assignments and Tests
                                </li>
                                <li>
                                    Examination
                                </li>
                                <li>
                                    Opportunity to chat with teachers
                                </li>
                                <li>
                                    Opportunity to speak with Career Guide / Counselor available to pupils even as young as age 5 or the Basic 1.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab">
                        <div className="nav">
                            <div className="head">CAN I CHAT WITH A TEACHER ON THE APP?</div>
                            <img src={pagination_arrow} alt="pagination arrow" onClick={() => setFaq3(!faq3)} className={faq3 ? "" : "arrow-inactive"} />
                        </div>
                        <div className={faq3 ? "content" : "content content-inactive"}>
                            Yes! you can. First class brain is developed in such a way that allows you chat with your instructors. You can also book a session.
                        </div>
                    </div>
                    <div className="tab">
                        <div className="nav">
                            <div className="head">HOW TO SUSCRIBE FIRSTCLASS APP AND WHAT PAYMENT TYPE CAN I USE?</div>
                            <img src={pagination_arrow} alt="pagination arrow" onClick={() => setFaq4(!faq4)} className={faq4 ? "" : "arrow-inactive"} />
                        </div>
                        <div className={faq4 ? "content" : "content content-inactive"}>
                            You dont have to break a bank to use FCB App. The prices of fcb app are  affordable. You can either use 
                            <ul>
                                <li>Bank payment or</li>
                                <li>Debit/Credit card</li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab">
                        <div className="nav">
                            <div className="head">WHAT ARE THE SUSCRIPTION PLAN?</div>
                            <img src={pagination_arrow} alt="pagination arrow" onClick={() => setFaq5(!faq5)} className={faq5 ? "" : "arrow-inactive"} />
                        </div>
                        <div className={faq5 ? "content" : "content content-inactive"}>
                            Weekly, Monthly, Quarterly and Yearly 
                        </div>
                    </div>
                    <div className="tab">
                        <div className="nav">
                            <div className="head">WHAT DEVICES CAN  ACCESS FCB APP?</div>
                            <img src={pagination_arrow} alt="pagination arrow" onClick={() => setFaq6(!faq6)} className={faq6 ? "" : "arrow-inactive"} />
                        </div>
                        <div className={faq6 ? "content" : "content content-inactive"}>
                            All smartphones , Tablets and Laptops can Access  FCB app  with andriod version 4.2 or later  and ios version 9.3 or later 
                        </div>
                    </div>
                    <div className="tab">
                        <div className="nav">
                            <div className="head">WHERE CAN I DOWNLOAD FCB APP?</div>
                            <img src={pagination_arrow} alt="pagination arrow" onClick={() => setFaq7(!faq7)} className={faq7 ? "" : "arrow-inactive"} />
                        </div>
                        <div className={faq7 ? "content" : "content content-inactive"}>
                            You can download FCB app for Andriod devices on google Playstore and also on Appstore for Ios devices.
                        </div>
                    </div>
                    <div className="tab">
                        <div className="nav">
                            <div className="head">DO I NEED DATA TO USE FCB APP?</div>
                            <img src={pagination_arrow} alt="pagination arrow" onClick={() => setFaq8(!faq8)} className={faq8 ? "" : "arrow-inactive"} />
                        </div>
                        <div className={faq8 ? "content" : "content content-inactive"}>
                            Yes you need Data. However, our content is configured in such a way as to consume very minimal data and our BDM gives you an opportunity for receiving free data per subscription.
                        </div>
                    </div>
                    <div className="tab">
                        <div className="nav">
                            <div className="head">WHO CAN I TALK TOO WHEN I HAVE DIFFICULTIES  USING THE APP?</div>
                            <img src={pagination_arrow} alt="pagination arrow" onClick={() => setFaq9(!faq9)} className={faq9 ? "" : "arrow-inactive"} />
                        </div>
                        <div className={faq9 ? "content" : "content content-inactive"}>
                            There are technical support teams that you can talk too when you have difficuties using the app on your device.  You can reach them through chat services, email or you may place a call.
                        </div>
                    </div>
                    <div className="tab">
                        <div className="nav">
                            <div className="head">CAN A SCHOOL USE THE FCB APP?</div>
                            <img src={pagination_arrow} alt="pagination arrow" onClick={() => setFaq10(!faq10)} className={faq10 ? "" : "arrow-inactive"} />
                        </div>
                        <div className={faq10 ? "content" : "content content-inactive"}>
                            Yes. All you need to do is to speak with the Admin or the Manager of FCB
                        </div>
                    </div>
                    <div className="tab">
                        <div className="nav">
                            <div className="head">CAN I PARTNER WITH FCB?</div>
                            <img src={pagination_arrow} alt="pagination arrow" onClick={() => setFaq11(!faq11)} className={faq11 ? "" : "arrow-inactive"} />
                        </div>
                        <div className={faq11 ? "content" : "content content-inactive"}>
                            Yes you can. Send a proposal to info@firstclassbrain.com
                        </div>
                    </div>
                </div>
                
                <div className="info mobile">
                    <div className="title">CONTACT US <span className="enhanced">DIRECTLY</span></div>

                    <div className="paragraph">
                        +234-(0)907-455-4735,<br />+234-(0)815-832-6626
                    </div>

                    <div className="paragraph">
                        firstclassbrain11@gmail.com,<br />hello@firstclassbrain.com
                    </div>

                    <div className="paragraph">
                        No. 27, Olayiwola Street, New Oko-oba, Lagos State
                    </div>

                    <div className="paragraph">
                        FOLLOW US
                        <br /><br />
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                        <img src={linkedin} alt="linkedin" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Faq
