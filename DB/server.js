const express = require("express");
const app = express();

// database
// const oracledb = require('oracledb');
// const dbConfig = require("./dbconfig.js");

// // 서버 listen
// const server = app.listen(3000, ()=> {

//     console.log("Start serer : localhost:3000");

// })

// // __dirname : 현재 디렉토리
// // page 경로 설정
// app.set("views", __dirname + "/views");

// // ejs(Embedded JavaScript templates) : html에서 javascript를 같이 쓸 수 있게끔 해주는 engine 이다.
// app.set("view engine", "ejs");

// app.engine("html", require("ejs").renderFile);

// // 라우터 설정
// app.get("/", function(req, res) {
//     res.render("index.html")
// });

// app.get("/db", function (req, res){

//     // DB Select
//     selectDatabase();

//     // 화면에 보여줄 txt
//     res.send("execute!!!")

// });

// // DB Select
// async function selectDatabase() {

//     console.log("!!!!! db conenction !!!!!");

//     let connection = await oracledb.getConnection(dbConfig);

//     let binds = {};
//     let options = {
//         outFormat: oracledb.OUT_FORMAT_OBJECT   // query result format
//       };

//     console.log("!!!!! db select !!!!!");

//     let result = await connection.execute("select * from PRD_PRD_M", binds, options);

//     console.log("!!!!! db response !!!!!");
//     console.log(result.rows[0]);

//     console.log("!!!!! db close !!!!!");
//     await connection.close();

// }

// // 초기화
// function init() {

//     //oracle client 경로 설정
//     oracledb.initOracleClient({ libDir: 'C:\\instantclient_19_12' });
    
// }

// // 초기화
// init();