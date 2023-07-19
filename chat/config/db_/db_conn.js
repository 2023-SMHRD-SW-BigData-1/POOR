const express = require('express')
const oracledb = require('oracledb');
oracledb.initOracleClient({libDir: '../oracle_client'})
const db_config = require('../config/database')
const router = express.Router()


//const conn = db_config.init() // init() 함수에서 Database 연결 객체 반환
let connection 
oracledb.getConnection(db_config,(err,con)=>{
    if(err){
        console.log('접속실패',err);
    }
    else{
        console.log("접속성공",con)
        connection=con
    }
    
});

//db_config.connect(conn) // 연결
