const express = require('express')
const path = require('path')
const session = require('express-session');
const fileStore = require('session-file-store')(session)
const app = express()
const indexRouter = require('./routes/index')
const newRouter = require('./routes/new')
const userRouter = require('./routes/user')
const writeRouter = require('./routes/post')
const joinRouter = require('./routes/join')
const listRouter = require('./routes/listpage')
const cors = require('cors')
app.set('port',process.env.PORT||8888)
app.use(express.json())
app.use(cors())
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    // cookie : {
    //     httpOnly : true,
    // },
    // store : new fileStore()
  }));

app.use(express.static(path.join(__dirname,'project/build')))

app.use('/listpage', listRouter)
app.use('/', userRouter)
app.use('/join', joinRouter)
app.use('/write', writeRouter)
app.use('/new', newRouter)
app.use('/discountinfo', indexRouter)
app.use('/my', indexRouter)
// app.use('/home', indexRouter)
app.use('/main', indexRouter)




app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 서버연결 기다리는 중...');
    //http://localhost:8888
})

