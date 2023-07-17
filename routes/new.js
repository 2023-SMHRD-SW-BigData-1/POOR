const bodyParser = require('body-parser');
const express = require('express')
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
const path = require('path')
const cors = require('cors')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}));
const app = express()
app.use(cors())

router.get('*', function(req,res){
    res.sendFile(path.join(__dirname,'../Page','build','index.html'))
})

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

const getLike = async (req,res)=>{
    try {
        const checkSql = "SELECT * FROM T_USER WHERE USER_ID = :id";
        const insertSql = "INSERT INTO T_FEED (FEED_SEQ, FEED_CONTENT, FEED_IMG, FEED_VIEWS, USER_ID, FEED_HASHTAG, FEED_VIDEO, FEED_COMENT, FEED_LIKES, FEED_DATE) VALUES (FEED_SEQ, FEED_CONTENT, FEED_IMG, FEED_VIEWS, USER_ID, FEED_HASHTAG, FEED_VIDEO, FEED_COMENT, :FEED_LIKES.NEXTVAL, FEED_DATE)";

        console.log(req.body.like);
        const checkResult = await conn.excute(insertSql, [req.body.like])

        conn.commit()

        res.json({message : 'success'})
    } catch (err) {
        console.log(err);
    }
}
app.use(getLike)


// router.post('/write', write)

router.get('/new',getLike)

module.exports = router;