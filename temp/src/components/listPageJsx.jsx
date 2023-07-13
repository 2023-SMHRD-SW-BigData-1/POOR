import React, { useEffect, useState } from 'react'
import MainImg from '../img/캡처.PNG'
import '../css/mainCss.css'
import List from './List'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const ListPage = () => {
  const [data, setData] = useState([])
  const [title, setTitle] = useState([])
  const [id, setId] = useState([])
  const [number, setNumber] = useState([])
  const [date, setDate] = useState([])
  const nav = useNavigate()
  

  useEffect(() => {
    console.log('useEffect')
    axios.get('/listpage/listpage')
      .then(res => {
        console.log(res)
        console.log(res.data[1].POST_SEQ)
        setData(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  const appStyle = {
    display: "flex",
    // flexDirection : 'column'
    
  };

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
              {data.map(item=>
              <List title={item.POST_TITLE} id={item.USER_ID} date={item.CREATED_AT} number={item.POST_SEQ}/>
              )}
              {/* <List title={title} id={id} date={date} number={number} /> */}

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