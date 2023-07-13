import React from 'react'
import MyPage from'./components/myPage'
import MyPost from './components/myPost'
import './components/myPage.css'
// import { Route, Routes, Link } from 'react-router-dom'


const myPageMain = () => {
  


  return (
    <div>
      <MyPage></MyPage>
      <MyPost></MyPost>
    </div>
  )
}

export default myPageMain