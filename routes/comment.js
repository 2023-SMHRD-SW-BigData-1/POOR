const bodyParser = require('body-parser');
const express = require('express')
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
const path = require('path')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}));
const app = express()
oracledb.initOracleClient({libDir: 'C:/Users/smhrd/Desktop/project/oracle_client'})
let conn;
oracledb.getConnection({
    user : "campus_h_230627_1",
    password : "smhrd1",
    connectString : "project-db-stu2.smhrd.com:1524/"
},(err,con)=>{
    if(err){
        console.log('접속실패',err);
    }
    conn = con;
});
// CORS 설정
router.use(cors());

// 댓글 등록 엔드포인트
router.post('/comment', (req, res) => {
  const comment = req.body.comment; // 클라이언트로부터 받은 댓글 데이터
  console.log(comment);

  // Oracle DB에 댓글 데이터 저장
  oracledb.getConnection(dbConfig, (err, connection) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const query = 'INSERT INTO T_FEED (FEED_SEQ, FEED_CONTENT, FEED_IMG, FEED_VIEWS, USER_ID, FEED_HASHTAG, FEED_VIDEO, FEED_COMENT, FEED_LIKES, FEED_DATE) VALUES (FEED_SEQ.NEXTVAL, :CONTENT, FEED_IMG1, FEED_VIEWS.NEXTVAL, :ID, FEED_HASHTAG1, FEED_VIDEO, :COMMENT, FEED_LIKES.NEXTVAL, SYSDATE)';
    const params = [comment];

    connection.execute(query, params, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
      }

      // 댓글 저장이 성공한 경우
      res.status(200).send('Comment saved successfully');
    });
  });
});

module.exports = router;