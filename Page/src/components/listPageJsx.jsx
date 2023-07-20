import React, { useEffect, useState } from 'react'
import MainImg from '../img/캡처.PNG'
import '../css/mainCss.css'
import List from './List'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

const ListPage = () => {
  const [data, setData] = useState([])
  const [title, setTitle] = useState('title')
  const [id, setId] = useState('id')
  const [number, setNumber] = useState(0)
  const [date, setDate] = useState('sysdate')
  const [content, setContent] = useState('content')
  const nav = useNavigate()
  let {num} = useParams()
  

  useEffect(() => {
    console.log('useEffect')
    axios.get('http://localhost:8888/listpage/listpage/')
      .then(res => {
        console.log(res.data[1].POST_SEQ)
        console.log(res.data)
        setData(res.data)
        setNumber(data.POST_SEQ)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  const appStyle = {
    display: "flex",
    // flexDirection : 'column'
    
  };
  const turnWrite =()=>{
    nav('/write')
  }

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(data.length / 10); i++) {
    pageNumber.push(i);
  }
  useEffect(() => {
    setStart((currentPage - 1) * 10);
    setEnd(currentPage * 10);
  }, [currentPage]);


  return (
    <>
    <div className='myPageContainer'>
    <div className='myPageBody'>
      <header className="headerContainer">
        <div className="headerContents">
          <div className="mainTag">
          <div className="mainA" href=" ">
              <img className="mainImg" src={MainImg} alt="" />
              거지의꿈
            </div>
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
            {
          
            data.slice(start, end).map(item=>(
              <List title={item.POST_TITLE} content={item.POST_CONTENT} id={item.USER_ID} date={item.POST_DATE} number={item.POST_SEQ} views={item.POST_VIEWS}/>
              ))}
              {/* <List onClick={nav('/listpage/viewpage?number')} title={title} id={id} date={date} content={content} number={number} />
            
              */}
              <nav style={{ listStyleType: "none", display: "flex" }}>
                {pageNumber.map((num) => (
                  <li key={num} onClick={() => setCurrentPage(num)}>
                    <button>{num}</button>
                  </li>
                ))}
              </nav>
          </div>

          
            {/* <div className="bt_wrap">
              <button onClick={turnWrite} className='on'>글쓰기</button>
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
          </div> */}
          <div className="bt_wrap">
          <button type='submit' className="on" onClick={()=>nav('/write')}>글쓰기</button>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default ListPage