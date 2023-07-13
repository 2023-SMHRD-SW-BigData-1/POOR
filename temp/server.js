const express = require('express')
const path = require('path')
const app = express()
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const writeRouter = require('./routes/post')
const joinRouter = require('./routes/join')
const listRouter = require('./routes/listpage')
const cors = require('cors')
app.set('port',process.env.PORT||8888)
app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname,'project/build')))

app.use('/listpage', listRouter)
app.use('/', userRouter)
app.use('/main', indexRouter)
// app.use('/join', joinRouter)
app.use('/write', writeRouter)
app.use('/discount', indexRouter)
app.use('/my', indexRouter)
app.use('/new', indexRouter)





app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 서버연결 기다리는 중...');
})

