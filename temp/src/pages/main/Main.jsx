import React from 'react'
import './main.css'
import img1 from '../img/타이틀.png'
import img2 from '../img/캡처.png'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='body1'>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

<form action="/home" methode='post'>
    <img className="mb-1" src={img1} alt="" width="400" height="150"/>
  <h3 className='h3'>소통에 합리적 소비를 더하다!</h3>
  <h3 className='h3'>거지의 꿈과 함께하세요.</h3>
  
  <div className="form-floating">
      <input type="text" name='id'className="form-control" id="floatingInput" placeholder="ID"/>
      <label for="floatingInput">ID</label>
    </div>
    <div className="form-floating">
        <input type="password" name='pw'className="form-control" id="floatingPassword" placeholder="Password"/>
        <label for="floatingPassword">Password</label>
    </div>

    <div className="idPwSearch">
        <a className="idSearch" href="">
            <span>아이디 조회</span>
        </a>
        <span>/</span>
        <a className="pwSearch" href="">
            <span>비밀번호 조회</span>
        </a>
    </div>
    
    <div className="form-check text-start my-3">
        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
        <label className="form-check-label" for="flexCheckDefault">
            자동 로그인
  </label>
</div>
<input type="submit" className="btn_btn-secondary" value="로그인" />
{/* <button type="button" className="btn_btn-secondary">로그인</button> */}
<Link to='/join'><button type="button" className="btn_btn-light" >회원가입</button></Link>
<br/>
<img className="mb-4" src={img2} alt="" />
</form>
    </div>
  )
}

export default Main