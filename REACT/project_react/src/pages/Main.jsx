import React from 'react';

function Main(){
    return<div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

<div className="title">
  <img src="/img/캡처.PNG" alt="" className="img"/>
  <img src="/img/타이틀.PNG" alt="" width="300px" height="100px"/><br/>  
  <img src="/img/캡처.PNG" alt="" class="img"/>
</div><br/>


<form className="row g-3">
  <h3 className="joinText">회원가입</h3><br/>
    <label for="inputID" class="form-label">아이디입력</label>
    <input type="text" class="form-control" id="inputEmail4"/>

  <div className="col-md-6">
    <label for="inputName" class="form-label">닉네임입력</label>
    <input type="text" class="form-control" id="inputPassword4"/>
  <div className="col-12">
    <label for="inputPassword" class="form-label">아이디입력</label>
    <input type="text" class="form-control" id="inputPassword" placeholder=""/>
    <input type="checkbox" name="idCheck" id=""/> 아이디 중복 확인
  </div>
  <div className="col-12">
    <label for="inputPassword" class="form-label">닉네임입력</label>
    <input type="text" class="form-control" id="inputPassword" placeholder=""/>
  </div>
  <div className="col-12">
    <label for="inputPassword" class="form-label">비밀번호입력</label>
    <input type="password" class="form-control" id="inputPassword" placeholder=""/>
  </div>
  <div className="col-12">
    <label for="inputPassword2" class="form-label">비밀번호확인</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder=""/>
  </div>
    <div className="form-check">
      <a className="agree" href="">
      <input type="checkbox" name="" id=""/> 개인정보 수집 및 이용 동의(필수)
    </a>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">회원가입</button>
  </div>
  
</form>
    </div>
}

export default Main; 