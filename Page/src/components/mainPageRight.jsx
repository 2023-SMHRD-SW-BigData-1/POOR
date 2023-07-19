import React, { useRef } from 'react';
import '../css/mainPageRight.css';
import goalIcon from '../img/goal.PNG';
import memoIcon from '../img/memeo.PNG';
import mainImg from '../img/캡처.PNG';

const MainPageRight = () => {
  const goalsRef = useRef([]);
  const memosRef = useRef([]);

  const handleGoalDoubleClick = index => {
    goalsRef.current[index].contentEditable = true;
    goalsRef.current[index].focus();
  };

  const handleGoalBlur = index => {
    goalsRef.current[index].contentEditable = false;
  };

  const handleMemoDoubleClick = index => {
    memosRef.current[index].contentEditable = true;
    memosRef.current[index].focus();
  };

  const handleMemoBlur = index => {
    memosRef.current[index].contentEditable = false;
  };

  const nick = '';
  const A = '';

  return (
    <div className='rightContainer'>
      <div className='pageTop'>
        <img className='topImg' src={mainImg} alt='' />
        <div className='topInside'>
<<<<<<< HEAD
          <h3>{`김거지님`}</h3>
          <h3>{`등급 그냥..거지?`}</h3>
=======
          <h3>{`${nick}님`}</h3>
          <h3>{`등급${A}`}</h3>
>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899
        </div>
      </div>
      <div className='bottom'>
        <img className='bottomImg' src={goalIcon} alt='' />
        <ul className='bottomUl'>
          <li
            ref={el => (goalsRef.current[0] = el)}
            onDoubleClick={() => handleGoalDoubleClick(0)}
            onBlur={() => handleGoalBlur(0)}
          >
            ⭐내집장만⭐
          </li>
          <li
            ref={el => (goalsRef.current[1] = el)}
            onDoubleClick={() => handleGoalDoubleClick(1)}
            onBlur={() => handleGoalBlur(1)}
          >
            🚩한 달 지출 50만원 이하🚩
          </li>
        </ul>
        <img className='bottomImg' src={memoIcon} alt='' />
        <ul className='bottomUl'>
          <li
            ref={el => (memosRef.current[0] = el)}
            onDoubleClick={() => handleMemoDoubleClick(0)}
            onBlur={() => handleMemoBlur(0)}
          >
            6월 30일 GS도시락 할인
          </li>
          <li
            ref={el => (memosRef.current[1] = el)}
            onDoubleClick={() => handleMemoDoubleClick(1)}
            onBlur={() => handleMemoBlur(1)}
          >
            7월 2일 과제 제출
          </li>
        </ul>
      </div>
      <div className='mainRightEtc'>
        <a href=''>소개</a>
        <span>, </span>
        <a href=''>도움말</a>
        <span>, </span>
        <a href=''>고객 센터</a>
      </div>
    </div>
  );
};

export default MainPageRight;