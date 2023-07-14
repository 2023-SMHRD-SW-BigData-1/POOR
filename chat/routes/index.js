const express = require('express')
const oracledb = require('oracledb');
oracledb.initOracleClient({libDir: '../oracle_client'})
const db_config = require('../config/database')
const router = express.Router()


//const conn = db_config.init() // init() 함수에서 Database 연결 객체 반환
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

// //db_config.connect(conn) // 연결

// 첫 페이지 보고 싶을 때(로그인폼)
router.get('/',(req,res)=>{
    // res.render('main', {state:''}) 
    // console.log(connection)
    // let sql = 'select * from rooms';
    // connection.execute(sql,function(err,rows){
    //     console.log(rows)
    // })
      console.log(connection)
    let sql = 'select * from room';
    console.log('test');
    connection.execute(sql,function(err,rows,fields){
        console.log(rows)
        res.render('main', {rooms : rows, state:'OK'})
        
    })

    // res.send('main')  
})

// 첫페이지 보고 싶을 때(로그인 후 채팅방 테이블)

router.get('/rooms',(req,res)=>{
    // res.render('main', {state:''}) 
    console.log(connection)
    let sql = 'select * from room';
    connection.execute(sql,function(err,rows,fields){
        console.log(rows)
        res.render('main', {rooms : rows, state:'OK'})
        
    })

// router.get('/rooms',(req,res)=>{

//     let sql = 'select * from room'

//     conn.query(sql, function(err, rows, fields){
//         console.log(rows);
//         res.render('main', {rooms : rows, state:'OK'})
    // })
})

// 특정 채팅방 들어가기
// router.get('/room/:roomid',(req,res)=>{
  //     let roomid = req.params.roomid
  
  //     // 현재까지 해당 방에서 한 채팅들 전부 불러오기 → DB
  //     let sql = 'select * from chat where roomid=?'
  
  //     connection.query(sql,[roomid],function(err,rows,fields){
    //        let chats = rows
    
    //        res.render('chat', {roomid:roomid, chats : chats, user:req.session.t_user[0]})
    //     })
    // })
    
    // 특정 채팅방 들어가기
router.get('/room/:roomid', (req, res) => {
    let roomid = req.params.roomid;
    console.log(roomid);
    let sql = 'SELECT * FROM chat WHERE roomid = :roomid';
  
    oracledb.getConnection(db_config, (err, connection) => {
      if (err) {
        console.error(err);
        return;
      }
      connection.execute(
        sql, 
        [roomid],
        { outFormat: oracledb.OUT_FORMAT_OBJECT },
        (err, result) => {
          if (err) {
            console.error(err);
            return;
          }
          let chats = result.rows;
          if (req.session.t_user && req.session.t_user[0]) {
            res.render('chat', { roomid:roomid, chats:chats, user:req.session.t_user[0] });
          } else {
            res.render('chat', { roomid:roomid, chats:chats, user:null });
          }
          connection.release();
        }
      );
    });
  });

// 채팅(채팅 내용 저장)
// router.post('/room/:roomid/chat',(req, res)=>{
//     let roomid = req.params.roomid
//     let userid = req.session.t_user[0].user_id
//     let chat = req.body.chat

//     console.log(chat);
//     // DB 안에 채팅 내용만 저장
//     let sql = 'insert into chat(roomid, userid, chat) values(?,?,?)'

//     connection.query(sql, [roomid, userid, chat], function(err, rows, fields){
//         // req.app.get('io') : socketIO 가지고 오기 (socket.js에 지정되어있음)
//         // of('/chat') : /chat namespace 지정
//         // to(roomid) : 특정 room으로 조인(현재 사용자가 채팅중인 방 id값 들어감)
//         req.app.get('io').of('/chat').to(roomid).emit('chat',{user : userid, chat : chat})

//         res.send('ok')
//     })
// })

// 채팅(채팅 내용 저장)
router.post('/room/:roomid/chat',(req, res)=>{
    let roomid = req.params.roomid
    console.log('asfas');
    console.log(req);
    // 만약 로그인하지 않은 사용자라면, 로그인 페이지로 이동시킨다.
    // if (!req.session.t_user) {
      //   return res.redirect('/');
      console.log('asfas');
    // }
    console.log(req.session.cookie);
    let userid = req.session.t_user[0].user_id
    let chat = req.body.chat

    console.log(chat);
    // DB 안에 채팅 내용만 저장
    let sql = 'insert into chat(roomid, userid, chat) values(?,?,?)'

    connection.query(sql, [roomid, userid, chat], function(err, rows, fields){
        // req.app.get('io') : socketIO 가지고 오기 (socket.js에 지정되어있음)
        // of('/chat') : /chat namespace 지정
        // to(roomid) : 특정 room으로 조인(현재 사용자가 채팅중인 방 id값 들어감)
        req.app.get('io').of('/chat').to(roomid).emit('chat',{user : userid, chat : chat})

        res.send('ok')
    })
})



module.exports = router


// const express = require('express');
// const oracledb = require('oracledb');
// oracledb.initOracleClient({ libDir: '../oracle_client' });
// const db_config = require('../config/database');
// const router = express.Router();
// const bodyParser = require('body-parser');
// let connection;

// router.use(bodyParser.urlencoded({ extended: false }));
// router.use(bodyParser.json());

// router.get('/', (req, res) => {
//   oracledb.getConnection(db_config, (err, conn) => {
//     if (err) {
//       console.log('DB에 연결할 수 없습니다.', err);
//       return;
//     }
//     console.log('DB에 연결되었습니다.');
//     connection = conn;

//     let sql = 'select * from room';
//     connection.execute(sql, function (err, rows, fields) {
//       console.log(rows);
//       res.render('main', { rooms: rows, state: 'OK' });
//     });
//   });
// });

// router.get('/room/:roomid', (req, res) => {
//   let roomid = req.params.roomid;
//   let sql = 'SELECT * FROM chat WHERE roomid = :roomid';

//   oracledb.getConnection(db_config, (err, conn) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     conn.execute(sql, [roomid], { outFormat: oracledb.OUT_FORMAT_OBJECT }, (err, result) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       let chats = result.rows;
//       if (req.session.t_user && req.session.t_user[0]) {
//         res.render('chat', { roomid: roomid, chats: chats, user: req.session.t_user[0] });
//       } else {
//         res.render('chat', { roomid: roomid, chats: chats, user: null });
//       }
//       conn.release();
//     });
//   });
// });

// router.post('/room/:roomid/chat', (req, res) => {
//   let roomid = req.params.roomid;

//   if (!req.session.t_user) {
//     return res.redirect('/');
//   }

//   let userid = req.session.t_user[0].user_id;
//   let chat = req.body.chat; //요청으로부터 chat 값을 가져옵니다.

//   console.log(chat);
//   let sql = 'insert into chat(roomid, userid, chat) values(:roomid,:userid,:chat)'; //sql문 변경

//   connection.execute(sql, [roomid, userid, chat], function (err, result) { //values 추가
//     if (err) {
//       console.error('Error inserting chat!', err);
//       return;
//     }
//     req.app.get('io').of('/chat').to(roomid).emit('chat', { user: userid, chat: chat });
//     res.send('ok');
//   });
// });

// oracledb.getConnection(db_config, (err, conn) => {
//   if (err) {
//     console.log('DB에 연결할 수 없습니다.', err);
//     return;
//   }
//   console.log('DB에 연결되었습니다.');
//   connection = conn;
// });

// module.exports = router;
