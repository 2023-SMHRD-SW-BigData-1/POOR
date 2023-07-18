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
          <Route path='/myfeed/:num' element={<MyPostContentsMain/>}/>
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
