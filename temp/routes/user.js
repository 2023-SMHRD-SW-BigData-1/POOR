const bodyParser = require('body-parser');
const express = require('express')
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
const path = require('path')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}));
const session = require('express-session');
const app = express()

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  }));

oracledb.initOracleClient({libDir: 'oracle_client'})
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
    res.sendFile(path.join(__dirname,'../project/build/index.html'))

})


const handleLogin = async(req,res)=>{
    try{
        const sql = "SELECT * FROM T_USER WHERE USER_ID = '"+req.body.id+"' AND USER_PW = '"+req.body.pw+"'";
        const {id, pw} = req.body;
        console.log(req.body);

        let result;
        result = await conn.execute(sql)
            if (result.rows.length >= 1) {
              console.log('로그인 성공');
              //req의 세션 안에 userId라는 key값안에 id(test1)를 넣어줌
              req.session.userId = id

            res.json({message : 'success'})
            } else {
              console.log('로그인 실패');
            res.json({message:'failure'})
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





