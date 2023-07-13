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

router.get('*', function(req,res){
    res.sendFile(path.join(__dirname,'../project/build/index.html'))
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


const getPost = async (req,res)=>{
    try{
        const getSql = "select * from t_post"
        const getResult = await conn.excute(getSql)
        console.log(getResult.rows);
        const data = getResult.rows
        res.send(data)


    }catch(err){
        console.log(err);
    }
}
app.use(getPost)



const data ={
    title : 'title1',
    id : 'id1',
    data : 'data1',
    number : 'number1',
}
router.get('/listpage',getPost)
// (req, res)=>{
    // res.json(data)
// })
module.exports = router;