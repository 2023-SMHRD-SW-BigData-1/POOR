import React, { useState } from 'react'
// import SignIn from '../components/loginTest'

const SignInMain = ({getdata}) => {
  const [check2 ,setCheck] = useState(false)
  // const [issigned, setIssigned] = useState('')
  
  const change = (value)=>{
    console.log('경유지',value);
    console.log('경유지에서 값 보내기');
  }

  return (
    // <SignIn onValueChange={change}></SignIn>
  )
}

export default SignInMain