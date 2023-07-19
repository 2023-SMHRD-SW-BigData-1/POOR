import React, { useRef } from 'react';
import '../css/singInCss.css';
import { useState } from 'react';


const LoginTest = () => {
  const [signIn, setSignIn] = useState(true);

  const toggleSignIn = () => {
    setSignIn(!signIn);
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
       
        <h2>{heading}</h2>
        <h4>소통에 합리적 소비를 더하다!</h4>
        <h4>거지의 꿈과 함께하세요.</h4>

        <form action='/main' method='post'>
            <input type='id' placeholder='ID' name='id' />
            <input type='password' placeholder='PASSWORD' name='pw' />
        

        <div className="searchLink">
          <a href={link.href}>{link.text}</a>
          <a href={linkPw.href}>{linkPw.text}</a>
        </div>
        <input type="submit" value='로그인' className='submitBtn'/>
        <button onClick={toggleSignIn}>{button}</button>
        </form>
      </div>
    </div>
  );
};

export default LoginTest;