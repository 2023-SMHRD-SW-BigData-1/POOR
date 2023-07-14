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

      console.log(connection)
    let sql = 'select * from room';
    console.log('test');
    connection.execute(sql,function(err,rows,fields){
        console.log(rows)
        res.render('Main_login', {rooms : rows, state:'OK'})
        
    })

})

// 첫페이지 보고 싶을 때(로그인 후 채팅방 테이블)

router.get('/rooms',(req,res)=>{
    // res.render('main', {state:''}) 
    console.log(connection)
    let sql = 'select * from room';
    connection.execute(sql,function(err,rows,fields){
        console.log(rows)
        res.render('Main_chat', {rooms : rows, state:'OK'})

    })
})
  
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
  router.post('/room/chat',(req, res)=>{
    let roomid= req.query.data
    console.log("방번호 : "+ req.query.data)
    let userid = req.query.data
    let chatdate = req.query.data
    console.log('userid : '+ req.query.data)
    
    // 만약 로그인하지 않은 사용자라면, 로그인 페이지로 이동시킨다.
    // if (!req.session.t_user) {f
      //   return res.redirect('/');
    // }
    //console.log(req.session.cookie);
    console.log(req)
    //let userid = req.session.t_user[0].user_id
    //let chat = chat

    console.log(req.body.chat);
    let chat = req.body.chat
    // DB 안에 채팅 내용만 저장
    let sql = 'insert into chat(roomid, userid, chat,chatdate) values(:1,:2,:3,sysdate)'


    const io=require('socket.io')
    // connection.execute(sql, [roomid, userid, chat], function(err, rows, fields){
    //     // req.app.get('io') : socketIO 가지고 오기 (socket.js에 지정되어있음)
    //     // of('/chat') : /chat namespace 지정
    //     // to(roomid) : 특정 room으로 조인(현재 사용자가 채팅중인 방 id값 들어감)
    //     req.app.get('io').of('/chat').to(roomid).emit('chat',{user : userid, chat : chat})

    //     res.send('ok')
    // })
    connection.execute(sql, [roomid, userid, chat, chatdate], function(err, rows, fields) {
      if (err) {
        console.error(err);
        return;
      }
    
      req.app.get('io')
        .of('/chat')
        .to(roomid)
        .emit('chat', { user: userid, chat: chat });
    
      res.send('ok');
    });

})



module.exports = router