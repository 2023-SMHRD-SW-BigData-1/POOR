const bodyParser = require('body-parser');
const express = require('express')
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
const path = require('path')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}));
const app = express()
// oracledb.initOracleClient({libDir: 'C:/Users/smhrd/Desktop/temp/oracle_client'})

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

const handleLogin = async(id,pw)=>{
    try{
        const sql = "SELECT * FROM T_USER WHERE USER_ID = '"+id+"' AND USER_PW = '"+pw+"'";
    

        let result;
        result = await conn.execute(sql)

            if (result.rows.USER_ID !== '') {
              // 로그인 성공
              console.log('로그인 성공');
            } else {
              // 로그인 실패
              console.log('로그인 실패');
            }
            count=0
        
            await conn.close()
    }catch(err){
        console.log(err);
    }

}

app.use(handleLogin)


router.post('/', (req, res)=>{
    handleLogin(req.body.id,req.body.pw)
    res.sendFile(path.join(__dirname,'/react-project/build/index.html'))

   
})


module.exports = router;





