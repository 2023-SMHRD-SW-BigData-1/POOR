import React from 'react'
import MainImg from '../img/캡처.PNG'
import './mainCss.css'
import './wirtePageCss.css'

const writePage = () => {
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
          <nav className="headerRightImage">
            <a href=" "><i className="far fa-compass"></i></a>
            <a href=" "><i className="far fa-heart"></i></a>
            <a href=" "><i className="fas fa-user"></i></a>
          </nav>
        </div>
      </header>

      <div className="board_wrap">
        <div className="board_title">
          <strong>자린고비 게시판</strong>
          <p>절약 정보, 소소한 일상 등 자유로운 대화를 나눠보세요!</p>
        </div>
        <div className="board_write_wrap">
          <div className="board_write">
            <div className="title">
              <dl>
                <dd><input type="text" placeholder="제목 입력" /></dd>
              </dl>
            </div>
            <div className="info">
              <dl>
                <dd><input type="text" placeholder="글쓴이 입력" /></dd>
              </dl>
              <dl>
                <dd><input type="password" placeholder="비밀번호 입력" /></dd>
              </dl>
            </div>
            <div className="cont">
              <textarea placeholder="내용 입력"></textarea>
            </div>
          </div>
          <div className="bt_wrap">
            <a href="view.html" className="on">등록</a>
            <a href="list.html">취소</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default writePage