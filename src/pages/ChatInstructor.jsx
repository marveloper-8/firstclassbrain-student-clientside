import React, { useEffect, useState, useRef } from 'react'
import {Link} from 'react-router-dom'
// components
import Footer from './Footer'
import Navigation from './Navigation'
// css
import './css/general.css'
import './css/chat-instructor.css'

import Talk from "talkjs";


const InboxApp = ({location}) => {

  const talkjsContainer = useRef(null);
  const [instrusctorData, setInstrusctorData] = useState({})
  const student = JSON.parse(localStorage.getItem("student"))
  const instrusctorId = new URLSearchParams(location.search).get("instrusctorId")


  useEffect(() => {
    fetch(`https://firstclassbrain-server.herokuapp.com/instructorbyid/${instrusctorId}`)
      .then(res => res.json())
      .then(data => {
          if(data.error){
              alert(data.error)
          }
          else{
            setInstrusctorData(data.instructor)
            console.log(data)

            Talk.ready.then(() => {
              var me = new Talk.User({
                id: student._id,
                name: `${student.firstName} ${student.lastName}`,
                email: student.email,
                photoUrl: student.pic,
                welcomeMessage: "Hey there! How are you? :-)",
                role: "student"
              })
              
              window.talkSession = new Talk.Session({
                appId: "tv1HZWua",
                me: me
              })
              
              var other = new Talk.User({
                id: data.instructor._id,
                name: `${data.instructor.firstName} ${data.instructor.lastName}`,
                email: data.instructor.email,
                photoUrl: data.instructor.pic,
                welcomeMessage: "Hey, how can I help?",
                role: "instructor"
              })
        
              var conversation = window.talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other))
              conversation.setParticipant(me)
              conversation.setParticipant(other)
              
              var inbox = window.talkSession.createInbox({selected: conversation})
              inbox.mount(talkjsContainer.current)
            })
          }
      })
      .catch(err => {
          console.log(err)
      })
  }, [setInstrusctorData])


  // useEffect(() => {
    
  //   console.log("Student Data",student)
  //   console.log("Instructor Data",instrusctorId)

    

  // }, [])


  return (
    <div>
      <Navigation />
      <div className="chat-box">
        <div ref={talkjsContainer} className="chatbox-container"></div>
      </div>
      <Footer />
    </div>
  )
}

export default InboxApp


// class InboxApp extends React.Component {

//     constructor(props) {
//       super(props)
//       this.talkjsContainer = React.createRef()
//       this.student = JSON.parse(localStorage.getItem("student"))
//       this.instrusctorId = new URLSearchParams(this.props.location.search).get("instrusctorId")
//     }

//     componentDidMount() {    
//       Talk.ready.then(() => {
//         var me = new Talk.User({
//           id: parseInt(Math.random()*500000).toString(),
//           name: "Alice",
//           email: "demo@talkjs.com",
//           photoUrl: "https://demo.talkjs.com/img/alice.jpg",
//           welcomeMessage: "Hey there! How are you? :-)",
//           role: "student"
//         })
        
//         window.talkSession = new Talk.Session({
//           appId: "Hku1c4Pt",
//           me: me
//         })
        
//         var other = new Talk.User({
//           id: parseInt(Math.random()*500000).toString(),
//           name: "Wian Instructor",
//           email: "demo@talkjs.com",
//           photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
//           welcomeMessage: "Hey, how can I help?",
//           role: "instructor"
//         })
  
//         var conversation = window.talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other))
//         conversation.setParticipant(me)
//         conversation.setParticipant(other)
        
//         var inbox = window.talkSession.createInbox({selected: conversation})
//         inbox.mount(this.talkjsContainer.current)
//       });
//     }
  
//     render() {
//       return (
//         <div>
//           <Navigation />
//           <div className="chat-box">
//             <div ref={this.talkjsContainer} className="chatbox-container"></div>
//           </div>
//           <Footer />
//         </div>
//       )
//     }
// }
