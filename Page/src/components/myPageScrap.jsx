import React, { useState } from 'react'
import iconImg1 from '../img/게시글아이콘-removebg-preview.png'
import iconImg2 from '../img/스크랩아이콘-removebg-preview.png'
import iconImg3 from '../img/세일_아이콘-removebg-preview.png'
import '../css/myPageCss.css'
import mainImg from '../img/캡처.PNG'
import scrapImg1 from '../img/마페스크랩1.png'
import scrapImg2 from '../img/마페스크랩2.png'
import { useNavigate } from 'react-router-dom'
import myPageImg from '../img/마페고양이프사.png'


const MyPageScrap = () => {
  const nav = useNavigate()
  const [followCount, setFollowCount] = useState(0);
  const [isFllowed, setIsFollowed] = useState(false);

  const userId = window.localStorage.getItem("user_ID")
  const userNick = window.localStorage.getItem("user_Nick")

  const handleFollow = () => {
    if (isFllowed) {
      setFollowCount(followCount - 1);
      setIsFollowed(false);
    } else {
      setFollowCount(followCount + 1);
      setIsFollowed(true);
    }
  }
  return (
    <>
    <div className='myPageContainerSub'>
    <div className='myPageBody'>
      <header className="headerContainerMy">
        <div className="headerContents">
          <div className="mainTag">
          <div className="mainA" href=" ">
              <img className="mainImg" src={mainImg} alt="" />
              거지의꿈
            </div>
          </div>
          
        </div>
      </header>
      <div className="mainPageContainer">
        <div className="profile">
          <div className="profile__head">
            <div className="profile__image">
              <img src={myPageImg} alt="" />
            </div>
            <div className="profile__right">
              <div className="profile__username">{userId}</div>
              <div className="profile__btn">
                <span>{userNick}</span>
                <button className={`follow-button-${isFllowed ? 'followed' : ''}`} onClick={handleFollow}>{isFllowed ? 'UNFOLLOW' : 'FOLLOW'}</button>
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
              <div className="status__number">12</div>
            </div>
            <div className="status__item">
              <div className="status__info">팔로워</div>
              <div className="status__number">{followCount}</div>
            </div>
            <div className="status__item">
              <div className="status__info">팔로우</div>
              <div className="status__number">23</div>
            </div>
          </div>
        </div>


        <div className="toolbar">
          <div className="toolbar__container">
            <button onClick={()=>nav('/my')}>
              <div className="toolbar__icon">
                <img src={iconImg1} alt="" />
              </div>
            </button>
            
            <button onClick={()=>nav('/my/myScrap')}>

              <div className="toolbar__icon">
                <img src={iconImg2} alt="" />
              </div>

            </button>

            <button onClick={()=>nav('/my/myDC')}>

              <div className="toolbar__icon">
                <img src={iconImg3} alt="" />
              </div>
            </button>
            

          </div>
          </div>


        <div className="content">
          <div className="content__container">
            <div className="content__photo">
                <a href="">
                    <img src={scrapImg1} alt="" />
                </a>
            </div>
            <div className="content__photo">
                <a href="">
                    <img src={scrapImg2} alt="" />
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

export default MyPageScrap