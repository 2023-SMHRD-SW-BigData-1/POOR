import React, { useState } from 'react';
import './App.css'
import ListMain from './main/listMain';
import DiscountMain from './main/discountMain';
import WriteView from './main/writeViewMain';
import WritePageMain from './main/writePageMain';
import MainPageLeft from './main/mainPageLeft';
import MainPageRight from './main/mainPageRight';
import SignInMain from './main/signInMain';
import NewPageMain from './main/newPageMain';
import MyPageMain from './main/myPageMainMain'
// import SetUpMain from './main/setUpMain';
import { Route, Routes } from 'react-router-dom';
import './frame.css'

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);


  return (
    <div className="mainApp">
      {/* <Frame></Frame> */}
      {isSignedIn ? true : <MainPageLeft className="appLeftStyle"/>}

      <Routes className="appCenterStyle">
        {isSignedIn ? (
          <Route path="/" element={<SignInMain />} />
        ) : (
          <>
            <Route path="/listpage" element={<ListMain />} />
            <Route path="/main" element={<NewPageMain />} />
            <Route path="/discount" element={<DiscountMain />} />
            <Route path="/write" element={<WritePageMain />} />
            <Route path="/my" element={<MyPageMain />} />
            <Route path="/new" element={<NewPageMain />} />
          </>
        )}
      </Routes>
      
      {isSignedIn ? true : <MainPageRight className="appRightStyle"/>}
    </div>
  );
}

export default App;
