import React from 'react'
import '../css/mainPageCss.css'
// import graph from './hyunhwang.js'
import ChartComponent from './graph.jsx'

const mainPage = () => {
  return (
    <div className="hyunHBody">
      <div className="blackboard_image">
        {/* <img className="backImg" src="./img2/칠판-100.jpg" width="100%" height="500px" /> */}
        <div className="textContainer">
          <h1 className="blackboard_image_text" style={{ fontSize: '50px' }}>
            OOO님의 등급 : 부자
          </h1>
          <p style={{ color: 'white' }}>
            나의 활동 & 절약 현황
            <ul style={{ color: 'white' }}>
              <li>지난 달 대비 게시글을 3개 더 작성 했습니다.</li>
              <li>지난 달 대비 댓글이 8개 더 추가 되었습니다.</li>
              <li>지난 달 대비 좋아요가 30개 더 눌렸습니다.</li>
              <li>이번 달 '거지의 꿈'으로 68,000원을 아꼈습니다!</li>
              <br />
              <span>다음 등급 까지 남은 활동 포인트 : 97포인트</span>
            </ul>
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {/* <script src="https://cdn.jsdelivr.net/npm/chart.js@3.3.2/dist/chart.min.js"></script>
          <div className="canvas-wrap">
            <canvas id="stack_chart"></canvas>
            <script src={graph}></script>
          </div> */}
        </div>
          <ChartComponent></ChartComponent>
      </div>
    </div>
  )
}

export default mainPage