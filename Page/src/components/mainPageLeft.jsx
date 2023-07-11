import React from 'react'
import './mainPageLeft.css'
import titleImg from '../img/타이틀.PNG'
import homeIcon from '../img/home.PNG'
import searchIcon from '../img/search.PNG'
import newIcon from '../img/new.PNG'
import infoIcon from '../img/info.PNG'
import myIcon from '../img/my.PNG'
import mainImg from '../img/캡처.PNG'

const mainPageLeft = () => {
  return (
    <React.Fragment>
      <div className="mainHeaderContainer">

        <div className="mainHeaderContents">
          <img className="mainTitle" src={titleImg} alt="" />
          <ul className="nav">
            <li className="nav-item">
              <a className='iconATag' href="#home">
                <img className="icon" src={homeIcon} alt="" /></a>
                <a href="#home" className='textA'>홈</a>
            </li>
            <li className="nav-item">
              <a className='iconATag' href="#search">
                <img className="icon" src={searchIcon} alt="" /></a>
                <a href="#search" className='textA'>검색</a>
            </li>
            <li className="nav-item">
              <a className='iconATag' href="#new">
                <img className="icon" src={newIcon} alt="" /></a>
                <a href="#new" className='textA'>게시글</a>
            </li>
            <li className="nav-item">
              <a className='iconATag' href="#discountInfo">
                <img className="icon" src={infoIcon} alt="" /></a>
                <a href="#discountInfo" className='textA'>할인정보</a>
            </li>
            <li className="nav-item">
              <a className='iconATag' href="#my">
                <img className="icon" src={myIcon} alt="" /></a>
                <a href="#my" className='textA'>마이페이지</a>
            </li>
          </ul>
          <img className="car" src={mainImg} alt="" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default mainPageLeft
