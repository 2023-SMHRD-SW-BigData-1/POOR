import React from 'react'
// import SignIn from '../components/SignIn'
import JoinTestMain from '../components/joinTest'
import LoginTest from '../components/loginTest'

const signInMain = ({setIsSignedIn}) => {
  return (
    // <SignIn></SignIn>
    // <JoinTestMain></JoinTestMain>
    <LoginTest setIsSignedIn={setIsSignedIn}></LoginTest>
  )
}

export default signInMain