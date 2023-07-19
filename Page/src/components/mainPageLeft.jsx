import React from 'react'
import '../css/mainPageLeft.css'
import titleImg from '../img/타이틀.PNG'
import homeIcon from '../img/home.PNG'
import searchIcon from '../img/search.PNG'
import newIcon from '../img/new.PNG'
import infoIcon from '../img/info.PNG'
import myIcon from '../img/my.PNG'
import mainImg from '../img/캡처.PNG'
import moneyIcon from '../img/money.png'
import { useNavigate } from 'react-router-dom';

const MainPageLeft = () => {
const nav = useNavigate();
  return (
    <React.Fragment>
      <div className="mainHeaderContainer">

        <div className="mainHeaderContents">
          <img className="mainTitle" src={titleImg} alt="" />
          <ul className="nav">
          <li className="nav-item">
            <button className='iconATag' onClick={()=>nav('./main')}>
                <img className="icon" src={homeIcon} alt="" /></button>
                <button className='textA' onClick={()=>nav('./main')}>  홈</button>
            </li>
            <li className="nav-item">
              <button className='iconATag' onClick={()=>nav('./listpage')}>
                <img className="icon" src={searchIcon} alt="" /></button>
                <button className='textA' onClick={()=>nav('./listpage')}>  검색</button>
            </li>
            <li className="nav-item">
            <button className='iconATag' onClick={()=>nav('./new')}>
                <img className="icon" src={newIcon} alt="" /></button>
                <button className='textA' onClick={()=>nav('./new')}>  게시글</button>
            </li>
            <li className="nav-item">
            <button className='iconATag' onClick={()=>nav('./discountinfo')}>
                <img className="icon" src={infoIcon} alt="" /></button>
                <button className='textA' onClick={()=>nav('./discountinfo')}>  할인정보</button>
            </li>
            <li className="nav-item">
            <button className='iconATag' onClick={()=>nav('./my')}>
                <img className="icon" src={myIcon} alt="" /></button>
                <button className='textA' onClick={()=>nav('./my')}>  마이페이지</button>
            </li><li className="nav-item">
            <button className='iconATag' onClick={()=>nav('./chart')}>
                <img className="icon" src={moneyIcon} alt="" /></button>
                <button className='textA' onClick={()=>nav('./chart')}>  가계부</button>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MainPageLeft
