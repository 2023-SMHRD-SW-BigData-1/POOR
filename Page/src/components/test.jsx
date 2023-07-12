// import React, { useState } from 'react';
// import '../css/test.css';

// const Test = () => {
//   const [likeCount, setLikeCount] = useState(0);
//   const [isLiked, setIsLiked] = useState(false);

//   const handleLike = () => {
//     if (isLiked) {
//       setLikeCount(likeCount - 1);
//       setIsLiked(false);
//     } else {
//       setLikeCount(likeCount + 1);
//       setIsLiked(true);
//     }
//   };

//   return (
//     <div className="sns-like-button">
//       <button className={`like-button ${isLiked ? 'liked' : ''}`} onClick={handleLike}>
//         {isLiked ? 'Liked' : 'Like'}
//       </button>
//       <span className="like-count">{likeCount}</span>
//     </div>
//   );
// };

// export default Test;


// import React, { useState } from 'react';
// import '../css/test.css';

// const SNSHashtagInput = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [hashtags, setHashtags] = useState([]);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleInputKeyDown = (e) => {
//     if (e.key === 'Enter' && inputValue !== '') {
//       setHashtags([...hashtags, inputValue]);
//       setInputValue('');
//     }
//   };

//   return (
//     <div className="sns-hashtag-input">
//       <input
//         type="text"
//         placeholder="Type a hashtag and press Enter"
//         value={inputValue}
//         onChange={handleInputChange}
//         onKeyDown={handleInputKeyDown}
//       />
//       <div className="hashtag-list">
//         {hashtags.map((tag, index) => (
//           <span key={index} className="hashtag-item">
//             #{tag}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SNSHashtagInput;

import React, { useState } from 'react';
import '../css/test.css';

const SNSSearch = () => {
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

  const searchTags = (tag) => {
    // 검색 로직을 수행하고 결과를 설정합니다.
    // 예를 들어, API 요청을 보내거나 로컬 데이터에서 필터링을 수행할 수 있습니다.
    const results = []; // 검색 결과를 담을 배열
    // 검색 로직 수행
    // ...

    setSearchResults(results);
  };

  return (
    <div className="sns-search">
      <input
        type="text"
        placeholder="Search by hashtag"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
      <div className="search-results">
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <span key={index} className="search-result">
              {result}
            </span>
          ))
        ) : (
          <span className="no-results">No results found</span>
        )}
      </div>
    </div>
  );
};

export default SNSSearch;