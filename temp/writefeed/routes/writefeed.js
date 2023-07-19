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

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../project/build/index.html'))
})



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

const writefeed = async (req, res) => {
    try {
        const insertSql = "INSERT INTO t_feed (FEED_SEQ, FEED_CONTENT, FEED_IMG, FEED_VIEWS, USER_ID, FEED_COMENT, FEED_LIKES, FEED_DATE) VALUES (FEED_SEQ.NEXTVAL, sysdate)"

        console.log(req.body,'2');
        // const insertResult = await conn.execute(insertSql,[req.body.title, req.body.content, req.body.id]);
        
        // conn.commit()
    } catch (err) {
        console.log(err);
    }

};

app.use(writefeed)



router.post('/', (req, res)=>{
    console.log('writefeed router');
    console.log(req.body);

    // const data = req.body;
    //     res.json(data)
    writefeed(req,res)
           
})


module.exports = router;