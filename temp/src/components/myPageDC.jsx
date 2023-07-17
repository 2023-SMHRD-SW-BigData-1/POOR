import React from 'react'
import iconImg1 from '../img/게시글아이콘-removebg-preview.png'
import iconImg2 from '../img/스크랩아이콘-removebg-preview.png'
import iconImg3 from '../img/세일_아이콘-removebg-preview.png'
import '../css/myPageCss.css'
import mainImg from '../img/캡처.PNG'
import DCImg1 from '../img/시코르_300x300.jpg'
import DCImg2 from '../img/쓱 할인_300x300.jpg'

const myPageDC = () => {
  return (
    <>
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
      <div className="main">
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
                    <img src={DCImg1} alt="" />
                </a>
            </div>
            <div className="content__photo">
                <a href="">
                    <img src={DCImg2} alt="" />
                </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default myPageDC