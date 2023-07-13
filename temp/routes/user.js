const bodyParser = require('body-parser');
const express = require('express')
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
const path = require('path')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}));
const app = express()
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

router.get('*', function(req,res){
    res.sendFile(path.join(__dirname,'../project/build/index.html'))
})

const handleLogin = async(req,res)=>{
    try{
        const sql = "SELECT * FROM T_USER WHERE USER_ID = '"+req.body.id+"' AND USER_PW = '"+req.body.pw+"'";
    

        let result;
        result = await conn.execute(sql)
        // console.log(result.rows.length);
            if (result.rows.length >= 1) {
              // 로그인 성공
              console.log('로그인 성공');
            //   res.send('성공')
              res.send('성공')
            } else {
              // 로그인 실패
              console.log('로그인 실패');
            //   res.send('실패')
            res.redirect('/')
            }
        
    }catch(err){
        console.log(err);
    }

}

app.use(handleLogin)


router.post('/', (req, res)=>{
    handleLogin(req,res)
    // console.log(req.body);

   
})


module.exports = router;





