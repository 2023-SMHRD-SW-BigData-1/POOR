import React, { useState } from 'react';

const feedWrite = () => {
  const [postText, setPostText] = useState('');

  const handleInputChange = (e) => {
    setPostText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 글 쓰기 로직을 추가하세요 (API 호출 등)
    console.log('Post Text:', postText);
    setPostText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={postText}
          onChange={handleInputChange}
          placeholder="글을 입력하세요..."
        ></textarea>
        <button type="submit">게시</button>
      </form>
    </div>
  );
};

export default feedWrite;