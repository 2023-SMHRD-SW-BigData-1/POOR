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
<<<<<<<< HEAD:routes/post.js
    res.sendFile(path.join(__dirname, '../Page/build/index.html'))
========
    res.sendFile(path.join(__dirname, '../project/build/index.html'))
>>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899:temp/routes/post.js
})



<<<<<<<< HEAD:routes/post.js
oracledb.initOracleClient({libDir: 'C:/Users/smhrd/Desktop/project/oracle_client'})
========
oracledb.initOracleClient({libDir: 'oracle_client'})
>>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899:temp/routes/post.js
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

const write = async (req, res) => {
    try {
        const checkSql = "SELECT POST_SEQ FROM T_POST"
        const insertSql = "INSERT INTO t_post (post_title, post_content, post_img, post_video, post_views, created_at, user_id, post_likes, post_hashtag, post_seq) VALUES (:title, :content, 'post_img 1', 'post_video 1', 1, sysdate, :id, 1, 'post_hashtag 1',post_seq.NEXTVAL)"

        console.log(req.body.title+req.body.content+ req.body.id+1);
        const insertResult = await conn.execute(insertSql,[req.body.title, req.body.content, req.body.id]);
        
        conn.commit()

        res.json({message : 'success'})
    } catch (err) {
        console.log(err);
    }

};

app.use(write)

// router.post('/write', write)


router.post('/', (req, res)=>{
    console.log('write router');
    console.log(req.body);

    // const data = req.body;
    //     res.json(data)
    write(req,res)
           
})


module.exports = router;