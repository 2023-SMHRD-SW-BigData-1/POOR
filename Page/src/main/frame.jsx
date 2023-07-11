import React from 'react'
import MainPageLeft from './mainPageLeft'
import DiscountPage from '../components/discountPageJsx'
import ListPage from '../components/listPageJsx'
import './frameCss.css'
import MainPageRight from './mainPageRight'
import Mypage from './myPage'
// import DiscountPage2 from './discountPage'

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
              <ListPage></ListPage>
              {/* <Mypage></Mypage> */}
              {/* <DiscountPage2></DiscountPage2> */}
          </div>
          <div className='childRight'>
              <MainPageRight></MainPageRight>
          </div>
      </div>
    </div>
  )
}

export default frame