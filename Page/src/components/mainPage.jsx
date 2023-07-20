import React, {useState} from 'react'
import '../css/mainPageCss.css'
// import graph from './hyunhwang.js'
import MainImg from '../img/캡처.PNG'


import ChartComponent from './graph.jsx'

const MainPage = () => {
  const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //       // 데이터베이스에서 사용자 정보 조회
  //       const connection = await oracledb.getConnection();
  //       const result = await connection.execute('SELECT * FROM users WHERE id = :id', [userId]);
  //       setUserData(result.rows[0]);

  //   fetchData();
  // }, []);


  return (
    <div className='myPageContainer'>
    <div className="myPageBody">
    <header className="headerContainer">
        <div className="headerContents">
          <div className="mainTag">
          <div className="mainA" href=" ">
              <img className="mainImg" src={MainImg} alt="" />
              거지의꿈
            </div>
          </div>
          {/* <div className="headerSearchBar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="검색" />
          </div> */}
        </div>
      </header>
      <div className="blackboard_image">
        {/* <img className="backImg" src="./img2/칠판-100.jpg" width="100%" height="500px" /> */}
        <div className="textContainer">
          <h1 className="blackboard_image_text" style={{ fontSize: '45px' }}>
          {/* {userData.name}님의 등급: {userData.grade} */}
          </h1>
          <p style={{ color: 'white' }}>
            나의 활동 & 절약 현황
            <ul style={{ color: 'white' }}>
              <li>지난 달 대비 게시글을 3개 더 작성 했습니다.</li>
              <li>지난 달 대비 댓글이 8개 더 추가 되었습니다.</li>
              <li>지난 달 대비 좋아요가 30개 더 눌렸습니다.</li>
              <li>이번 달 68,000원을 절약했습니다!</li>
              <br />
              <span className='textSpan' style={{fontSize : '30px'}}>다음 등급 까지 남은 활동 포인트 : 97포인트</span>
            </ul>
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          
        </div>
          <ChartComponent></ChartComponent>
      </div>
      </div>
    </div>
  )
}

export default MainPage