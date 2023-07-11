import React from 'react'
import MainImg from '../img/캡처.PNG'
import '../css/mainCss.css'

const ListPage = () => {
  return (
    <>
    <div className='listContainer'>
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
          {/* <nav className="headerRightImage">
            <a href=" "><i className="far fa-compass"></i></a>
            <a href=" "><i className="far fa-heart"></i></a>
            <a href=" "><i className="fas fa-user"></i></a>
          </nav> */}
        </div>
      </header>
      <div className="board_wrap">
        <div className="board_title">
          <strong>자린고비 게시판</strong>
          <p>절약 정보, 소소한 일상 등 자유로운 대화를 나눠보세요!</p>
        </div>
        <div className="board_list_wrap">
          <div className="board_list">
            <div className="ListTop">
              <div className="num">번호</div>
              <div className="title">제목</div>
              <div className="writer">글쓴이</div>
              <div className="date">작성일</div>
              <div className="count">조회</div>
            </div>
            <div>
              <div className="num">1</div>
              <div className="title"><a href="view.html">글 제목이 들어갑니다.</a></div>
              <div className="writer">김이름</div>
              <div className="date">2023.7.15</div>
              <div className="count">33</div>
            </div>
            <div>
              <div className="num">2</div>
              <div className="title"><a href="view.html">글 제목이 들어갑니다.</a></div>
              <div className="writer">김이름</div>
              <div className="date">2023.7.15</div>
              <div className="count">33</div>
            </div>
            <div>
              <div className="num">3</div>
              <div className="title"><a href="view.html">글 제목이 들어갑니다.</a></div>
              <div className="writer">김이름</div>
              <div className="date">2023.7.15</div>
              <div className="count">33</div>
            </div>
            <div>
              <div className="num">4</div>
              <div className="title"><a href="view.html">글 제목이 들어갑니다.</a></div>
              <div className="writer">김이름</div>
              <div className="date">2023.7.15</div>
              <div className="count">33</div>
            </div>
            <div>
              <div className="num">5</div>
              <div className="title"><a href="view.html">글 제목이 들어갑니다.</a></div>
              <div className="writer">김이름</div>
              <div className="date">2023.7.15</div>
              <div className="count">33</div>
            </div>
            <div>
              <div className="num">6</div>
              <div className="title"><a href="view.html">글 제목이 들어갑니다.</a></div>
              <div className="writer">김이름</div>
              <div className="date">2023.7.15</div>
              <div className="count">33</div>
            </div>
            <div>
              <div className="num">7</div>
              <div className="title"><a href="view.html">글 제목이 들어갑니다.</a></div>
              <div className="writer">김이름</div>
              <div className="date">2023.7.15</div>
              <div className="count">33</div>
            </div>
            <div>
              <div className="num">8</div>
              <div className="title"><a href="view.html">글 제목이 들어갑니다.</a></div>
              <div className="writer">김이름</div>
              <div className="date">2023.7.15</div>
              <div className="count">33</div>
            </div>
            <div>
              <div className="num">9</div>
              <div className="title"><a href="view.html">글 제목이 들어갑니다.</a></div>
              <div className="writer">김이름</div>
              <div className="date">2023.7.15</div>
              <div className="count">33</div>
            </div>
            <div>
              <div className="num">10</div>
              <div className="title"><a href="view.html">글 제목이 들어갑니다.</a></div>
              <div className="writer">김이름</div>
              <div className="date">2023.7.15</div>
              <div className="count">33</div>
            </div>
          </div>
          <div className="board_page">
            <a href="#" className="bt first"></a>
            <a href="#" className="bt prev"></a>
            <a href="#" className="num on">1</a>
            <a href="#" className="num">2</a>
            <a href="#" className="num">3</a>
            <a href="#" className="num">4</a>
            <a href="#" className="num">5</a>
            <a href="#" className="bt next">{'>'}</a>
            <a href="#" className="bt last">{'>>'}</a>
          </div>
          <div className="bt_wrap">
            <a href="write.html" className="on">등록</a>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default ListPage