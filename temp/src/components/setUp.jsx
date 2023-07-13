import React from 'react'
import '../css/setUp.css'

const setUp = () => {
  return (
      <body className='bodyContainer'>
        <div className="appContainer">
          <div className="appHeader">
            <div className="suljungtool">
              <h5>예비 거지왕님,<br />안녕하세요.</h5>
              <span>로그아웃</span>
              <br />
            </div>
            <strong>X</strong>
          </div>
          <div className="onen">
            <ul>
              <li>
                <div className="inner alarm">
                  <div className="innerCont">
                    <h3>공지사항</h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="inner accept">
                  <div className="innerCont">
                    <h3>알림 설정</h3>
                    <span>게시물 스토리 및 댓글 </span>
                    <span>팔로잉 및 팔로워 </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="inner accept">
                  <div className="innerCont">
                    <h3>계정 설정</h3>
                    <span> 아이디 / 비밀번호 찾기</span>
                    <span> 회원 탈퇴</span>
                  </div>
                </div>
              </li>
            </ul>
            <div className="bottom">
              <h4>거지의 꿈 고객센터 <strong>062-655-3506</strong></h4>
            </div>
          </div>
        </div>
        </body>

  )
}

export default setUp