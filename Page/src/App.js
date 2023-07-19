import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import ListMain from './main/ListMain';
import DiscountMain from './main/discountMain';
import WriteView from './main/writeViewMain';
import WritePageMain from './main/writePageMain';
import MainPageLeft from './main/mainPageLeft';
import MainPageRight from './main/mainPageRight';
import SignInMain from  './components/loginTest';
import NewPageMain from './main/newPageMain';
import MainPageMain from './main/mainPageMain';
import MyPageMainMain from './main/myPageMainMain'
import MyPageDC from './components/myPageDC';
import MyPageScrap from './components/myPageScrap';
import JoinMain from './components/joinTest';
import MyPostContentsMain from './main/myPostContentsMain';
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

// import SetUpMain from './main/setUpMain';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ChartMain from './main/ChartMain';

function App() {
  
  const nav = useNavigate()
  const [check ,setCheck] = useState(false)
  const [data, setData] = useState('')

  const change = (value)=>{
    console.log('app1.js');
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


  useEffect(()=>{
    console.log("app2.js")
    console.log(check)
  },[check])

  
 
  return (
    <div className="mainApp">
      {/* <Frame></Frame> */}
      {check ?  <MainPageLeft className="appLeftStyle"/>: true}

      <Routes className="appCenterStyle">
      {check ? (

          <>
          <Route path='/listpage' element={<ListMain />}/>
          <Route path='/main' element={<MainPageMain check={check}/>}/>
          <Route path='/discountinfo' element={<DiscountMain/>}/>
          <Route path='/write' element={<WritePageMain/>}/>
          <Route path='/my' element={<MyPageMainMain/>}/>
          <Route path='/my/myScrap' element={<MyPageScrap/>}></Route>
          <Route path='/my/myDC' element={<MyPageDC/>}></Route>

          {/* <Route path='/' element={<SignInMain/>}/> */}
          <Route path='/new' element={<NewPageMain/>}/>
          <Route path='/home' element={<MainPageMain/>}/>
          <Route path='/listpage/viewpage/:num' element={<WriteView/>}/>
          <Route path='/chart' element={<ChartMain/>}/>
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
          <Route path="/join" element={<JoinMain onValueChange={change}/>} />
          </>
        )}

      </Routes>
      {check ?<MainPageRight className="appRightStyle"/> : true}


      
      </div>
      
  );
}

export default App;
