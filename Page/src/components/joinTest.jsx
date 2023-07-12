import React from 'react';
import '../css/singInCss.css';
import { useState } from 'react';


const JoinTest = () => {
//   const [signIn, setSignIn] = useState(true);

  const toggleSignIn = () => {
    // setSignIn(!signIn);
  };

//   const heading = signIn ? '회원가입' : '로그인';
//   const paragraph = signIn
//     ? '환영합니다! 거지의 꿈이 처음이시라면 회원가입 해주세요!'
//     : '거지의 꿈에 회원가입이 되어 있으시면 로그인 해주세요!';
//   const button = signIn ? 'Login' : 'Join';
//   const submitBtn = signIn ? 'JOIN' : 'LOGIN';
const [signIn] = useState(true); // signIn 상태를 항상 true로 설정

const heading = '회원가입';
const paragraph = '환영합니다! 거지의 꿈이 처음이시라면 회원가입 해주세요!';
const button = 'Login';
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
       
        <h2>로그인</h2>
        <h4>소통에 합리적 소비를 더하다!</h4>
        <h4>거지의 꿈과 함께하세요.</h4>
        <form className='loginForm'>
          {/* {inputs.map(({ type, placeholder }) => (
            <input type={type} key={placeholder} placeholder='Password' />
          ))} */}
          <input type="text" placeholder='ID'/>
          <input type="password" placeholder='Password'/>

        
        <div className="searchLink">
          <a href="">아이디찾기</a>
          <a href="">비밀번호찾기</a>
        </div>
        <input type="submit" value='Login' className='submitBtn'/>
        {/* <button onClick={toggleSignIn}>{button}</button> */}
        </form>
      </div>
    </div>
  );
};

export default JoinTest;