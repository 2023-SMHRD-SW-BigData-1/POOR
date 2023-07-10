const express = require('express')
const router = express.Router()
const path = require('path')




// router.get('/', function(req,res){
//     res.sendFile(path.join(__dirname,'/project/build/index.html'))
// })

// DB 초기화 및 연결
const db_config = require('../DB/dbConfig')
let conn = db_config.init()
db_config.connect(conn);

router.get('/',(req,res)=>{
    console.log('index Router');
    res.sendFile(path.join(__dirname,'/project/build/index.html'))
})

router.post('/user/join',(req,res)=>{
    console.log('Join Router!', req.body);

    
    // 중복체크 시작!
    // DB에서 중복체크를 진행한 후, DB안에 없는 ID만 회원가입을 진행

    let oracle = 'select id from T_USER where id=?'
    conn.query(oracle, [req.body.userData.id], (err,rows)=>{
        console.log(rows);
        if(rows.length>0){
            res.json({result : 'duplicated'})
        }else{
            // 회원가입 시작!
            let sql = 'insert into T_USER values (?,?,?)'
            conn.query(sql,[req.body.userData.id, req.body.userData.pw, req.body.userData.nick]
                ,(err,rows)=>{
                    if (rows) {
                        console.log('joined successfully!');
                        res.json({result : 'success'})
                    } else {
                        console.log('Failed to Join . .  .');
                        res.json({result : 'failed'})
                    }
            })  

        }
    })
    
    // 만약 중복이라면 console창에 '중복!'
    // 아니라면 '중복x, 회원가입 가능!'
    // 중복체크 끝!
    
    
    
    // 회원가입 끝!
})

router.post('/user/login',(req, res)=>{
    console.log('login Router!');
    let sql = 'select * from T_USER where id=? and pw=?'
    conn.query(sql,
        [req.body.userData.id, req.body.userData.pw]
    , (err,rows)=>{
        console.log(rows);
        if(rows.length>0){
            res.json({result : 'success', id : req.body.userData.id})
        }else{
            res.json({result : 'failed'})
        }
    })
})




module.exports = router;