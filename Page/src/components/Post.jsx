import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Post = ({profil1,postImg,profil2,}) => {
    const nav = useNavigate()
    const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const userNick = window.localStorage.getItem("user_Nick")


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
        <article className='newArticle'>
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
            
            
            
            <div className='commentMain'>
              <div className='commentContainer'>
                <ul>
                  {comments.map(item => (
                    <li>{`${userNick}   : ${item.CHAT}`}</li>
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