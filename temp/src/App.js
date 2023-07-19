import React from 'react'
import './App.css'
import MyPage from './main/myPage'
import ListMain from './main/listMain';
import DiscountMain from './main/discountMain';
import WriteView from './main/writeViewMain';
import WritePageMain from './main/writePageMain';
import MainPageLeft from './main/mainPageLeft';
import MainPageRight from './main/mainPageRight';
import SignInMain from './main/signInMain';
import NewPageMain from './main/newPageMain';
// import SetUpMain from './main/setUpMain';
import { Route, Routes } from 'react-router-dom';

function App() {
  const appStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  };

  return (
    <div className="mainApp" style={appStyle}>
      {/* <Frame></Frame> */}
      <MainPageLeft/>

      <Routes>
        <Route path='/listpage' element={<ListMain/>}/>
        <Route path='/main' element={<NewPageMain/>}/>
        <Route path='/discount' element={<DiscountMain/>}/>
        <Route path='/write' element={<WritePageMain/>}/>
        <Route path='/my' element={<MyPage/>}/>
        <Route path='/' element={<SignInMain/>}/>
        

      </Routes>
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
    </div>
  );
}

export default App;
