import React from 'react';
import '../css/singInCss.css';


const JoinTest = () => {

  return (
    <div className="singInApp">
      <div className="Panel FormPanel">
       
        <h2>로그인</h2>
        <h4>소통에 합리적 소비를 더하다!</h4>
        <h4>거지의 꿈과 함께하세요.</h4>
        <form className='loginForm'>
          <input type="text" placeholder='ID'/>
          <input type="password" placeholder='Password'/>

        
        <div className="searchLink">
          <a href="">아이디찾기</a>
          <a href="">비밀번호찾기</a>
        </div>
        <input type="submit" value='Login' className='submitBtn'/>
        </form>
      </div>
    </div>
  );
};

export default JoinTest;