import React from 'react'
import '../css/myPageCss.css'
import mainImg from '../img/캡처.PNG'
import iconImg1 from '../img/게시글아이콘-removebg-preview.png'
import iconImg2 from '../img/스크랩아이콘-removebg-preview.png'
import iconImg3 from '../img/세일_아이콘-removebg-preview.png'
import mainPageImg1 from '../img/눈물줄넘기_300x300.jpg'
import mainPageImg2 from '../img/돈모욕_300x300.jpg'
import mainPageImg3 from '../img/소리없이움_300x300.jpg'
import mainPageImg4 from '../img/우는개구리_300x300.jpg'
import mainPageImg5 from '../img/라스_300x300.jpg'
import mainPageImg6 from '../img/박명수고난_300x300.jpg'
import mainPageImg7 from '../img/박명수과소비_300x300.jpg'
import mainPageImg8 from '../img/자린고비1_300x300.jpg'
import mainPageImg9 from '../img/자린고비2_300x300.jpg'
import mainPageImg10 from '../img/정형돈_300x300.jpg'
import mainPageImg11 from '../img/폰반찬_300x300.jpg'
import mainPageImg12 from '../img/하하우는_300x300.jpg'


const myPageScrap = () => {
  return (
    <>
    <div className='myPageContainer'>
    <div className='myPageBody'>
      <header className="headerContainer">
        <div className="headerContents">
          <div className="mainTag">
            <a className="mainA" href="/">
              <img className="mainImg" src={mainImg} alt="" />
              거지의꿈
            </a>
          </div>
          
        </div>
      </header>
      <div className="mainPageContainer">
        <div className="profile">
          <div className="profile__head">
            <div className="profile__image">
              <img src="http://placekitten.com/300/300" alt="" />
            </div>
            <div className="profile__right">
              <div className="profile__username">im_notPoor</div>
              <div className="profile__btn">
                <span>김거지</span>
              </div>
            </div>
          </div>
          <div className="profile__dscrp">
            <span className="profile__name">내가 돈이 없지 가오도 없습니다.</span>
            <br />
            <br />
            <span className="profile__info">안녕하세요? 자린고비예요!<br /></span>
          </div>
        </div>
        <div className="status">
          <div className="status__container">
            <div className="status__item">
              <div className="status__info">게시물</div>
              <div className="status__number">152</div>
            </div>
            <div className="status__item">
              <div className="status__info">팔로워</div>
              <div className="status__number">264</div>
            </div>
            <div className="status__item">
              <div className="status__info">팔로우</div>
              <div className="status__number">823</div>
            </div>
          </div>
        </div>
        <div className="toolbar">
          <div className="toolbar__container">
            <a href="./myPageMain.html">
              <div className="toolbar__icon">
                <img src={iconImg1} alt="" />
              </div>
            </a>
            <a href="./myPageScrap.html">
              <div className="toolbar__icon">
                <img src={iconImg2} alt="" />
              </div>
            </a>
            <a href="./myPageDC.html">
              <div className="toolbar__icon">
                <img src={iconImg3} alt="" />
              </div>
            </a>
          </div>
          <br />
        </div>
        <div className="content">
          <div className="content__container">
            <div className="content__photo">
              <a href="">
                <img src={mainPageImg1} alt="" />
              </a>
            </div>
            <div className="content__photo">
              <a href="">
                <img src={mainPageImg2} alt="" />
              </a>
            </div><div className="content__photo">
              <a href="">
                <img src={mainPageImg3} alt="" />
              </a>
            </div><div className="content__photo">
              <a href="">
                <img src={mainPageImg4} alt="" />
              </a>
            </div><div className="content__photo">
              <a href="">
                <img src={mainPageImg5} alt="" />
              </a>
            </div><div className="content__photo">
              <a href="">
                <img src={mainPageImg6} alt="" />
              </a>
            </div><div className="content__photo">
              <a href="">
                <img src={mainPageImg7} alt="" />
              </a>
            </div><div className="content__photo">
              <a href="">
                <img src={mainPageImg8} alt="" />
              </a>
            </div><div className="content__photo">
              <a href="">
                <img src={mainPageImg9} alt="" />
              </a>
            </div><div className="content__photo">
              <a href="">
                <img src={mainPageImg10} alt="" />
              </a>
            </div><div className="content__photo">
              <a href="">
                <img src={mainPageImg11} alt="" />
              </a>
            </div><div className="content__photo">
              <a href="">
                <img src={mainPageImg12} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default myPageScrap