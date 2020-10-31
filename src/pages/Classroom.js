import React, {useState, useContext} from 'react'
import {PaystackButton} from 'react-paystack'
import {UserContext} from '../App'
import {
    Link
} from 'react-router-dom'

import Footer from './Footer'
import Navigation from './Navigation'
import Dashboard from './Dashboard'

import './css/general.css'
import './css/classroom.css'

import goal from '../icons/goal.svg'

// data
import classes from '../data/classes.json'

function Classroom() {
    const {state} = useContext(UserContext)

    const publicKey = "pk_test_895f07c74a6b76a9ad3cc3aabf62104119879257"
    const amount = 1000000
    const [email, setEmail] = useState("user@nine.com")
    const [name, setName] = useState("User Nine")
    const [phone, setPhone] = useState("898899898")


    const payOne = () => {
        fetch("https://firstclassbrain-server.herokuapp.com/pay-basic-one", {
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
                    alert("Successfully purchased")
                    // history.push('/settings/bank')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const payTwo = () => {
        fetch("https://firstclassbrain-server.herokuapp.com/pay-basic-two", {
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
                    alert("Successfully purchased")
                    // history.push('/settings/bank')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const payThree = () => {
        fetch("https://firstclassbrain-server.herokuapp.com/pay-basic-three", {
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
                    alert("Successfully purchased")
                    // history.push('/settings/bank')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const payFour = () => {
        fetch("https://firstclassbrain-server.herokuapp.com/pay-basic-four", {
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
                    alert("Successfully purchased")
                    // history.push('/settings/bank')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const payFive = () => {
        fetch("https://firstclassbrain-server.herokuapp.com/pay-basic-five", {
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
                    alert("Successfully purchased")
                    // history.push('/settings/bank')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const paySix = () => {
        fetch("https://firstclassbrain-server.herokuapp.com/pay-basic-six", {
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
                    alert("Successfully purchased")
                    // history.push('/settings/bank')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const paySeven = () => {
        fetch("https://firstclassbrain-server.herokuapp.com/pay-basic-seven", {
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
                    alert("Successfully purchased")
                    // history.push('/settings/bank')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const payEight = () => {
        fetch("https://firstclassbrain-server.herokuapp.com/pay-basic-eight", {
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
                    alert("Successfully purchased")
                    // history.push('/settings/bank')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const payNine = () => {
        fetch("https://firstclassbrain-server.herokuapp.com/pay-basic-nine", {
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
                    alert("Successfully purchased")
                    // history.push('/settings/bank')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const payTen = () => {
        fetch("https://firstclassbrain-server.herokuapp.com/pay-basic-ten", {
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
                    alert("Successfully purchased")
                    // history.push('/settings/bank')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const payEleven = () => {
        fetch("https://firstclassbrain-server.herokuapp.com/pay-basic-eleven", {
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
                    alert("Successfully purchased")
                    // history.push('/settings/bank')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const payTwelve = () => {
        fetch("https://firstclassbrain-server.herokuapp.com/pay-basic-twelve", {
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
                    alert("Successfully purchased")
                    // history.push('/settings/bank')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const payThirteen = () => {
        fetch("https://firstclassbrain-server.herokuapp.com/pay-basic-thirteen", {
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
                    alert("Successfully purchased")
                    // history.push('/settings/bank')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const payFourteen = () => {
        fetch("https://firstclassbrain-server.herokuapp.com/pay-basic-fourteen", {
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
                    alert("Successfully purchased")
                    // history.push('/settings/bank')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const payFifteen = () => {
        fetch("https://firstclassbrain-server.herokuapp.com/pay-basic-fifteen", {
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
                    alert("Successfully purchased")
                    // history.push('/settings/bank')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const paySixteen = () => {
        fetch("https://firstclassbrain-server.herokuapp.com/pay-basic-sixteen", {
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
                    alert("Successfully purchased")
                    // history.push('/settings/bank')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const paySeventeen = () => {
        fetch("https://firstclassbrain-server.herokuapp.com/pay-basic-seventeen", {
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
                    alert("Successfully purchased")
                    // history.push('/settings/bank')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
  







    
    const payOneProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Buy Course",
      onSuccess: () => {
        setEmail("")
        setName("")
        setPhone("")
        // setProfile(!profile)
        payOne()
      },
    //   onCancel: () => {

    //   }
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }
    
    const payTwoProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Buy Course",
      onSuccess: () => {
        setEmail("")
        setName("")
        setPhone("")
        // setProfile(!profile)
        payTwo()
      },
    //   onCancel: () => {

    //   }
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }
    
    const payThreeProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Buy Course",
      onSuccess: () => {
        setEmail("")
        setName("")
        setPhone("")
        // setProfile(!profile)
        payThree()
      },
    //   onCancel: () => {

    //   }
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }
    
    const payFourProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Buy Course",
      onSuccess: () => {
        setEmail("")
        setName("")
        setPhone("")
        // setProfile(!profile)
        payFour()
      },
    //   onCancel: () => {

    //   }
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }
    
    const payFiveProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Buy Course",
      onSuccess: () => {
        setEmail("")
        setName("")
        setPhone("")
        // setProfile(!profile)
        payFive()
      },
    //   onCancel: () => {

    //   }
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }
    
    const paySixProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Buy Course",
      onSuccess: () => {
        setEmail("")
        setName("")
        setPhone("")
        // setProfile(!profile)
        paySix()
      },
    //   onCancel: () => {

    //   }
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }
    
    const paySevenProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Buy Course",
      onSuccess: () => {
        setEmail("")
        setName("")
        setPhone("")
        // setProfile(!profile)
        paySeven()
      },
    //   onCancel: () => {

    //   }
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }
    
    const payEightProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Buy Course",
      onSuccess: () => {
        setEmail("")
        setName("")
        setPhone("")
        // setProfile(!profile)
        payEight()
      },
    //   onCancel: () => {

    //   }
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }
    
    const payNineProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Buy Course",
      onSuccess: () => {
        setEmail("")
        setName("")
        setPhone("")
        // setProfile(!profile)
        payNine()
      },
    //   onCancel: () => {

    //   }
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }
    
    const payTenProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Buy Course",
      onSuccess: () => {
        setEmail("")
        setName("")
        setPhone("")
        // setProfile(!profile)
        payTen()
      },
    //   onCancel: () => {

    //   }
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }
    
    const payElevenProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Buy Course",
      onSuccess: () => {
        setEmail("")
        setName("")
        setPhone("")
        // setProfile(!profile)
        payEleven()
      },
    //   onCancel: () => {

    //   }
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }
    
    const payTwelveProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Buy Course",
      onSuccess: () => {
        setEmail("")
        setName("")
        setPhone("")
        // setProfile(!profile)
        payTwelve()
      },
    //   onCancel: () => {

    //   }
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }
    
    const payThirteenProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Buy Course",
      onSuccess: () => {
        setEmail("")
        setName("")
        setPhone("")
        // setProfile(!profile)
        payThirteen()
      },
    //   onCancel: () => {

    //   }
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }
    
    const payFourteenProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Buy Course",
      onSuccess: () => {
        setEmail("")
        setName("")
        setPhone("")
        // setProfile(!profile)
        payFourteen()
      },
    //   onCancel: () => {

    //   }
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }
    
    const payFifteenProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Buy Course",
      onSuccess: () => {
        setEmail("")
        setName("")
        setPhone("")
        // setProfile(!profile)
        payFifteen()
      },
    //   onCancel: () => {

    //   }
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }
    
    const paySixteenProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Buy Course",
      onSuccess: () => {
        setEmail("")
        setName("")
        setPhone("")
        // setProfile(!profile)
        paySixteen()
      },
    //   onCancel: () => {

    //   }
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }
    
    const paySeventeenProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Buy Course",
      onSuccess: () => {
        setEmail("")
        setName("")
        setPhone("")
        // setProfile(!profile)
        paySeventeen()
      },
    //   onCancel: () => {

    //   }
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }








    let basic_one = `${state ? state.one: "loading"}`
    let basic_two = `${state ? state.two: "loading"}` 
    let basic_three = `${state ? state.three: "loading"}`
    let basic_four = `${state ? state.four: "loading"}`
    let basic_five = `${state ? state.five: "loading"}`
    let basic_six = `${state ? state.six: "loading"}`
    let basic_seven = `${state ? state.seven: "loading"}`
    let basic_eight = `${state ? state.eight: "loading"}`
    let basic_nine = `${state ? state.nine: "loading"}`
    let basic_ten = `${state ? state.ten: "loading"}`
    let basic_eleven = `${state ? state.eleven: "loading"}`
    let basic_twelve = `${state ? state.twelve: "loading"}`
    let basic_thirteen = `${state ? state.thirteen: "loading"}`
    let basic_fourteen = `${state ? state.fourteen: "loading"}`
    let basic_fifteen = `${state ? state.fifteen: "loading"}`
    let basic_sixteen = `${state ? state.sixteen: "loading"}`
    let basic_seventeen = `${state ? state.seventeen: "loading"}`

    const basicOne = () => {
        if(basic_one === "true"){
            return [
                <Link className="link" to={'/subjects/' + classes[0].class}>
                <div className="subjects">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[0].name}</div>
                </div>
                </Link>
            ]
        } else{
            return [
                <div className="subjects unpaid-class">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[0].name}</div>
                    <div className="department sub-title">
                        <PaystackButton {...payOneProps} className="pay-button" />
                    </div>
                </div>
            ]
        }
    }
    
    const basicTwo = () => {
        if(basic_two === "true"){
            return [
                <Link className="link" to={'/subjects/' + classes[1].class}>
                <div className="subjects">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[1].name}</div>
                </div>
                </Link>
            ]
        } else{
            return [
                <div className="subjects unpaid-class">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[1].name}</div>
                    <div className="department sub-title">
                        <PaystackButton {...payTwoProps} className="pay-button" />
                    </div>
                </div>
            ]
        }
    }
    
    const basicThree = () => {
        if(basic_three === "true"){
            return [
                <Link className="link" to={'/subjects/' + classes[2].class}>
                <div className="subjects">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[2].name}</div>
                </div>
                </Link>
            ]
        } else{
            return [
                <div className="subjects unpaid-class">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[2].name}</div>
                    <div className="department sub-title">
                        <PaystackButton {...payThreeProps} className="pay-button" />
                    </div>
                </div>
            ]
        }
    }
    
    const basicFour = () => {
        if(basic_four === "true"){
            return [
                <Link className="link" to={'/subjects/' + classes[3].class}>
                <div className="subjects">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[3].name}</div>
                </div>
                </Link>
            ]
        } else{
            return [
                <div className="subjects unpaid-class">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[3].name}</div>
                    <div className="department sub-title">
                        <PaystackButton {...payFourProps} className="pay-button" />
                    </div>
                </div>
            ]
        }
    }
    
    const basicFive = () => {
        if(basic_five === "true"){
            return [
                <Link className="link" to={'/subjects/' + classes[4].class}>
                <div className="subjects">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[4].name}</div>
                </div>
                </Link>
            ]
        } else{
            return [
                <div className="subjects unpaid-class">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[4].name}</div>
                    <div className="department sub-title">
                        <PaystackButton {...payFiveProps} className="pay-button" />
                    </div>
                </div>
            ]
        }
    }
    
    const basicSix = () => {
        if(basic_six === "true"){
            return [
                <Link className="link" to={'/subjects/' + classes[5].class}>
                <div className="subjects">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[5].name}</div>
                </div>
                </Link>
            ]
        } else{
            return [
                <div className="subjects unpaid-class">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[5].name}</div>
                    <div className="department sub-title">
                        <PaystackButton {...paySixProps} className="pay-button" />
                    </div>
                </div>
            ]
        }
    }
    
    const basicSeven = () => {
        if(basic_seven === "true"){
            return [
                <Link className="link" to={'/subjects/' + classes[6].class}>
                <div className="subjects">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[6].name}</div>
                </div>
                </Link>
            ]
        } else{
            return [
                <div className="subjects unpaid-class">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[6].name}</div>
                    <div className="department sub-title">
                        <PaystackButton {...paySevenProps} className="pay-button" />
                    </div>
                </div>
            ]
        }
    }
    
    const basicEight = () => {
        if(basic_eight === "true"){
            return [
                <Link className="link" to={'/subjects/' + classes[7].class}>
                <div className="subjects">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[7].name}</div>
                </div>
                </Link>
            ]
        } else{
            return [
                <div className="subjects unpaid-class">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[7].name}</div>
                    <div className="department sub-title">
                        <PaystackButton {...payEightProps} className="pay-button" />
                    </div>
                </div>
            ]
        }
    }
    
    const basicNine = () => {
        if(basic_nine === "true"){
            return [
                <Link className="link" to={'/subjects/' + classes[8].class}>
                <div className="subjects">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[8].name}</div>
                </div>
                </Link>
            ]
        } else{
            return [
                <div className="subjects unpaid-class">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[8].name}</div>
                    <div className="department sub-title">
                        <PaystackButton {...payNineProps} className="pay-button" />
                    </div>
                </div>
            ]
        }
    }
    
    const basicTen = () => {
        if(basic_ten === "true"){
            return [
                <Link className="link" to={'/subjects/' + classes[9].class}>
                <div className="subjects">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[9].name}</div>
                </div>
                </Link>
            ]
        } else{
            return [
                <div className="subjects unpaid-class">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[9].name}</div>
                    <div className="department sub-title">
                        <PaystackButton {...payTenProps} className="pay-button" />
                    </div>
                </div>
            ]
        }
    }
    
    const basicEleven = () => {
        if(basic_eleven === "true"){
            return [
                <Link className="link" to={'/subjects/' + classes[10].class}>
                <div className="subjects">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[10].name}</div>
                </div>
                </Link>
            ]
        } else{
            return [
                <div className="subjects unpaid-class">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[10].name}</div>
                    <div className="department sub-title">
                        <PaystackButton {...payElevenProps} className="pay-button" />
                    </div>
                </div>
            ]
        }
    }
    
    const basicTwelve = () => {
        if(basic_twelve === "true"){
            return [
                <Link className="link" to={'/subjects/' + classes[11].class}>
                <div className="subjects">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[11].name}</div>
                </div>
                </Link>
            ]
        } else{
            return [
                <div className="subjects unpaid-class">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[11].name}</div>
                    <div className="department sub-title">
                        <PaystackButton {...payTwelveProps} className="pay-button" />
                    </div>
                </div>
            ]
        }
    }
    
    const basicThirteen = () => {
        if(basic_thirteen === "true"){
            return [
                <Link className="link" to={'/subjects/' + classes[12].class}>
                <div className="subjects">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[12].name}</div>
                </div>
                </Link>
            ]
        } else{
            return [
                <div className="subjects unpaid-class">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[12].name}</div>
                    <div className="department sub-title">
                        <PaystackButton {...payThirteenProps} className="pay-button" />
                    </div>
                </div>
            ]
        }
    }
    
    const basicFourteen = () => {
        if(basic_fourteen === "true"){
            return [
                <Link className="link" to={'/subjects/' + classes[13].class}>
                <div className="subjects">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[13].name}</div>
                </div>
                </Link>
            ]
        } else{
            return [
                <div className="subjects unpaid-class">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[13].name}</div>
                    <div className="department sub-title">
                        <PaystackButton {...payFourteenProps} className="pay-button" />
                    </div>
                </div>
            ]
        }
    }
    
    const basicFifteen = () => {
        if(basic_fifteen === "true"){
            return [
                <Link className="link" to={'/subjects/' + classes[14].class}>
                <div className="subjects">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[14].name}</div>
                </div>
                </Link>
            ]
        } else{
            return [
                <div className="subjects unpaid-class">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[14].name}</div>
                    <div className="department sub-title">
                        <PaystackButton {...payFifteenProps} className="pay-button" />
                    </div>
                </div>
            ]
        }
    }
    
    const basicSixteen = () => {
        if(basic_sixteen === "true"){
            return [
                <Link className="link" to={'/subjects/' + classes[15].class}>
                <div className="subjects">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[15].name}</div>
                </div>
                </Link>
            ]
        } else{
            return [
                <div className="subjects unpaid-class">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[15].name}</div>
                    <div className="department sub-title">
                        <PaystackButton {...paySixteenProps} className="pay-button" />
                    </div>
                </div>
            ]
        }
    }
    
    const basicSeventeen = () => {
        if(basic_seventeen === "true"){
            return [
                <Link className="link" to={'/subjects/' + classes[16].class}>
                <div className="subjects">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[16].name}</div>
                </div>
                </Link>
            ]
        } else{
            return [
                <div className="subjects unpaid-class">
                    <div className="image">
                        <img src={goal} alt="Mathematics" />
                    </div>
                    <div className="label sub-title">{classes[16].name}</div>
                    <div className="department sub-title">
                        <PaystackButton {...paySeventeenProps} className="pay-button" />
                    </div>
                </div>
            ]
        }
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

            <div className="dashboard-container">
                <Dashboard />
                
                <div className="subjects-container">
                    <div>
                        {basicOne()}
                    </div>
                
                    <div>
                        {basicTwo()}
                    </div>
                
                    <div>
                        {basicThree()}
                    </div>
                
                    <div>
                        {basicFour()}
                    </div>
                
                    <div>
                        {basicFive()}
                    </div>
                
                    <div>
                        {basicSix()}
                    </div>
                
                    <div>
                        {basicSeven()}
                    </div>
                
                    <div>
                        {basicEight()}
                    </div>
                
                    <div>
                        {basicNine()}
                    </div>
                
                    <div>
                        {basicTen()}
                    </div>
                
                    <div>
                        {basicEleven()}
                    </div>
                
                    <div>
                        {basicTwelve()}
                    </div>
                
                    <div>
                        {basicThirteen()}
                    </div>
                
                    <div>
                        {basicFourteen()}
                    </div>
                
                    <div>
                        {basicFifteen()}
                    </div>
                
                    <div>
                        {basicSixteen()}
                    </div>
                
                    <div>
                        {basicSeventeen()}
                    </div>
                </div>

            </div>
            
            <Footer />
        </div>
    )
}

export default Classroom
