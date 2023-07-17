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
router.use(cors())
app.use(cors())

router.get('/', function (req, res) {
    console.log('index router');
    res.sendFile(path.join(__dirname, '../Page','build','index.html'))
})


oracledb.initOracleClient({libDir: 'C:/Users/smhrd/Desktop/project/oracle_client'})
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



const write = async (req, res) => {
    try {
        const checkSql = "SELECT POST_SEQ FROM T_POST"
        const insertSql = "INSERT INTO t_post (post_title, post_content, post_img, post_video, post_views, created_at, user_id, post_likes, post_hashtag, post_seq) VALUES (:title, :content, 'post_img 1', 'post_video 1', 1, sysdate, :id, 1, 'post_hashtag 1',post_seq.NEXTVAL)"

        console.log(req.body.title+req.body.content+ req.body.id+1);
        const insertResult = await conn.execute(insertSql,[req.body.title, req.body.content, req.body.id]);
        conn.commit()
        res.json(insertResult); // 삽입 결과를 응답으로 보냅니다.
        } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' }); // 오류가 발생한 경우 500 오류 응답을 보냅니다.
        }
    };

    router.post('/write', write);

// router.post('/write', write)


router.post('/write', (req, res)=>{
    console.log('write router in index');
    console.log(req.body);
    
    write(req,res)
    const data = req.body;
    res.status(200).json({ message: 'Success' });
           
})


// router.get('*', function (req, res) {
//     console.log('whole router ')
//     res.sendFile(path.join(__dirname, '../project/build/index.html'))
// })


module.exports = router;