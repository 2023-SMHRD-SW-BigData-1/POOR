import React, { useEffect, useState } from 'react';
import '../css/mainCss.css'
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

import photo1 from '../img/게시글1.png'
import photo2 from '../img/게시글2.png'
import photo3 from '../img/게시글3.png'
import photo4 from '../img/게시글4.png'
import photo5 from '../img/게시글5.png'
import mphoto1 from '../img/게시글프사1.png'
import mphoto2 from '../img/게시글프사2.png'
import mphoto3 from '../img/게시글프사3.png'
import mphoto4 from '../img/게시글프사4.png'
import mphoto5 from '../img/게시글프사5.png'
import comment1 from '../img/댓글프사1.png'
import comment2 from '../img/댓글프사2.png'
import comment3 from '../img/댓글프사3.png'
import comment4 from '../img/댓글프사4.png'
import comment5 from '../img/댓글프사5.png'

import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Post from './Post';



const NewPage = () => {
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

  const chatSubmit = (event) => {
    event.preventDefault();

    // 서버로 전송할 데이터 객체 생성
    console.log('new page chat submit1');
    const data = {
      chat: newComment,
    };
    console.log('new page chat submit2');
    console.log(data.chat);

    axios.post('http://localhost:8888/new/new', data)
      .then(response => {
        console.log(response.data);
        console.log('post axios data', response.data)
        getData()
        
      })
      .catch(error => {
        console.error(error);
      });
  };

  const getData = ()=>{
    axios.get('http://localhost:8888/new/')
    .then(res => {
      // console.log(res)
      console.log('get axios data', res.data)
      console.log(res.data);
      setComments(res.data)
      console.log(res.data[0]);
      console.log(res.data[0].CHAT);

      // window.location.reload();
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    console.log('getChat')
    getData()
  }, [])

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (newComment !== '') {
  //     setComments([...comments, newComment]);
  //     setNewComment('');
  //   }
  // };

  // const handleSubmit2 = async (event) => {
  //   event.preventDefault();
  //   if (newComment !== '') {
  //     try {
  //       const response = await fetch('/comment', {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ comment: newComment }),
  //       })
  //       .then(()=>{console.log('then')})
  //       .catch(err => console.error(err));
  
  //       if (response.ok) {
  //         // 댓글 저장이 성공한 경우
  //         console.log('Comment saved successfully');
  //         setComments([...comments, newComment]);
  //         setNewComment('');
  //       } else {
  //         console.error('Comment save failed');
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };


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
      <header className="headerContainer">
        <div className="headerContents">
          <div className="mainTag">
            <a className="mainA" href="">
              <img className="mainImg" src={img1} alt="" />
              거지의꿈
            </a>
          </div>
          
        </div>
      </header>
 {/* /* 1번째 게시 */ }
    <button onClick={()=>{nav('/writefeed')}}>피드 작성</button>
      <div className="body1">
        <article className='newArticle'>
          <div className="feedHeader">
           
          </div>
          <div className="feedImage">
            <img src={postImg} width="550px" height="580px" alt="" />
          </div>
          <div className="feedReactionButton">
            
            
          </div>
          <div className="feedReaction">
            <div className="ReactionImage">
               
              <div className="sns-like-button">
                <button className={`like-button ${isLiked ? 'liked' : ''}`} onClick={handleLike}>
                {isLiked ? '💰' : '💸'}
                </button>
                <span className="like-count">{likeCount}</span>
              </div>
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
                  {comments.map(item => (
                    <li>{item.CHAT}</li>
                  ))}
                </ul>
              </div>
              <div className='commentContents'>
                <form>
                  <input className="feedComment"
                    type="text"
                    value={newComment}
                    onChange={handleChange}
                    placeholder="댓글 입력"
                  />
                  <button onClick={(e)=>chatSubmit(e)} type="submit">작성</button>

                </form>
              </div>
            </div>
          </div>
        </article>

        <Post profil1={profil1} postImg={photo1} profil2={profil2}/>
        <Post profil1={profil1} postImg={photo2} profil2={profil2}/>
        <Post profil1={profil1} postImg={photo3} profil2={profil2}/>
        <Post profil1={profil1} postImg={photo4} profil2={profil2}/>
        <Post profil1={profil1} postImg={photo5} profil2={profil2}/>


        {/* <aside>
          <div className="asideHead">
            <img src={profil3} width="56px" height="56px" alt="" />
            <div className="asideHeadText">
              <p>poorsdream</p>
              <p>poorsdream | </p>
            </div>
          </div>
          <div className="asideBody">
            <div className="asideBodyStory">
              <span>동료 절약맨</span>
              <a href="">
              <p>모두 보기</p>
              </a>
            </div>
            <div className="asideBodyImgId">
              <div className="asidehi">
                <img src={profil4} width="32px" height="32px" alt="" />
                <div className="asidehi2">
                  <span>Nameofking_poor</span>
                  <p>16분전</p>
                </div>
              </div>
              <div className="asidehi">
                <img src={profil5} width="32px" height="32px" alt="" />
                <div className="asidehi2">
                  <span>JarinGoB</span>
                  <p>45분전</p>
                </div>
              </div>
              <div className="asidehi">
                <img src={profil6} width="32px" height="32px" alt="" />
                <div className="asidehi2">
                  <span>wannnaBeRich</span>
                  <p>1시간 전</p>
                </div>
              </div>
              <div className="asidehi">
                <img src={profil7} width="32px" height="32px" alt="" />
                <div className="asidehi2">
                  <span>sobi_fairy2</span>
                  <p>3시간 전</p>
                </div>
              </div>
            </div>
          </div>
          <div className="asideTails">
            <div className="asideTailsRecommend">
              <span>회원님을 위한 추천</span>
              <a href="">
              <p>모두 보기</p>
              </a>
            </div>
                <div className="asideTailsRecommend1">
                <img src={img2} width="32px" height="32px" alt="" />
                    <div className="asideTailsRecommend2">
                    <span>스마트인재개발원</span>
                    <p>박희주, 정윤지 외 2명이 팔로우 하고있습니다.</p>
                    </div>
                </div>
                <div className="asideTailsRecommend1">
                    <img src={img1} width="32px" height="32px" />
                    <div className="asideTailsRecommend2">
                    <span>Take_MymoneY</span>
                    <p>남건일 님이 언팔로우 하고있습니다.</p>
                    </div>
                </div>
                <div className="asideTailsRecommend1">
                    <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMDFfNDEg%2FMDAxNjcyNTU2NTUxMDQ2.Pil4Yu28QCI-v5Fw_EvuV0Jz5OKa7YJpmPOYGg47rv4g.9lslJpNKEUuR6_pTw9SG9A-mlhkgsEIKos1DAYu0toog.JPEG.szoxszo%2FIMG_9176.JPG&type=sc960_832" width="32px" height="32px" />
                    <div className="asideTailsRecommend2">
                    <span>I LOVE MONEY</span>
                    <p>양동하 님이 팔로우 하고있습니다.</p>
                    </div>
                </div>
            </div>
        </aside> */}
        </div>
        </div>
    </div>
  )
}

export default NewPage