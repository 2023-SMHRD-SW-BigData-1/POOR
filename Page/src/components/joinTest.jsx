import React, { useEffect, useRef } from 'react';
import '../css/singInCss.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const JoinTest = () => {

const [signIn] = useState(true); // signIn 상태를 항상 true로 설정
const id = useRef()
const name = useRef()
const pw = useRef()
const nav = useNavigate()


const toggleSignIn = (event) => {
  console.log('toggle Sign In')
  event.preventDefault();
 
  console.log('회원가입 데이터 전송');
  axios.post('http://localhost:8888/join', {
    id : id.current.value,
    pw: pw.current.value,
    name: name.current.value,
  })
    .then(response => {
      console.log(response.data.message);
      alert('회원가입에 성공하셨습니다.')
      nav('/')
      
    })
    .catch(error => {
      console.error(error);
    });
};


const heading = '회원가입';
const paragraph = '환영합니다! 거지의 꿈이 처음이시라면 회원가입 해주세요!';
const button = 'JOIN';
const submitBtn = 'JOIN';

  const inputs = [
    {
      type: 'text',
      placeholder: 'ID',
    },
    {
      type: 'password',
      placeholder: 'Password',
    },
  ];

//   if (!signIn) {
//     inputs.unshift({
//       type: 'text',
//       placeholder: 'Name',
//     });
//   }

  const link = {
    href: '#',
    text: '아이디찾기',
  };
  const linkPw = {
    href: '#',
    text: '비밀번호찾기',
  };

  return (
    <div className="singInApp">
      <div className="Panel FormPanel">
       
        <h2>회원가입</h2>
        <h4>소통에 합리적 소비를 더하다!</h4>
        <h4>거지의 꿈과 함께하세요.</h4>
        <form action='/join' method='POST'className='loginForm'>
          {/* {inputs.map(({ type, placeholder }) => (
            <input type={type} key={placeholder} placeholder='Password' />
          ))} */}
          <input type="text" placeholder='ID' ref={id}/>
          <input type="password" placeholder='PASSWORD' ref={pw}/>
          <input type="text" placeholder='NICKNAME' ref={name}/>

        
        {/* <div className="searchLink">
          <a href="">아이디찾기</a>
          <a href="">비밀번호찾기</a>
<<<<<<< HEAD
        </div> */}
=======
        </div>
>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899
        <input type="submit" value='JOIN' onClick={toggleSignIn} className='submitBtn'/>
        {/* <button onClick={toggleSignIn}>{button}</button> */}
        </form>
        <button onClick={()=>nav('/')} className='joinBtn'>LOGIN</button>

      </div>
    </div>
  );
};

export default JoinTest;