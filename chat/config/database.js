const oracledb = require('oracledb');

oracledb.initOracleClient({libDir: '../oracle_client'})


// const express = require('express')
// // const oracledb = require('oracledb');
// const db_config = require('../config/database')
// const router = express.Router()

// oracledb.initOracleClient({libDir: '../oracle_client'})

// let connection 

// async function init() {
//   try {
//     connection = await oracledb.getConnection(db_config);
//     console.log("Oracle과 연결되었습니다.");
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// init(); // DB 연결 객체 생성

// // 데이터 조작 API 구현

// // 라우팅 API 구현


// let  db_info = {
//     user : "campus_h_230627_1",
//     password : "smhrd1",
//     connectString : "project-db-stu2.smhrd.com:1524/"
// }
// let conn
// oracledb.getConnection(db_info,(err,con)=>{
//     if(err){
//         console.log('접속실패',err);
//     }
//     else{
//         console.log("접속성공")
        
//         conn = con;
//         console.log(conn)
//     }
// });
   
//module.exports = conn

// module.exports = {
    
//     init:async function() { // 연결 객체 초기화 → 반환
    
//          oracledb.getConnection({
//             user : "campus_h_230627_1",
//             password : "smhrd1",
//             connectString : "project-db-stu2.smhrd.com:1524/"
        // }, async (err,con)=>{
        //     if(err){
        //         console.log('접속실패',err);
             
                 
        //     }
        //     else{
        //         console.log("접속성공")
        //         //console.log(con)
        //     }
            
        // });

//     },
//     executeQuery: function(conn, queryString, params, callback) { // 쿼리 실행
//         console.log(conn)
//         conn.execute(queryString, params, function(err, result) {
//             if (err) console.error(err);
//             else callback(result.rows);
//         });
//     }
// };

module.exports = {
    user : "campus_h_230627_1",
    password : "smhrd1",
    connectString : "project-db-stu2.smhrd.com:1524/"
}
