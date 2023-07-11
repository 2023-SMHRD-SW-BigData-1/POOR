import React from 'react'
import './App.css'
// import MyPage from './main/myPageMain'
import ListMain from './main/listMain';
import DiscountMain from './main/discountMain';
import WriteView from './main/writeViewMain';
import WritePageMain from './main/writePageMain';
import Frame from './main/frame';
import MainPageLeft from './main/mainPageLeft';
import SignInMain from './main/signInMain';
import NewPageMain from './main/newPageMain';
import SetUpMain from './main/setUpMain';

function App() {
  return (
    <div className="mainApp">
      {/* <MyPage></MyPage> */}
      {/* <ListMain></ListMain> */}
      {/* <DiscountMain></DiscountMain> */}
      {/* <WriteView></WriteView> */}
      {/* <WritePageMain></WritePageMain> */}
      {/* <Frame></Frame> */}
      {/* <MainPageLeft></MainPageLeft> */}
      <SignInMain></SignInMain>
      {/* <DiscountPage2></DiscountPage2> */}
      {/* <NewPageMain></NewPageMain> */}
      {/* <SetUpMain></SetUpMain> */}
    </div>
  );
}

export default App;
