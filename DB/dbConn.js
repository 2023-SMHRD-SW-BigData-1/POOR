
const express = require('express')
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
const dbConfig = require("./dbConfig");

const app = express()
oracledb.initOracleClient({libDir: 'C:/Users/smhrd/Desktop/project/oracle_client'})


const server = app.listen(3000, () => {
    console.log('server start, port 3000')
})


app.get('/select', function(request, response) {
    getSelect(request, response)
})

async function getSelect(request, response) {
    let connection
    try {
        connection = await oracledb.getConnection({
            user          : dbConfig.user,
            password      : dbConfig.password,
            connectString : dbConfig.connectString
        })

        // const result = await connection.execute(
        // 'SELECT * FROM T_USER',
        //     [],(err, result)=>{
        //         console.log(result)
        //         response.send(result.rows)
                
        //     } // num의 값 전달
        // )
        const result = await connection.execute('SELECT * FROM T_USER');

    // 쿼리 결과 처리
    console.log(result.rows);

    } catch (error) {
        console.log(error)
    } finally {
        if (connection) {
            try {
                await connection.close()
            } catch (error) {
                console.log(error)
            }
        }
    }
}