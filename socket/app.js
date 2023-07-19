const express = require('express')
const webSocket = require('./socket')
const indexRouter = require('./routes')
const nunjucks = require('nunjucks')


const app = express()

app.set('view engine','html')
nunjucks.configure('views',{
    express : app,
    watch : true
})

app.use('/', indexRouter)

app.set('port',process.env.PORT||8090)

const server = app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 서버 연결 기다리는 중 . . . ');
})

webSocket(server)