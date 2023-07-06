import React from 'react'
import './join.css'
import img1 from '../img/타이틀.png'
import img2 from '../img/캡처.png'
import { Link } from 'react-router-dom'

const Join = () => {
  return (
    <div className='body'>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

<div className="title">
  <img src={img2} alt="" className="img"/>
  <Link to='/'><img src={img1} alt="" width="300px" height="100px"/><br/></Link>
  <img src={img2} alt="" className="img"/>
</div><br/>


<form class="row_g-3">
      <h3 class="joinText">회원가입</h3><br/>
      
      <div class="col-12">
        <label for="inputPassword" class="form-label">아이디입력</label>
        <input type="text" class="form-control" id="inputPassword" placeholder=""/>
        <input type="checkbox" name="idCheck" id=""/> 아이디 중복 확인
      </div>
      
      <div class="col-12">
        <label for="inputPassword" class="form-label">닉네임입력</label>
        <input type="text" class="form-control" id="inputPassword" placeholder=""/>
      </div>
      <br/>
      <div class="col-12">
        <label for="inputPassword" class="form-label">비밀번호입력</label>
        <input type="password" class="form-control" id="inputPassword" placeholder=""/>
      </div>
      <br/>
      <div class="col-12">
        <label for="inputPassword2" class="form-label">비밀번호확인</label>
        <input type="password" class="form-control" id="inputPassword2" placeholder=""/>
      </div>
      <br/>
        <div class="form-check">
          <a class="agree" href="">
          <input type="checkbox" name="" id=""/> 개인정보 수집 및 이용 동의(필수)
        </a>
        </div>
      
      <div class="col-12">
        <button type="submit" class="btn btn-primary">회원가입</button>
      </div>
      
    </form>
    </div>
  )
}

export default Join