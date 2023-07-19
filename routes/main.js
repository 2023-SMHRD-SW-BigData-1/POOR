const bodyParser = require('body-parser');
const express = require('express')
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
const path = require('path')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}));
const app = express()
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

    const connection = await oracledb.getConnection();
    const result = await connection.execute('SELECT * FROM T_USER WHERE id = :USER_ID', [userId]);
    setUserData(result.rows[0]);
    router.get('/', function(req,res){

    console.log('main');
    res.sendFile(path.join(__dirname,'../Page','build','index.html'))

})