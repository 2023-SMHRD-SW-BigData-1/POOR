// import React from 'react'
// import './App.css'
// import ListMain from './main/listMain';
// import DiscountMain from './main/discountMain';
// import WriteView from './main/writeViewMain';
// import WritePageMain from './main/writePageMain';
// import Frame from './main/frame';
// import MainPageLeft from './main/mainPageLeft';
// import SignInMain from './main/signInMain';
// import NewPageMain from './main/newPageMain';
// import SetUpMain from './main/setUpMain';
// import MyPageMainMain from './main/myPageMainMain';
// import MyPageScrapMain from './main/mainPageScrapMain';
// import MyPageDCMain from './main/myPageDCMain';
// import MainPageMain from './main/mainPageMain';
import React from 'react'
import './App.css'
import MyPageMainMain from './main/myPageMainMain';
import ListMain from './main/listMain';
import DiscountMain from './main/discountMain';
import WriteView from './main/writeViewMain';
import WritePageMain from './main/writePageMain';
import MainPageLeft from './main/mainPageLeft';
import MainPageRight from './main/mainPageRight';
import SignInMain from './main/signInMain';
import NewPageMain from './main/newPageMain';
// import SetUpMain from './main/setUpMain';
import MainPageMain from './main/mainPageMain';
import { Route, Routes } from 'react-router-dom';
import './frame.css'

function App() {
  

  return (
    <div className="appStyle">
      <div className="appLeftStyle">
        {/* <Frame></Frame> */}
        <MainPageLeft/>
      </div>

      <div className="appCenterStyle">
        <Routes>
          <Route path='/listpage' element={<ListMain/>}/>
          <Route path='/main' element={<NewPageMain/>}/>
          <Route path='/discountinfo' element={<DiscountMain/>}/>
          <Route path='/write' element={<WritePageMain/>}/>
          <Route path='/my' element={<MyPageMainMain/>}/>
          <Route path='/' element={<SignInMain/>}/>
          <Route path='/new' element={<NewPageMain/>}/>
          <Route path='/home' element={<MainPageMain/>}/>
          </Routes>
      </div>

        <div className="appRightStyle">
          {/* <Routes> */}
          {/* <MyPage></MyPage> */}
          {/* <ListMain></ListMain> */}
          {/* <DiscountMain></DiscountMain> */}
          {/* <WriteView></WriteView> */}
          {/* <WritePageMain></WritePageMain> */}
          {/* <MainPageLeft></MainPageLeft> */}
          {/* <SignInMain></SignInMain> */}
          {/* <DiscountPage2></DiscountPage2> */}
          {/* <NewPageMain></NewPageMain> */}
          {/* <SetUpMain></SetUpMain> */}
          <MainPageRight/>
          {/* </Routes> */}
        </div>
    </div>
  );
}

export default App;
