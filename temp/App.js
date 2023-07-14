import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import MyPage from './main/myPage'
import ListMain from './main/listMain';
import DiscountMain from './main/discountMain';
import WriteView from './main/WriteViewMain';
import WritePageMain from './main/WritePageMain';
import MainPageLeft from './main/mainPageLeft';
import MainPageRight from './main/mainPageRight';
import SignInMain from  './components/loginTest';
import NewPageMain from './main/newPageMain';
import MainPageMain from './main/mainPageMain';
import MyPageMainMain from './main/myPageMainMain'
// import SetUpMain from './main/setUpMain';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CheckLogin } from './context/CheckLogin';

function App() {
  const appStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  };
  const nav = useNavigate()
  const [check ,setCheck] = useState(false)
  const [data, setData] = useState('')

  const change = (value)=>{
    console.log('app.js');
    if(value==='success'){
      setData(value)
      setCheck(!check)
    }
  }

  
 
  return (
    <div className="mainApp">
      {/* <Frame></Frame> */}
      {check ? <MainPageLeft className="appLeftStyle"/>:null}

      <Routes className="appCenterStyle">
      {check ? (

          <>
          <Route path='/listpage' element={<ListMain/>}/>
          <Route path='/main' element={<NewPageMain/>}/>
          <Route path='/discountinfo' element={<DiscountMain/>}/>
          <Route path='/write' element={<WritePageMain/>}/>
          <Route path='/my' element={<MyPageMainMain/>}/>

          {/* <Route path='/' element={<SignInMain/>}/> */}
          <Route path='/new' element={<NewPageMain/>}/>
          <Route path='/home' element={<MainPageMain/>}/>
          <Route path='/listpage/viewpage?' element={<WriteView/>}/>
          </>
         
          
        ) : (
          <Route path="/" element={<SignInMain onValueChange={change}/>} />
        )}

      </Routes>
      {check ?<MainPageRight className="appRightStyle"/>:null}


      
      </div>
      
  );
}

export default App;
