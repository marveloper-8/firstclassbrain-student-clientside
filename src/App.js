import React, {useEffect, createContext, useReducer, useContext} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import Classroom from './pages/Classroom'
import PaymentStatusMonthly from './pages/PaymentStatusMonthly'
import PaymentStatusQuarterly from './pages/PaymentStatusQuarterly'
import PaymentStatusBiannually from './pages/PaymentStatusBiannually'
import PaymentStatusYearly from './pages/PaymentStatusYearly'
import ResetPassword from './pages/ResetPassword'
import VerifyEmail from './pages/VerifyAccount'
import Terms from './pages/Terms'
import Weeks from './pages/Weeks'
import Topics from './pages/Topics'
import CourseVideo from './pages/CourseVideo'
import CourseText from './pages/CourseText'
import Assignment from './pages/Assignment'
import Examination from './pages/Examination'
import AssignmentScore from './pages/AssignmentScore'
import ExaminationScore from './pages/ExaminationScore'
import WeeklyAssessment from './pages/WeeklyAssessment'
import WeeklyAssessmentScore from './pages/WeeklyAssessmentScore'
import MidTermTest from './pages/MidTermTest'
import MidTermTestScore from './pages/MidTermTestScore'
import BadRequest from './pages/BadRequest'

import {reducer, initialState} from './reducers/userReducer'

export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const {dispatch} = useContext(UserContext)
  const user = JSON.parse(localStorage.getItem("user"))
  useEffect(() => {
    if(user){
      dispatch({type: "USER", payload: user})
      // history.push('/classroom')
    } else{
      // history.push('/')
    }
  })

  return(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/privacy-policy' component={PrivacyPolicy} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/faq' component={Faq} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/classroom' component={Classroom} />
      <Route exact path='/payment_status/monthly' component={PaymentStatusMonthly} />
      <Route exact path='/payment_status/quarterly' component={PaymentStatusQuarterly} />
      <Route exact path='/payment_status/biannually' component={PaymentStatusBiannually} />
      <Route exact path='/payment_status/yearly' component={PaymentStatusYearly} />
      <Route exact path='/reset-password/:token' component={ResetPassword} />
      <Route exact path='/verify-account/:token' component={VerifyEmail} />
      <Route exact path='/terms/:subject' component={Terms} />
      <Route exact path='/weeks/:subject/:term' component={Weeks} />
      <Route exact path='/topics/:subject/:term/:week' component={Topics} />
      <Route exact path='/course-video/:postId' component={CourseVideo} />
      <Route exact path='/course-text/:postId' component={CourseText} />
      {/* <Route exact path='/assignment/:postId/:week' component={Assignment} /> */}
      <Route exact path='/assignment/:postId' component={Assignment} />
      <Route exact path='/examination' component={Examination} />
      <Route exact path='/assignment-score' component={AssignmentScore} />
      <Route exact path='/examination-score' component={ExaminationScore} />
      <Route exact path='/weekly-assessment' component={WeeklyAssessment} />
      <Route exact path='/weekly-assessment-score' component={WeeklyAssessmentScore} />
      <Route exact path='/mid-term-test' component={MidTermTest} />
      <Route exact path='/mid-term-test-score' component={MidTermTestScore} />
      <Route component={BadRequest} />
    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <UserContext.Provider value={{state, dispatch}}>
        <Router>
          <ToastContainer className="toaster" />
          <Routing />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
