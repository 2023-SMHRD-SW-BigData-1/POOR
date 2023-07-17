import React, { useRef, useState } from 'react'
import MainImg from '../img/캡처.PNG'
import '../css/mainCss.css'
import '../css/wirtePageCss.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const WritePage = () => {
  const nav = useNavigate()
  const appStyle = {
    display: "flex",
    flexDirection : 'column'
  };
    const id = useRef()
    const title = useRef()

    const [text, setText] = useState('');
  
    const handleChange = (event) => {
      setText(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // 서버로 전송할 데이터 객체 생성
      const data = {
        title: title.current.value,
        content : text,
        id : id.current.value
      };
      
  
      // axios를 사용하여 서버로 데이터 전송
      axios.post('http://localhost:8888/write', data)
        .then(response => {
          console.log(response.data.message); // 삽입 결과 또는 처리된 데이터 확인
          
          alert('게시글 등록에 성공하였습니다.')
          nav('/listpage')
        })
        .catch(error => {
          console.error(error);
        });
    };

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
            <form onSubmit={()=>{handleSubmit()}}>
          <div className="board_write">
            <div className="title">
              <dl>
                <dd><input type="text" placeholder="제목 입력" name='id' ref={title}/></dd>
              </dl>
            </div>
            <div className="info">
              <dl>
                <dd><input type="text" placeholder="글쓴이 입력" name='name' ref={id}/></dd>
              </dl>
              
            </div>
            <div className="cont">
              <textarea placeholder="내용 입력" value={text} onChange={(e)=>{handleChange(e)}}></textarea>
            </div>
          </div>

          <div className="bt_wrap">

            {/* <input type="submit" value='등록' /> */}
            <button type='submit' className="on" onClick={(e)=>{handleSubmit(e)}}>등록</button>
            {/* <a type='submit' className="on">등록</a> */}
            <button className="on" onClick={()=>{nav('/listpage')}}>목록</button>

          </div>
          </form>
        </div>
      </div>
    </div>
  )
}


export default WritePage