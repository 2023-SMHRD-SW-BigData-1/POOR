const oracledb = require('oracledb')
const express = require('express')
const db_config = require('../config/database')

const router = express.Router()

oracledb.initOracleClient({libDir: '../oracle_client'})




// const conn = db_config.init() // init() 함수에서 Database 연결 객체 반환
let connection 
oracledb.getConnection(db_config,(err,con)=>{
    if(err){
        console.log('접속실패',err);
    }
    else{
        console.log("접속성공",con)
        connection=con
    }
    
});

// const conn = db_config.init()
// db_config.connect(conn)



// 로그인하기
// router.post('/login', (req,res)=>{
//     // post방식으로 요청왔을 때 데이터 가지고 오는 방법
//     let{id,pw} = req.body
//     console.log(id+','+pw);
    
//     let sql = 'select id, nick from t_user where user_id=? and user_pw=?'

//     // 값이 이미 있으면 로그인 가능, 없으면 로그인 불가능
//     // 로그인 可 → 읽어오는 값이 있다 → 세션에 사용자에 상태를 저장(아이디, 닉네임)
//     connection.query(sql, [id, pw], function(err, rows, fields){

//         req.session.t_user = rows // row : id, nick

//         req.session.save(function(){
//             res.redirect('/rooms')  // redirect : client가 다시 요청하게 만듦!
//         })

//     })
// })

router.post('/login', (req,res)=>{
    // post방식으로 요청왔을 때 데이터 가지고 오는 방법
    let {id, pw} = req.body;
    console.log(id+','+pw);
    
    let sql = 'select user_id, user_nick from t_user where user_id=:id and user_pw=:pw';
    
    oracledb.getConnection(
      db_config,
      function(err, connection){
          if(err){
              console.error(err);
              return;
          }
          connection.execute(
            sql, 
            {id: id, pw: pw}, 
            {outFormat: oracledb.OUT_FORMAT_OBJECT},
            function(err, result) {
              if (err) {
                  console.error(err);
                  return;
              }
              req.session.t_user = result.rows;
              req.session.save(function(){
                  res.redirect('/rooms');
              });
              connection.release();
          });
        }
    );
  });


module.exports = router