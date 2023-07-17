import React, { useContext, useEffect, useRef } from 'react';
import '../css/singInCss.css';
import { useState } from 'react';
import axios from 'axios';
import { CheckLogin } from '../context/CheckLogin';
import { useNavigate } from 'react-router-dom';


const LoginTest = ({onValueChange}) => {
  const [signIn, setSignIn] = useState(true);
  const nav = useNavigate()



    const id = useRef()
    const pw = useRef()

    const [text, setText] = useState('');
  
    // const toggleSignIn = (event) => {
    //   setText(event.target.value);
    // };
  
    const toggleSignIn = (event) => {
      event.preventDefault();
      console.log('객체생성');
      const data = {
        id : id.current.value,
        pw: pw.current.value,
      };
      console.log('데이터 전송');
      axios.post('/', data)
        .then(response => {
          console.log(response.data.message);
          console.log('onvaluechange'); 
          onValueChange(response.data.message)
          nav('/home')
          
        })
        .catch(error => {
          console.error(error);
        });
    };

   


  const heading = signIn ? '회원가입' : '로그인';
  const paragraph = signIn
    ? '환영합니다! 거지의 꿈이 처음이시라면 회원가입 해주세요!'
    : '거지의 꿈에 회원가입이 되어 있으시면 로그인 해주세요!';
  const button = signIn ? 'Login' : 'Join';
  const submitBtn = signIn ? 'JOIN' : 'LOGIN';

  const inputs = [
    {
      type: 'text',
      placeholder: 'ID',
      index:0
    },
    {
      type: 'password',
      placeholder: 'Password',
      index:1
    },
  ];

  if (!signIn) {
    inputs.unshift({
      type: 'text',
      placeholder: 'Name',
      index : 2
    });
  }

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
       
        <h2 onClick={()=>nav('/join')}>로그인</h2>
        <h4>소통에 합리적 소비를 더하다!</h4>
        <h4>거지의 꿈과 함께하세요.</h4>

        <form action='/' method='post'>
            <input type='id' placeholder='ID' name='id' ref={id} />
            <input type='password' placeholder='PASSWORD' name='pw' ref={pw} />
        

        <div className="searchLink">
          <a href={link.href}>{link.text}</a>
          <a href={linkPw.href}>{linkPw.text}</a>
        </div>
        
        <button onClick={toggleSignIn}>{button}</button>
        </form>
      </div>
    </div>
  );
};

export default LoginTest;