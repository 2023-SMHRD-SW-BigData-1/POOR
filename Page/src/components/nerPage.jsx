import React, { useEffect, useState } from "react";
import "../css/mainCss.css";
import img1 from "../img/캡처.PNG";
import postImg from "../img/지갑텅빈.png";
import profil1 from "../img/게시글프사.png";
import profil2 from "../img/부자.png";

import photo1 from "../img/게시글1.png";
import photo2 from "../img/게시글2.png";
import photo3 from "../img/게시글3.png";
import photo4 from "../img/게시글4.png";
import photo5 from "../img/게시글5.png";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import Post from "./Post";

const NewPage = () => {
  const nav = useNavigate();

  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [feedImgUrl, setFeedImgUrl] = useState("");

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
      setIsLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setIsLiked(true);

      axios
        .post("http://localhost:8888/new", {})
        .then((response) => {
          console.log(response.data.message); // 삽입 결과 또는 처리된 데이터 확인

          alert("좋아요 등록에 성공하였습니다.");
          nav("/new");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && inputValue !== "") {
      searchTags(inputValue);
      setInputValue("");
    }
  };

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const chatSubmit = (event) => {
    event.preventDefault();

    // 서버로 전송할 데이터 객체 생성
    console.log("new page chat submit1");
    const data = {
      chat: newComment,
    };
    console.log("new page chat submit2");
    console.log(data.chat);

    axios
      .post("http://localhost:8888/new/new", data)
      .then((response) => {
        console.log(response.data);
        console.log("post axios data", response.data);
        getData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getData = async () => {
    await axios
      .get("http://localhost:8888/new/")
      .then((res) => {
        // console.log(res)
        console.log("get axios data", res.data);
        console.log(res.data);
        setComments(res.data);
        console.log(res.data[0]);
        console.log(res.data[0].CHAT);

        // window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const selectData = async () => {
    await axios
      .post("http://localhost:8888/writefeed/getFeedData")
      .then((res) => {
        console.log(res);

        setFeedImgUrl("data:image/png;base64," + res.data);

        // window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log("getChat");
    getData();
    selectData();
  }, []);

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
    <div className="myPageContainer">
      <div className="myPageBody">
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
        {/* /* 1번째 게시 */}
        <button
          onClick={() => {
            nav("/writefeed");
          }}
        >
          피드 작성
        </button>
        <div className="body1">
          <article className="newArticle">
            <div className="feedHeader"></div>
            <div className="feedImage">
              <img src={feedImgUrl} width="550px" height="580px" alt="" />
            </div>
            <div className="feedReactionButton"></div>
            <div className="feedReaction">
              <div className="ReactionImage">
                <div className="sns-like-button">
                  <button
                    className={`like-button ${isLiked ? "liked" : ""}`}
                    onClick={handleLike}
                  >
                    {isLiked ? "💰" : "💸"}
                  </button>
                  <span className="like-count">{likeCount}</span>
                </div>
              </div>

              <div className="commentMain">
                <div className="commentContainer">
                  <ul>
                    {comments.map((item) => (
                      <li>{item.CHAT}</li>
                    ))}
                  </ul>
                </div>
                <div className="commentContents">
                  <form>
                    <input
                      className="feedComment"
                      type="text"
                      value={newComment}
                      onChange={handleChange}
                      placeholder="댓글 입력"
                    />
                    <button onClick={(e) => chatSubmit(e)} type="submit">
                      작성
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </article>

          <Post profil1={profil1} postImg={photo1} profil2={profil2} />
          <Post profil1={profil1} postImg={photo2} profil2={profil2} />
          <Post profil1={profil1} postImg={photo3} profil2={profil2} />
          <Post profil1={profil1} postImg={photo4} profil2={profil2} />
          <Post profil1={profil1} postImg={photo5} profil2={profil2} />
        </div>
      </div>
    </div>
  );
};

export default NewPage;