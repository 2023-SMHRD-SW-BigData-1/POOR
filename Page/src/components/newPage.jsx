import React from 'react'
import './mainCss.css'
import img1 from '../img/캡처.PNG'
import postImg from '../img/지갑텅빈.png'
import profil1 from '../img/게시글프사.png'
import profil2 from  '../img/부자.png'
import profil3 from '../img/소비요정.png'
import profil4 from '../img/자린고비.png'
import profil5 from '../img/집게사장.png'
import profil6 from '../img/킹푸어.png'
import profil7 from '../img/테잌마이머니.png'
import img2 from '../img/다운로드.png'

const newPage = () => {
  return (
    <div>
      <header className="headerContainer">
        <div className="headerContents">
          <div className="mainTag">
            <a className="mainA" href="">
              <img className="mainImg" src={img1} alt="" />
              거지의꿈
            </a>
          </div>
          <div className="headerSearchBar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="검색" />
          </div>
          <nav className="headerRightImage">
            <a href=""><i className="far fa-compass"></i></a>
            <a href=""><i className="far fa-heart"></i></a>
            <a href=""><i className="fas fa-user"></i></a>
          </nav>
        </div>
      </header>

      <div className="body1">
        <article>
          <div className="feedHeader">
            <a href="" className="">
            <img src={profil1} width="32px" height="32px" alt="" />
            <span>king_of_poor</span>
            </a>
          </div>
          <div className="feedImage">
            <img src={postImg} width="550px" height="580px" alt="" />
          </div>
          <div className="feedReactionButton">
            <div className="reactionButton1">
              <button><i className="far fa-heart"></i></button>
              <button><i className="far fa-comment"></i></button>
              <button><i className="fas fa-share-square"></i></button>
            </div>
            <div className="reactionButton2">
              <button><i className="far fa-bookmark"></i></button>
            </div>
          </div>
          <div className="feedReaction">
            <div className="ReactionImage">
                <a href="">
              <img src={profil2} width="32px" height="32px" alt="" />
              <span>saeyeon_20님, wonho_20님 외 4명이 좋아합니다.</span>
              </a>
            </div>
            <div className="reactionSentence">
              <div className="surfSentence">
                <span>king_of_poor</span>
                <p>오늘도 절약 성공~🥳</p>
              </div>
              <div className="moreView">
                <a href="">더보기</a>
              </div>
            </div>
            <div className="friendsSentence">
              <span>South_gunOne</span>
              <p>보기좋게 성공~~~😎</p>
            </div>
            <div className="time">
              <p>42분전</p>
            </div>
            <div className="feedCommentContainer">
              <input className="feedComment" type="text" placeholder="댓글 달기..." />
              <a href="">
              <button className='feedCommentBtn'>게시</button>
              </a>
            </div>
          </div>
        </article>
        <aside>
          <div className="asideHead">
            <img src={profil3} width="56px" height="56px" alt="" />
            <div className="asideHeadText">
              <p>poorsdream</p>
              <p>poorsdream | </p>
            </div>
          </div>
          <div className="asideBody">
            <div className="asideBodyStory">
              <span>동료 절약맨</span>
              <a href="">
              <p>모두 보기</p>
              </a>
            </div>
            <div className="asideBodyImgId">
              <div className="asidehi">
                <img src={profil4} width="32px" height="32px" alt="" />
                <div className="asidehi2">
                  <span>Nameofking_poor</span>
                  <p>16분전</p>
                </div>
              </div>
              <div className="asidehi">
                <img src={profil5} width="32px" height="32px" alt="" />
                <div className="asidehi2">
                  <span>JarinGoB</span>
                  <p>45분전</p>
                </div>
              </div>
              <div className="asidehi">
                <img src={profil6} width="32px" height="32px" alt="" />
                <div className="asidehi2">
                  <span>wannnaBeRich</span>
                  <p>1시간 전</p>
                </div>
              </div>
              <div className="asidehi">
                <img src={profil7} width="32px" height="32px" alt="" />
                <div className="asidehi2">
                  <span>sobi_fairy2</span>
                  <p>3시간 전</p>
                </div>
              </div>
            </div>
          </div>
          <div className="asideTails">
            <div className="asideTailsRecommend">
              <span>회원님을 위한 추천</span>
              <a href="">
              <p>모두 보기</p>
              </a>
            </div>
                <div className="asideTailsRecommend1">
                <img src={img2} width="32px" height="32px" alt="" />
                    <div className="asideTailsRecommend2">
                    <span>스마트인재개발원</span>
                    <p>박희주, 정윤지 외 2명이 팔로우 하고있습니다.</p>
                    </div>
                </div>
                <div className="asideTailsRecommend1">
                    <img src={img1} width="32px" height="32px" />
                    <div className="asideTailsRecommend2">
                    <span>Take_MymoneY</span>
                    <p>남건일 님이 언팔로우 하고있습니다.</p>
                    </div>
                </div>
                <div className="asideTailsRecommend1">
                    <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMDFfNDEg%2FMDAxNjcyNTU2NTUxMDQ2.Pil4Yu28QCI-v5Fw_EvuV0Jz5OKa7YJpmPOYGg47rv4g.9lslJpNKEUuR6_pTw9SG9A-mlhkgsEIKos1DAYu0toog.JPEG.szoxszo%2FIMG_9176.JPG&type=sc960_832" width="32px" height="32px" />
                    <div className="asideTailsRecommend2">
                    <span>I LOVE MONEY</span>
                    <p>양동하 님이 팔로우 하고있습니다.</p>
                    </div>
                </div>
            </div>
        </aside>
        </div>
    </div>
  )
}

export default newPage