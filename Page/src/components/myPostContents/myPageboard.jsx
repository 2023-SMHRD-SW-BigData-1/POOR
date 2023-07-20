import React, { useEffect, useState } from 'react';
import '../../css/mainCss.css'
import img1 from '../../img/캡처.PNG'
import mainPageImg1 from '../../img/눈물줄넘기_300x300.jpg'
import mpcat from '../../img/마페고양이프사.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const MyPageboard = () => {
  const nav = useNavigate()

  const [userId, setUserId] = useState('');

  const userID = window.localStorage.getItem("user_ID")


  useEffect(() => {
    // 서버로부터 사용자 ID 가져오기
    axios.get('/user')
      .then(response => {
        setUserId(response.data.userId);
      })
      .catch(error => {
        console.error('Failed to fetch user ID:', error);
      });
  }, []);


  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
      setIsLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setIsLiked(true);

      axios.post('http://localhost:8888/my/myfeed1', {

      })
        .then(response => {
          console.log(response.data.message); // 삽입 결과 또는 처리된 데이터 확인
          
          alert('좋아요 등록에 성공하였습니다.')
          nav('/my/myfeed1')
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
      <div className="feedBody">
        <article>
          <div className="feedHeader">
            <a href="" className="">
            <img src={mpcat} width="32px" height="32px" alt="" />
            <span>{userID}</span>
            </a>
          </div>
          <div className="feedImage">
            <img src={mainPageImg1} width="550px" height="580px" alt="" />
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
              <span>im_notPoor</span>
              </a>
              <div className="feed-like-button">
                <button className={`like-button ${isLiked ? 'liked' : ''}`} onClick={handleLike}>
                {isLiked ? '💰' : '💸'}
                </button>
                <span className="like-count">{likeCount}</span>
              </div>
            </div>
            <div className="reactionSentence">
              <div className="surfSentence">
                <span>king_of_poor</span>
                <p>눈물 모아 줄넘기 가능😢</p>
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

export default MyPageboard