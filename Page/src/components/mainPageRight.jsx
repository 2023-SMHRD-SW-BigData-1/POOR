import React from 'react'
import '../css/mainPageRight.css'
import goalIcon from '../img/goal.PNG'
import memoIcon from '../img/memeo.PNG'
import hoImg from '../img/ho.jpg'

const mainPageRight = () => {

    const nick = ''
    const A=''
  return (
    <div className='container'>
      <div className="pageTop">
        <img className="topImg" src={hoImg} alt="" />
        <div className="topInside">
          <h3>`{nick}님`</h3>
          <h3>`등급{A}`</h3>
        </div>
      </div>
      <div className="bottom">
        <img className="bottomImg" src={goalIcon} alt="" />
        <ul className="bottomUl">
          <li>⭐내집장만⭐</li>
          <li>🚩한 달 지출 50만원 이하🚩</li>
        </ul>
        <img className="bottomImg" src={memoIcon} alt="" />
        <ul className="bottomUl">
          <li>6월 30일 GS도시락 할인</li>
          <li>7월 2일 과제 제출</li>
        </ul>
      </div>
      <div className="mainRightEtc">
        <a href="">소개</a>
        <span>, </span>
        <a href="">도움말</a>
        <span>, </span>
        <a href="">고객 센터</a>
      </div>
    </div>
  )
}

export default mainPageRight