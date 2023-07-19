const bodyParser = require('body-parser');
const express = require('express')
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
const path = require('path')
const cors = require('cors')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}));
const app = express()
app.use(cors())

<<<<<<< HEAD
=======
router.get('*', function(req,res){
    res.sendFile(path.join(__dirname,'../Page','build','index.html'))
})
>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899

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

<<<<<<< HEAD
const chartDataSave = async (req, res) => {
    try {
      const setTotalBalance = req.body.setTotalBalance;
      const logInUserID = req.session.userId;
  
      console.log('chart');
      const updateSql = "UPDATE T_USER SET USER_CONSUME = :USER_CONSUME WHERE USER_ID = :USER_ID";
      const binds = {
        USER_CONSUME: setTotalBalance,
        USER_ID: logInUserID, // 사용자 ID를 적절히 설정해야 함
      };
  
      await conn.execute(updateSql, binds);
  
      console.log('setTotalBalance 값 업데이트 성공');
      
      res.sendStatus(200); // 성공적으로 업데이트했을 경우 200 상태 코드를 반환
    } catch (error) {
      console.error('setTotalBalance 값 업데이트 중 오류 발생:', error);
      res.sendStatus(500); // 오류 발생 시 500 상태 코드를 반환
    }
  };
  
  router.post('/chart', chartDataSave);

=======
// const getChart = async (req, res) => {
//     try {
//         const getSql = ""
//     }
// }
>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899

module.exports = router;