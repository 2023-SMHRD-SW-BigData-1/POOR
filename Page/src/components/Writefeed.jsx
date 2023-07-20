import axios from "axios";
import React, { useRef, useState } from "react";
import "../css/feedCss.css";
import MainImg from "../img/캡처.PNG";
import { useNavigate } from "react-router-dom";

const Writefeed = () => {
  const nav = useNavigate();

  const id = useRef();

  const [selectedImage, setSelectedImage] = useState(null);
  const [text, setText] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [previewImage, setPreviewImage] = useState('');

  const handleImageChange = (event) => {
    //event --> 이벤트 객체(이벤트에 대한 전반적인 정보를 가지고 있음)
    console.log("handleImageChange");
    console.log(event.target.files);
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    setSelectedImage(file);
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      setPreviewImage('');
    }
  };

  const handleChange = (event) => {
    console.log("handleChange");
    console.log(event.target.value);
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    const data = new FormData();
    data.append("image", selectedImage);
    data.append("content", text);
    data.append("id", window.localStorage.getItem("user_ID"));

    console.log(data);

    axios
      .post("http://localhost:8888/writefeed", data)
      .then((response) => {
        console.log(response.data.message);
        setResponseData(response.data);
        console.log('feed upload');

        alert("피드 등록에 성공하였습니다.");
        nav("/new");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="myPageContainer">
      <div className="myPageBody">
        <header className="headerContainer">
          <div className="headerContents">
            <div className="mainTag">
            <div className="mainA" href=" ">
              <img className="mainImg" src={MainImg} alt="" />
              거지의꿈
            </div>
            </div>
          </div>
        </header>
        <div className="body1">
        <article className='newArticle'>
        <form className="feedStart" encType="multipart/form-data">
          <div className="feedEtc">
            <input
              type="file"
              required
              multiple
              onChange={handleImageChange}
              accept="image/*"
            />

            <div className="feedImage">
              <img src={previewImage} width="550px" height="580px" alt="" />
            </div>

            <br />
          <textarea
            placeholder="내용 입력"
            value={text}
            onChange={(e) => {
              handleChange(e);
            }}
            ref={id}
          ></textarea>
          <button
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            FEED_UPLOAD
          </button>
          </div>
        </form>
        </article>
        </div>
        {responseData && (
          <div>
            <h3>데이터 전송 결과</h3>
            <p>{responseData.message}</p>
            <p>User ID: {responseData.user_ID}</p>
            <p>User Nick: {responseData.user_Nick}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Writefeed;
