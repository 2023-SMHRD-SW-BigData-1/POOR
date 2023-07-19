import React, { useEffect, useState } from 'react'
import MainImg from '../img/캡처.PNG'
import '../css/mainCss.css'
import List from './List'
import axios from 'axios'

const ListPage = () => {
  const [data,setData]= useState([])

  useEffect(()=>{
    axios.get('/listpage')
    .then(res=>{
      setData(res)
      console.log(data,'클라이언트');
    })
    .catch(err=>{
      console.log(err);
    })
  },[])


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
            {/* {data.map(item=>
              <List title={item.title} id={item.id} date={item.date} number={item.number}/>
              )} */}
              <List title={data.title} id={data.id} date={data.date} number={data.number}/>
            
            
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
            <a href="write" className="on">등록</a>
          </div>
        </div>
      </div>
      </div>
      
      
    </>
  )
}



export default ListPage