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
import ChartMain from './main/ChartMain';
import FeedMain1 from './feedMain/FeedMain1';
import FeedMain2 from './feedMain/FeedMain2';
import FeedMain3 from './feedMain/FeedMain3';
import FeedMain4 from './feedMain/FeedMain4';
import FeedMain5 from './feedMain/FeedMain5';
import FeedMain6 from './feedMain/FeedMain6';
import FeedMain7 from './feedMain/FeedMain7';
import FeedMain8 from './feedMain/FeedMain8';
import FeedMain9 from './feedMain/FeedMain9';
import FeedMain10 from './feedMain/FeedMain10';
import FeedMain11 from './feedMain/FeedMain11';
import Writefeed from './components/Writefeed';

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
  useEffect(function(){
    if(window.localStorage.getItem('user_nick')!==null){
      setCheck(true)
    }
},[])

  
 
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
          <Route path='/chart' element={<ChartMain/>}/>
          <Route path='/new' element={<NewPageMain/>}/>
          <Route path='/listpage/viewpage/:num' element={<WriteView/>}/>
          <Route path='/writefeed' element={<Writefeed/>}/>
          <Route path='/my/myfeed1' element={<FeedMain1/>}/>
          <Route path='/my/myfeed2' element={<FeedMain2/>}/>
          <Route path='/my/myfeed3' element={<FeedMain3/>}/>
          <Route path='/my/myfeed4' element={<FeedMain4/>}/>
          <Route path='/my/myfeed5' element={<FeedMain5/>}/>
          <Route path='/my/myfeed6' element={<FeedMain6/>}/>
          <Route path='/my/myfeed7' element={<FeedMain7/>}/>
          <Route path='/my/myfeed8' element={<FeedMain8/>}/>
          <Route path='/my/myfeed9' element={<FeedMain9/>}/>
          <Route path='/my/myfeed10' element={<FeedMain10/>}/>
          <Route path='/my/myfeed10' element={<FeedMain11/>}/>
          </>
         
          
        ) : (
          <>
          <Route path="/" element={<SignInMain onValueChange={change}/>} />
          <Route path='/join' element={<JoinTest onValueChange={change}/>}/> 
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
