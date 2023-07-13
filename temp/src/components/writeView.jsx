import React from 'react'
import MainImg from '../img/캡처.PNG'
import '../css/mainCss.css'
import '../css/writeViewCss.css'

const writeView = () => {
  return (
    <>
      <header className="headerContainer">
        <div className="headerContents">
          <div className="mainTag">
            <a className="mainA" href=" ">
              <img className="mainImg" src={MainImg} alt="" />
              거지의꿈
            </a>
          </div>
          <div className="headerSearchBar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="검색" />
          </div>
        </div>
      </header>

      <div className="board_wrap">
        <div className="board_title">
          <strong>자린고비 게시판</strong>
          <p>절약 정보, 소소한 일상 등 자유로운 대화를 나눠보세요!</p>
        </div>
        <div className="board_view_wrap">
          <div className="board_view">
            <div className="title">
              냉장고 문이 안열려요..
            </div>
            <div className="wirteInfo">
              <dl>
                <dt>번호</dt>
                <dd>1</dd>
              </dl>
              <dl>
                <dt>글쓴이</dt>
                <dd>정세연</dd>
              </dl>
              <dl>
                <dt>작성일</dt>
                <dd>2023.7.14</dd>
              </dl>
              <dl>
                <dt>조회</dt>
                <dd>33</dd>
              </dl>
            </div>
            <div className="cont">
              # 냉장고 AS<br />
              # 냉장고 문 안열림<br />
              # 냉장고 고장<br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
          <div className="bt_wrap">
            <a href="list.html" className="on">목록</a>
            <a href="edit.html">수정</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default writeView