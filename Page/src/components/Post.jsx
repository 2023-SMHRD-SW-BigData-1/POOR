import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Post = ({profil1,postImg,profil2,}) => {
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
  const handleChange = (event) => {
    setNewComment(event.target.value);
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

 
  return (
    <div className="body1">
        <article>
          <div className="feedHeader">
            <a href="" className="">
            <img src={profil1} width="32px" height="32px" alt="" />
            <span>king_of_poor</span>
            </a>
          </div>
          <div className="feedImage">
            <img src={postImg} width="550px" height="580px" alt="" />
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
              <img src={profil2} width="32px" height="32px" alt="" />
              <span>saeyeon_20님, wonho_20님 외 4명이 좋아합니다.</span>
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
                <p>오늘도 절약 성공~🥳</p>
              </div>
              
            </div>
            <div className="friendsSentence">
              <span>South_gunOne</span>
              <p>보기좋게 성공~~~😎</p>
            </div>
            
            
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



    </div>
  )
}

export default Post