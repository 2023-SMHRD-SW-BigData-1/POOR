import React from 'react'
import mainImg from '../img/캡처.PNG'
import disImg0 from '../img/airbnb.jpg'
import disImg1 from '../img/도서_800x800.jpg'
import disImg2 from '../img/마켓컬리_800x800.jpg'
import disImg3 from '../img/시코르_800x800.jpg'
import disImg4 from '../img/쓱 할인_800x800.jpg'
import disImg5 from '../img/오늘의집_800x800.jpg'
import disImg6 from '../img/올리브영_800x800.jpg'
import disImg7 from '../img/요기요_800x800.jpg'
import '../css/templatemo-style.css'
import { useNavigate } from 'react-router-dom'
// import '../css/mainCss.css'
// import Slider from "react-slick";


const DiscountPage2 = () => {
    const nav = useNavigate()
    const handleClick=(url)=>{
        window.open(url,'_blank')
    }
    
  return (
    <div className='myPageContainer'>
    <div className='myPageBody'>
      <header className="headerContainer">
        <div className="headerContents">
          <div className="mainTag">
            <div className="mainA" href=" ">
              <img className="mainImg" src={mainImg} alt="" />
              거지의꿈
            </div>
          </div>
          
        </div>
      </header>

      

      <div className="disContents">
        <div className="disObject">
          <figure className="effect-ming tm-video-item">
            <img src={disImg0} alt="Image" className="img-fluid" />
            <figcaption className="d-flex">
              <h2 className='disText'>할인받기</h2>
              <a onClick={()=>{handleClick('https://www.airbnb.co.kr/')}} className='disATag'>View more</a>
            </figcaption>
          </figure>
          
        </div>
        
        <div class="disObject">
                <figure class="effect-ming tm-video-item">
                    <img src={disImg1} alt="Image" class="img-fluid"/>
                    <figcaption className="d-flex">
                        <h2 className='disText'>할인받기</h2>
                        <a onClick={()=>{handleClick('https://www.elabormall.co.kr/index.asp')}} className='disATag'>View more</a>
                    </figcaption>                    
                </figure>
                
            </div>
            <div class="disObject">
                <figure class="effect-ming tm-video-item">
                    <img src={disImg2} alt="Image" class="img-fluid"/>
                    <figcaption className="d-flex">
                        <h2 className='disText'>할인받기</h2>
                        <a onClick={()=>{handleClick('https://www.kurly.com/market-benefit')}} className='disATag'>View more</a>
                    </figcaption>                    
                </figure>
                
            </div>
            <div class="disObject">
                <figure class="effect-ming tm-video-item">
                    <img src={disImg3} alt="Image" class="img-fluid"/>
                    <figcaption className="d-flex">
                        <h2 className='disText'>할인받기</h2>
                        <a onClick={()=>{handleClick('https://chicor.com/main')}} className='disATag'>View more</a>
                    </figcaption>                    
                </figure>
                
            </div>
            <div class="disObject">
                <figure class="effect-ming tm-video-item">
                    <img src={disImg4} alt="Image" class="img-fluid"/>
                    <figcaption className="d-flex">
                        <h2 className='disText'>할인받기</h2>
                        <a onClick={()=>{handleClick('https://www.ssg.com/service/specialMain.ssg')}} className='disATag'>View more</a>
                    </figcaption>                    
                </figure>
                
            </div>
            <div class="disObject">
                <figure class="effect-ming tm-video-item">
                    <img src={disImg5} alt="Image" class="img-fluid"/>
                    <figcaption className="d-flex">
                        <h2 className='disText'>할인받기</h2>
                        <a onClick={()=>{handleClick('https://store.ohou.se/today_deals?affect_type=Home&affect_id=0')}} className='disATag'>View more</a>
                    </figcaption>                    
                </figure>
                
            </div>
            <div class="disObject">
                <figure class="effect-ming tm-video-item">
                    <img src={disImg6} alt="Image" class="img-fluid"/>
                    <figcaption className="d-flex">
                        <h2 className='disText'>할인받기</h2>
                        <a onClick={()=>{handleClick('https://www.oliveyoung.co.kr/store/main/getHotdealList.do')}} className='disATag'>View more</a>
                    </figcaption>                    
                </figure>
                
            </div>
            <div class="disObject">
                <figure class="effect-ming tm-video-item">
                    <img src={disImg7} alt="Image" class="img-fluid"/>
                    <figcaption className="d-flex">
                        <h2 className='disText'>할인받기</h2>
                        <a href="" className='disATag'>View more</a>
                    </figcaption>                    
                </figure>
                
            </div>  
      </div>
      </div>
    </div>
  )
}

export default DiscountPage2