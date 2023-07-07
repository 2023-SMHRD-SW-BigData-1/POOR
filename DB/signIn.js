const express = require('express')
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
const dbConfig = require("./dbConfig");

const app = express()
oracledb.initOracleClient({libDir: 'C:/Users/smhrd/Desktop/project/oracle_client'})

const server = app.listen(8090, () => {
    console.log('server start, port 8090')
})

// app.get('/select', function(request, response) {
//     getSelect(request, response)
// })

const handleLogin = async (USER_ID, USER_PW) => {
    try {
      // Oracle 데이터베이스 연결 설정
      const dbConfig = {
        user          :"campus_h_230627_1",
    password      : "smhrd1",
    connectString : "project-db-stu2.smhrd.com:1524/",
    externalAuth  : false
      };
  
      // 저장된 로그인 정보와 사용자 입력값 비교를 위한 SQL 문 작성
      const sql = `SELECT COUNT(*) AS count FROM T_USER WHERE USER_ID = :USER_ID AND USER_PW = :USER_PW`;
      const binds = {
        USER_ID: USER_ID,
        USER_PW: USER_PW
      };
  
      // SQL 문 실행
      const result = await connection.execute(sql, binds);
  
      // 결과 처리
      const count = result.rows[0][0];
      if (count === 1) {
        // 로그인 성공
        console.log('로그인 성공');
      } else {
        // 로그인 실패
        console.log('로그인 실패');
      }
  
      // 연결 종료
      await connection.close();
    } catch (error) {
      console.error(error);
    }
  }
  handleLogin('사용자이름', '비밀번호');