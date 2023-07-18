import React, { useEffect, useState } from 'react';
import '../css/mainCss.css'
import myPageMain from './myPageboard'
import img1 from '../img/캡처.PNG'
import postImg from '../img/지갑텅빈.png'
import profil1 from '../img/게시글프사.png'
import profil2 from  '../img/부자.png'
import profil3 from '../img/소비요정.png'
import profil4 from '../img/자린고비.png'
import profil5 from '../img/집게사장.png'
import profil6 from '../img/킹푸어.png'
import profil7 from '../img/테잌마이머니.png'
import img2 from '../img/다운로드.png'
import mainPageImg1 from '../img/눈물줄넘기_300x300.jpg'
import mainPageImg2 from '../img/돈모욕_300x300.jpg'
import mainPageImg3 from '../img/소리없이움_300x300.jpg'
import mainPageImg4 from '../img/우는개구리_300x300.jpg'
import mainPageImg5 from '../img/라스_300x300.jpg'
import mainPageImg6 from '../img/박명수고난_300x300.jpg'
import mainPageImg7 from '../img/박명수과소비_300x300.jpg'
import mainPageImg8 from '../img/자린고비1_300x300.jpg'
import mainPageImg9 from '../img/자린고비2_300x300.jpg'
import mainPageImg10 from '../img/정형돈_300x300.jpg'
import mainPageImg11 from '../img/폰반찬_300x300.jpg'
import mainPageImg12 from '../img/하하우는_300x300.jpg'
import mpcat from '../img/마페고양이프사.png'



import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const myPageboard = () => {
  const nav = useNavigate()


  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
      setIsLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setIsLiked(true);

      axios.post('http://localhost:8888/new', {

      })
        .then(response => {
          console.log(response.data.message); // 삽입 결과 또는 처리된 데이터 확인
          
          alert('좋아요 등록에 성공하였습니다.')
          nav('/new')
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue !== '') {
      searchTags(inputValue);
      setInputValue('');
    }
  };

  

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const handleSubmit2 = async (event) => {
    event.preventDefault();
    if (newComment !== '') {
      try {
        const response = await fetch('/comment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ comment: newComment }),
        })
        .then(()=>{console.log('then')})
        .catch(err => console.error(err));
  
        if (response.ok) {
          // 댓글 저장이 성공한 경우
          console.log('Comment saved successfully');
          setComments([...comments, newComment]);
          setNewComment('');
        } else {
          console.error('Comment save failed');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };


  const handleChange = (event) => {
    setNewComment(event.target.value);
  };


  const searchTags = (tag) => {
    // 검색 로직을 수행하고 결과를 설정합니다.
    // 예를 들어, API 요청을 보내거나 로컬 데이터에서 필터링을 수행할 수 있습니다.
    const results = []; // 검색 결과를 담을 배열
    // 검색 로직 수행
    // ...

    setSearchResults(results);
  };



  return (
    <div className='myPageContainer'>
    <div className='myPageBody'>
      <header className="headerContainer"></header>
        <div className="headerContents">
          <div className="mainTag">
            <a className="mainA" href="">
              <img className="mainImg" src={img1} alt="" />
              거지의꿈
            </a>
          </div>
          </div>
          
        </div>
      
 {/* /* 1번째 게시 */ }
      <div className="body1">
        <article>
          <div className="feedHeader">
            <a href="" className="">
            <img src={mpcat} width="32px" height="32px" alt="" />
            <span>king_of_poor</span>
            </a>
          </div>
          <div className="feedImage">
            <img src={mainPageImg11} width="550px" height="580px" alt="" />
          </div>
          <div className="feedReactionButton">
            <div className="reactionButton1">
              <button><i className="far fa-heart"></i></button>
              <button><i className="far fa-comment"></i></button>
              <button><i className="fas fa-share-square"></i></button>
            </div>
            <div className="reactionButton2">
              <button><i className="far fa-bookmark"></i></button>
            </div>
          </div>
          <div className="feedReaction">
            <div className="ReactionImage">
                <a href="">
              <img src={mpcat} width="32px" height="32px" alt="" />
              <span></span>
              </a>
              <div className="sns-like-button">
                <button className={`like-button ${isLiked ? 'liked' : ''}`} onClick={handleLike}>
                {isLiked ? '💰' : '💸'}
                </button>
                <span className="like-count">{likeCount}</span>
              </div>
            </div>
            <div className="reactionSentence">
              <div className="surfSentence">
                <span>king_of_poor</span>
                <p>내 잔고에 고기반찬은 사치 그 잡채</p>
              </div>
              <div className="moreView">
                
              </div>
            </div>
            <div className="friendsSentence">
              
            </div>
            <div className="time">
              
            </div>
            {/* <div className="feedCommentContainer">
              <input className="feedComment" type="text" placeholder="댓글 달기..." />
              <a href="">
              <button className='feedCommentBtn'>게시</button>
              </a>
            </div> */}
            <div className='commentMain'>
              <div className='commentContainer'>
                <ul>
                  {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                  ))}
                </ul>
              </div>
              <div className='commentContents'>
                <form onSubmit={handleSubmit}>
                  <input className="feedComment"
                    type="text"
                    value={newComment}
                    onChange={handleChange}
                    placeholder="댓글 입력"
                  />
                  <button type="submit">작성</button>
                </form>
              </div>
            </div>
          </div>
        </article>
        </div>
        
        </div>
)}

export default myPageMain