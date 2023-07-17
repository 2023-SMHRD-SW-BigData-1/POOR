import React, { useContext, useEffect, useState } from 'react'
import './App.css'
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
import SetUpMain from './main/setUpMain'
// import SetUpMain from './main/setUpMain';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CheckLogin } from './context/CheckLogin';
import JoinTest from './components/JoinTest';
import MyPageScrap from './components/MyPageScrap'
import MyPageDC from './components/MyPageDC'

function App() {
  const appStyle = {
    display: "flex",
    // justifyContent: "space-between",
    // alignItems: "flex-start",
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
      {check ? 
      <>
      <div className='left'><MainPageLeft className="appLeftStyle"/></div>
      
      </>
      :null}
      {/* <div style={appStyle}> */}
      <Routes className="appCenterStyle">
      {check ? (

          <>
          <Route path='/listpage' element={<ListMain/>}/>
          <Route path='/main' element={<MainPageMain/>}/>
          <Route path='/discountinfo' element={<DiscountMain/>}/>
          <Route path='/write' element={<WritePageMain/>}/>
          <Route path='/my' element={<MyPageMainMain/>}/>
          <Route path='/setup' element={<SetUpMain/>}/>
          <Route path='/my/myScrap' element={<MyPageScrap/>}></Route>
          <Route path='/my/myDC' element={<MyPageDC/>}></Route>
          
          {/* <Route path='/' element={<SignInMain/>}/> */}
          <Route path='/new' element={<NewPageMain/>}/>
          <Route path='/listpage/viewpage/:num' element={<WriteView/>}/>
          </>
         
          
        ) : (
          <>
          <Route path="/" element={<SignInMain onValueChange={change}/>} />
          <Route path='/join' element={<JoinTest/>}/> 
          </> 
        )}

      </Routes>
      {check ?<div className='right'><MainPageRight className="appRightStyle"/></div> : null}
      {/* <div className='right'><MainPageRight className="appRightStyle"/></div> */}

      </div>
      
      // </div>
      
  );
}

export default App;
