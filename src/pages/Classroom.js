import React, {useState, useContext, useEffect} from 'react'
import {PaystackButton} from 'react-paystack'
import axios from 'axios'
import {UserContext} from '../App'
import {
    useParams,
    Link,
    useHistory
} from 'react-router-dom'

import Footer from './Footer'
import Navigation from './Navigation'

import './css/general.css'
import './css/classroom.css'

import goal from '../icons/goal.svg'

// data
import classes from '../data/classes.json'

function Classroom() {
    const {state, dispatch} = useContext(UserContext)
    const {userId} = useParams()
    const history = useHistory()

    const isPaid = `${state ? state.paid: "loading"}`

    const publicKey = "pk_test_895f07c74a6b76a9ad3cc3aabf62104119879257"
    const amount = 1000000
    const [email, setEmail] = useState("user@nine.com")
    const [name, setName] = useState("User Nine")
    const [phone, setPhone] = useState("898899898")
    const [profile, setProfile] = useState(false)


    const paymentDone = () => {
        fetch("https://firstclassbrain-server.herokuapp.com/payment", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(data => {
                if(data.error){
                    alert(data.error)
                }
                else{
                    alert("Successfully updated bank details")
                    // history.push('/settings/bank')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
  
    const componentProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Buy Now",
      onSuccess: () => {
        setEmail("")
        setName("")
        setPhone("")
        // setProfile(!profile)
        paymentDone()
      },
    //   onCancel: () => {

    //   }
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }
    
    return (
        <div className="classroom">
            <Navigation />

            {/* <div className={isPaid ? "unpaid" : "paid"}>
                Pay to see courses
                <br />
                <PaystackButton className="paystack-button" {...componentProps} />
            </div> */}

            <section>
                <div className="head sub-title">
                    <span className="inactive">
                        <Link className="link" to='/'>home</Link> / 
                    </span>
                    <span className="active"> classroom</span>
                </div>
            </section>
            
            <div className="subjects-container">
                    
                {
                    classes.map(item => {
                        return(
                            <div>
                                <Link className="link" to={'/subjects/' + item.class}>
                                <div className="subjects">
                                    <div className="image">
                                        <img src={goal} alt="Mathematics" />
                                    </div>
                                    <div className="label sub-title">{item.name}</div>
                                    <div className="department sub-title">{item.department}</div>
                                </div>
                                </Link>
                            </div>
            
                        )
                    })
                }
            </div>

            <Footer />
        </div>
    )
}

export default Classroom
