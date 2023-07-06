const express = require('express')
const path = require('path')
const app = express()
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
// const indexRouter = require('./routes')

app.set('port',process.env.PORT||8888)

app.use(express.static(path.join(__dirname,'project/build')))
app.use('/', indexRouter)
app.use('/home', userRouter)

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 서버연결 기다리는 중...');
})

