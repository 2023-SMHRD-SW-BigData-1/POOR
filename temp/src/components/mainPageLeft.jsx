import React from 'react'
import '../css/mainPageLeft.css'
import titleImg from '../img/타이틀.PNG'
import homeIcon from '../img/home.PNG'
import searchIcon from '../img/search.PNG'
import newIcon from '../img/new.PNG'
import infoIcon from '../img/info.PNG'
import myIcon from '../img/my.PNG'
import mainImg from '../img/캡처.PNG'
import { useNavigate } from 'react-router-dom'

const MainPageLeft = () => {
  const nav = useNavigate()

  return (
    <React.Fragment>
      <div className="mainHeaderContainer">

        <div className="mainHeaderContents">
          <img className="mainTitle" src={titleImg} alt="" />
          <ul className="nav">
            <li className="nav-item">
              <a className='iconATag' onClick={() => nav('/home')}>
                <img className="icon" src={homeIcon} alt="" /></a>
                <a onClick={() => nav('/home')} className='textA'>홈</a>
            </li>
            <li className="nav-item">
              <button className='iconATag' onClick={() => nav('/listpage')}><img className="icon" src={searchIcon} alt="" /></button>
              {/* <a className='iconATag' onClick={() => nav('/listpage')}>
                <img className="icon" src={searchIcon} alt="" /></a> */}
                <button onClick={() => nav('/listpage')} className='textA'>검색</button>
                {/* <a onClick={() => nav('/listpage')} className='textA'>검색</a> */}
            </li>
            <li className="nav-item">
              <a className='iconATag' onClick={() => nav('/new')}>
                <img className="icon" src={newIcon} alt="" /></a>
                <a onClick={() => nav('/new')} className='textA'>게시글</a>
            </li>
            <li className="nav-item">
              <a className='iconATag' onClick={() => nav('/discountInfo')}>
                <img className="icon" src={infoIcon} alt="" /></a>
                <a onClick={() => nav('/discountInfo')} className='textA'>할인정보</a>
            </li>
            <li className="nav-item">
              <a className='iconATag' onClick={() => nav('/my')}>
                <img className="icon" src={myIcon} alt="" /></a>
                <a onClick={() => nav('/my')} className='textA'>마이페이지</a>
            </li>
          </ul>
          <img className="car" src={mainImg} alt="" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default MainPageLeft
