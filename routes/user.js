// import {useState } from 'react'
const bodyParser = require('body-parser');
const express = require('express')
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
const path = require('path')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}));
<<<<<<< HEAD
const session = require('express-session');
const app = express()
<<<<<<<< HEAD:routes/user.js
oracledb.initOracleClient({libDir: 'C:/Users/smhrd/Desktop/project/oracle_client'})
========

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  }));

oracledb.initOracleClient({libDir: 'oracle_client'})
>>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899:temp/routes/user.js
=======
const app = express()
oracledb.initOracleClient({libDir: 'C:/Users/smhrd/Desktop/project/oracle_client'})
>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899
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
<<<<<<< HEAD
<<<<<<<< HEAD:routes/user.js
=======
>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899

    console.log('listpage');
    res.sendFile(path.join(__dirname,'../Page','build','index.html'))

<<<<<<< HEAD
========

    console.log('listpage');
    res.sendFile(path.join(__dirname,'../project/build/index.html'))

>>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899:temp/routes/user.js
=======
>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899
})


const handleLogin = async(req,res)=>{

    // const [check, setCheck] = useState(true);

    try{
        const sql = "SELECT * FROM T_USER WHERE USER_ID = '"+req.body.id+"' AND USER_PW = '"+req.body.pw+"'";
<<<<<<< HEAD
        const {id, pw} = req.body;
        console.log(req.body);
=======
    
>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899

        let result;
        result = await conn.execute(sql)
            if (result.rows.length >= 1) {
              console.log('로그인 성공');
<<<<<<< HEAD
<<<<<<<< HEAD:routes/user.js
            //   setCheck(false);
            //   res.sendFile(path.join(__dirname,'../project/build/index.html'))
            res.json({message : 'success'})
            req.session.userId = logInUserID
            res.sendStatus(200)
=======
            //   setCheck(false);
            //   res.sendFile(path.join(__dirname,'../project/build/index.html'))
            res.json({message : 'success'})
>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899
            } else {
              console.log('로그인 실패');
            //   setCheck(true);
            res.redirect('/')
<<<<<<< HEAD
========
              //req의 세션 안에 userId라는 key값안에 id(test1)를 넣어줌
              req.session.userId = id

            res.json({message : 'success'})
            } else {
              console.log('로그인 실패');
            res.json({message:'failure'})
>>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899:temp/routes/user.js
=======
>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899
            }
        
    }catch(err){
        console.log(err);
    }

}

app.use(handleLogin)


<<<<<<< HEAD


=======
>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899
router.post('/', (req, res)=>{
    console.log('user router');
    handleLogin(req,res)
    // console.log(req.body);

   
})



module.exports = router;





