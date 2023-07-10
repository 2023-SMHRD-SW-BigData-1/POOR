import React from 'react'
import myImg from '../img/ho.jpg'
import myPostImg from '../img/new.PNG'
import myScrapImg from '../img/scrap.png'
import myInfoImg from '../img/info.PNG'

const MyPage = () => {

  const postLength=5
  const followLength=5
  const followeLength=5
  return (
    <div className='myPageBody'>
      <div className='myPageTop'>
        <div className='topImgDiv'>
        <img src={myImg} className='myImg' alt="" />
        </div>
      {/* <div className='etcChatDiv'> */}
        <div className='topEtcDiv'>
          <div className='myPostLength'>{postLength}
            <span>게시물</span>
          </div>
          <div className='myFollowLength'>{followLength}
            <span>팔로우</span>
          </div>
          <div className='myFolloweLength'>{followeLength}
            <span>팔로잉</span>
          </div>
          {/* <div className='chatBox'>
            <button>채팅</button>
          </div> */}
        {/* </div> */}
      </div>
    </div>

    <hr />

    <div className='ATageDiv'>
      <a href="" className='myPostATag'>
        <div>
          <img src={myPostImg} width='20px' height='20px'/>
          <span>내가 쓴 글</span>
        </div>
      </a>
      <a href="" className='myScrapATag'>
        <div>
          <img src={myScrapImg} width='20px' height='20px'/>
          <span>내가 스크랩한 글</span>
        </div>
      </a>
      <a href="" className='myInfoATag'>
        <div>
          <img src={myInfoImg} width='20px' height='20px'/>
          <span>내가 저장한 정보</span>
        </div>
      </a>
    </div>

    <hr />

    </div>
  )
}

export default MyPage