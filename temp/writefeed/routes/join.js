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

conn =oracledb.getConnection({
    user : "campus_h_230627_1",
    password : "smhrd1",
    connectString : "project-db-stu2.smhrd.com:1524/"
},(err,con)=>{
    if(err){
        console.log('접속실패',err);
    }
    conn = con;
})
router.get('/', function(req,res){
    console.log('join router');
    console.log('listpage');
    res.sendFile(path.join(__dirname,'../project/build/index.html'))

})

const join = async (req, res) => {
    try {
        const checkSql = "SELECT * FROM T_USER WHERE USER_ID = :id";
        const insertSql = "INSERT INTO T_USER (user_id, user_pw, user_nick, user_joindate, user_type, user_grade, user_consume) VALUES (:id, :pw, :name, SYSDATE, 'U', 'C', '1000')";

        const checkResult = await conn.execute(checkSql, [req.body.id]);

        if (checkResult.rows.length >= 1) {
            // 이미 있는 값: 회원가입 실패
            console.log('이미 있는 값');
            res.redirect('/join');
        } else {
            // 없는 값: 회원가입 성공
            console.log('없는 값');
            console.log(req.body);
           
            
            const insertResult = await conn.execute(insertSql, [req.body.id, req.body.pw, req.body.name]);
            // console.log(insertResult)
            conn.commit()

            res.redirect('../');
        }
    } catch (err) {
        console.log(err);
    }

};

app.use(join)




router.post('/', (req, res)=>{
    join(req,res)
       
})


module.exports = router;





