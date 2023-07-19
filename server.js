const express = require('express')
const path = require('path')
const app = express()
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const writeRouter = require('./routes/post')
const joinRouter = require('./routes/join')
const listRouter = require('./routes/listpage')
const newRouter = require('./routes/new')
const chartRouter = require('./routes/chart')
const cors = require('cors')
app.set('port',process.env.PORT||8888)
app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname,'Page/build')))

app.use('/listpage', listRouter)
app.use('/user', userRouter)
app.use('/main', indexRouter)
// app.use('/join', joinRouter)
app.use('/write', writeRouter)
// app.use('/main', indexRouter)
// app.use('/join', indexRouter)
// app.use('/write', indexRouter)
// app.use('/listpage', indexRouter)
app.use('/discountinfo', indexRouter)
app.use('/my', indexRouter)
app.use('/new', newRouter)
app.use('/home', indexRouter)
app.use('/join', joinRouter)
app.use('/chart', chartRouter)





app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 서버연결 기다리는 중...');
})

