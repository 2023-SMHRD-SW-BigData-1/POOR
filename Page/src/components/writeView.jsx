import React, { useState } from 'react'
import MainImg from '../img/캡처.PNG'
import '../css/mainCss.css'
import '../css/writeViewCss.css'
import { useNavigate, useParams } from 'react-router-dom'

const WriteView = ({title, content, id, date, number}) => {
  let {num}= useParams()
  console.log('num', num)
  const nav = useNavigate()


  const appStyle = {
    display: "flex",
    flexDirection : 'column'
    
  };
  const upStyle={
    display: "flex",
    marginLeft : "50px"
  }
  

  return (
    <div style={appStyle}>
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
              {title}
            </div>
            <div className="wirteInfo">
              <dl>
                <dt>번호</dt>
                <dd>{number}</dd>
              </dl>
              <dl>
                <dt>글쓴이</dt>
                <dd>{id}</dd>
              </dl>
              <dl>
                <dt>작성일</dt>
                <dd>{date}</dd>
              </dl>
              <dl>
                <dt>조회</dt>
                <dd>33</dd>
              </dl>
            </div>
            <div className="cont">
              {content} <br />
              
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
          <div className="bt_wrap">
            <button onClick={()=>{nav('/listpage')}}>목록</button>
            <button onClick={()=>{nav('/write')}}>수정</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WriteView