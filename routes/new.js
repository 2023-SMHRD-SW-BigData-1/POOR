const bodyParser = require('body-parser');
const { log } = require('console');
const express = require('express')
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
const path = require('path')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}));
const session = require('express-session');
const app = express()




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



const chat = async (req, res) => {
    try {
        const insertSql = "INSERT INTO chat (roomid, userid, chat, chatdate) VALUES (3, 'testuser', :content, sysdate)"
        console.log('chat function');
        const insertResult = await conn.execute(insertSql,[req.body.chat]);
        conn.commit()
        res.json({message:'success'})
    } catch (err) {
        console.log(err);
    }
<<<<<<< HEAD
    
=======

>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899
};
const getChat = async (req, res) => {
    try {
        console.log('node get chat');
        const getSql = "SELECT chat FROM chat where roomid = 3 ORDER BY chatdate"
        const getResult = await conn.execute(getSql)
        // console.log(getResult.rows);
        const data = getResult.rows
        res.json(data)
<<<<<<< HEAD
        
        
=======


>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899
    } catch (err) {
        console.log(err);
    }
}

app.use(chat)
app.use(getChat)

<<<<<<< HEAD

router.get('/', function (req, res) {
    console.log('new router');
    getChat(req,res)
    // res.sendFile(path.join(__dirname, '../Page/build/index.html'))
=======
router.get('/', function (req, res) {
    console.log('new router');
    getChat(req,res)
    // res.sendFile(path.join(__dirname, '../project/build/index.html'))
>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899
})



<<<<<<< HEAD
=======

>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899
router.post('/new', (req,res)=>{
    console.log('new router2');
    console.log('chat req',req.body);
    console.log('chat req',req.session);
    chat(req,res)
})




module.exports = router;