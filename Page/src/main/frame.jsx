import React from 'react'
import MainPageLeft from './mainPageLeft'
import DiscountPage from '../components/discountPageJsx'
import ListPage from '../components/listPageJsx'
import './frameCss.css'
import MainPageRight from './mainPageRight'
import Mypage from './myPage'
import NewPageMain from './newPageMain'
import SetUpMain from './setUpMain'
import DiscountPage2 from '../components/discountPage2'
import MyPageMain from '../components/myPageMain'
import MyPageScrap from '../components/myPageScrap'
import MyPageDC from '../components/myPageDC'

const frame = () => {
  return (
    // <div className="frame">
    //   <iframe src="./components/mainPageLeft.jsx" scrolling="no" title="Main Left"></iframe>
    //   <iframe src="./components/discountPage.jsx" scrolling="no" title="discountPage"></iframe>
    //   <iframe src="./components/mainPageRight.jsx" scrolling="no" title="Main Right"></iframe>
    // </div>
    <div className='frameContainer'>
      <div className='parents'>
          <div className='childLeft'>
              <MainPageLeft></MainPageLeft>
          </div>
          <div className='childCenter'>
              {/* <DiscountPage></DiscountPage> */}
              {/* <ListPage></ListPage> */}
              {/* <Mypage></Mypage> */}
              {/* <DiscountPage2></DiscountPage2> */}
              <NewPageMain></NewPageMain>
              {/* <SetUpMain></SetUpMain> */}
              {/* <MyPageMain></MyPageMain> */}
              {/* <MyPageScrap></MyPageScrap> */}
              {/* <MyPageDC></MyPageDC> */}
          </div>
          <div className='childRight'>
              <MainPageRight></MainPageRight>
          </div>
      </div>
    </div>
  )
}

export default frame