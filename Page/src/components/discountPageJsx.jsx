import React from 'react'
import MainImg from '../img/캡처.PNG'
import './mainCss.css'
import './discountPage.css'

const discountPageJsx = () => {
  return (
    <>
      <header className="headerContainer">
        <div className="headerContents">
          <div className="mainTag">
            <a className="mainA" href=" ">
              <img className="mainImg" src={MainImg} alt="" />
              거지의꿈
            </a>
          </div>
          <div className="headerSearchBar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="검색" />
          </div>
        </div>
      </header>
      <br />
      <br />
      <h3>할인정보</h3>
      <br />
      <br />
      <hr />

      <div className='list-container'>
        <div id="slider01" className="board-container">
          <ul className="board-list">
            <li><a href="#none"><img src="http://lorempixel.com/600/350/city/1" alt="" /></a></li>
            <li><a href="#none"><img src="http://lorempixel.com/600/350/city/2" alt="" /></a></li>
            <li><a href="#none"><img src="http://lorempixel.com/600/350/city/3" alt="" /></a></li>
            <li><a href="#none"><img src="http://lorempixel.com/600/350/city/4" alt="" /></a></li>
            <li><a href="#none"><img src="http://lorempixel.com/600/350/city/5" alt="" /></a></li>
          </ul>
        </div>

        <div id="slider02" className="gallery-wrapper">
          <ul className="gallery-list">
            <li><a href="#none"><img src="http://lorempixel.com/600/350/city/1" alt="" /></a></li>
            <li><a href="#none"><img src="http://lorempixel.com/600/350/city/2" alt="" /></a></li>
            <li><a href="#none"><img src="http://lorempixel.com/600/350/city/3" alt="" /></a></li>
            <li><a href="#none"><img src="http://lorempixel.com/600/350/city/4" alt="" /></a></li>
            <li><a href="#none"><img src="http://lorempixel.com/600/350/city/5" alt="" /></a></li>
          </ul>
          <a className="btn-prev" href="#none">◀</a>
          <a className="btn-next" href="#none">▶</a>

          <div className="ctrl-box">
            <a href="#none" className="active"><i className="bullet">1</i></a>
            <a href="#none"><i className="bullet">2</i></a>
            <a href="#none"><i className="bullet">3</i></a>
            <a href="#none"><i className="bullet">4</i></a>
            <a href="#none"><i className="bullet">5</i></a>
            <button type="button" className="btn-ctrl auto">정지</button>
          </div>
        </div>

        <div id="slider03" className="gallery-wrapper">
          <ul className="gallery-list">
            <li><a href="#none"><img src="http://lorempixel.com/600/350/city/1" alt="" /></a></li>
            <li><a href="#none"><img src="http://lorempixel.com/600/350/city/2" alt="" /></a></li>
            <li><a href="#none"><img src="http://lorempixel.com/600/350/city/3" alt="" /></a></li>
            <li><a href="#none"><img src="http://lorempixel.com/600/350/city/4" alt="" /></a></li>
            <li><a href="#none"><img src="http://lorempixel.com/600/350/city/5" alt="" /></a></li>
          </ul>
          <a className="btn-prev" href="#none">◀</a>
          <a className="btn-next" href="#none">▶</a>

          <div className="ctrl-box">
            <a href="#none" className="active"><i className="bullet">1</i></a>
            <a href="#none"><i className="bullet">2</i></a>
            <a href="#none"><i className="bullet">3</i></a>
            <a href="#none"><i className="bullet">4</i></a>
            <a href="#none"><i className="bullet">5</i></a>
            <button type="button" className="btn-ctrl auto">정지</button>
          </div>
        </div>

        <div id="slider04" className="gallery-wrapper">
          <ul className="gallery-list">
            <li><a href="#none"><img src="http://lorempixel.com/600/350/city/1" alt="" /></a></li>
            <li><a href="#none"><img src="http://lorempixel.com/600/350/city/2" alt="" /></a></li>
            <li><a href="#none"><img src="http://lorempixel.com/600/350/city/3" alt="" /></a></li>
            <li><a href="#none"><img src="http://lorempixel.com/600/350/city/4" alt="" /></a></li>
            <li><a href="#none"><img src="http://lorempixel.com/600/350/city/5" alt="" /></a></li>
          </ul>
          <a className="btn-prev" href="#none">◀</a>
          <a className="btn-next" href="#none">▶</a>

          <div className="ctrl-box">
            <a href="#none" className="active"><i className="bullet">1</i></a>
            <a href="#none"><i className="bullet">2</i></a>
            <a href="#none"><i className="bullet">3</i></a>
            <a href="#none"><i className="bullet">4</i></a>
            <a href="#none"><i className="bullet">5</i></a>
            <button type="button" className="btn-ctrl auto">정지</button>
          </div>
        </div>
          <div id="slider02" className="gallery-wrapper">
            <ul className="gallery-list">
              <li><a href="#none"><img src="http://lorempixel.com/600/350/city/1" alt="" /></a></li>
              <li><a href="#none"><img src="http://lorempixel.com/600/350/city/2" alt="" /></a></li>
              <li><a href="#none"><img src="http://lorempixel.com/600/350/city/3" alt="" /></a></li>
              <li><a href="#none"><img src="http://lorempixel.com/600/350/city/4" alt="" /></a></li>
              <li><a href="#none"><img src="http://lorempixel.com/600/350/city/5" alt="" /></a></li>
            </ul>
            <a className="btn-prev" href="#none">◀</a>
            <a className="btn-next" href="#none">▶</a>

            <div className="ctrl-box">
              <a href="#none" className="active"><i className="bullet">1</i></a>
              <a href="#none"><i className="bullet">2</i></a>
              <a href="#none"><i className="bullet">3</i></a>
              <a href="#none"><i className="bullet">4</i></a>
              <a href="#none"><i className="bullet">5</i></a>
              <button type="button" className="btn-ctrl auto">정지</button>
            </div>
          </div>
      </div>
      </>
  )
}

export default discountPageJsx