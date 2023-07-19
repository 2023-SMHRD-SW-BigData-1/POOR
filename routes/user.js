// import {useState } from 'react'
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
router.get('/', function(req,res){

    console.log('listpage');
    res.sendFile(path.join(__dirname,'../Page','build','index.html'))

})


const handleLogin = async(req,res)=>{

    // const [check, setCheck] = useState(true);

    try{
        const sql = "SELECT * FROM T_USER WHERE USER_ID = '"+req.body.id+"' AND USER_PW = '"+req.body.pw+"'";
    

        let result;
        result = await conn.execute(sql)
            if (result.rows.length >= 1) {
              console.log('로그인 성공');
              console.log(result.rows[0])
              let userId = result.rows[0].USER_ID
              let userNick = result.rows[0].USER_NICK
              
              console.log("로그인 id : "+userId)
              //   setCheck(false);
              //   res.sendFile(path.join(__dirname,'../project/build/index.html'))
              res.json({message : 'success', user_ID:userId, user_Nick:userNick})
              setMyNick(userNick);
              setMyId(userId);
              req.session.userId = logInUserID
              req.session.userNick = logInUserNick
              res.sendStatus(200)
              console.log('session success');

            } else {
              console.log('로그인 실패');
            //   setCheck(true);
            res.redirect('/')
            }
        
    }catch(err){
        console.log(err);
    }

}

app.use(handleLogin)


router.post('/', (req, res)=>{
    console.log('user router');
    handleLogin(req,res)
    // console.log(req.body);

   
})



module.exports = router;





