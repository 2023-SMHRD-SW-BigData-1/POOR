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
            <button className='iconATag' onClick={()=>nav('./main')}>
                <img className="icon" src={homeIcon} alt="" /></button>
                <button className='textA' onClick={()=>nav('./main')}>  메인</button>
            </li>
            <li className="nav-item">
<<<<<<< HEAD
              <a className='iconATag' href="/listpage">
                <img className="icon" src={searchIcon} alt="" /></a>
                <a href="/new" className='textA'>검색</a>
            </li>
            <li className="nav-item">
              <a className='iconATag' href="/write">
                <img className="icon" src={newIcon} alt="" /></a>
                <a href="/listpage" className='textA'>게시글</a>
=======
              <button className='iconATag' onClick={()=>nav('./listpage')}>
                <img className="icon" src={searchIcon} alt="" /></button>
                <button className='textA' onClick={()=>nav('./listpage')}>  검색</button>
            </li>
            <li className="nav-item">
            <button className='iconATag' onClick={()=>nav('./new')}>
                <img className="icon" src={newIcon} alt="" /></button>
                <button className='textA' onClick={()=>nav('./new')}>  게시글</button>
>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899
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
            </li>
          </ul>
          <img className="car" src={mainImg} alt="" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default MainPageLeft
