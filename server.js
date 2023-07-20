const writefeed = require("./routes/writefeed");
const multipart = require("connect-multiparty");
const express = require('express')
const path = require('path')
const session = require('express-session');
const fileStore = require('session-file-store')(session)
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
app.use(multipart()); //formdata
app.use(cors())
app.use(session({
    httpOnly : true,
    store: new fileStore(),
    secret: 'secretkey',
    resave: true,
    saveUninitialized: true,
    rolling : true,
    cookie : {
      httpOnly : true,
      maxAge: 60 * 30 * 1000
  },
  }));

app.use(express.static(path.join(__dirname,'Page/build')))

app.use('/listpage', listRouter)
app.use('/user', userRouter)
app.use('/main', indexRouter)
app.use('/write', writeRouter)
app.use('/discountinfo', indexRouter)
app.use('/my', indexRouter)
app.use('/new', newRouter)
app.use('/home', indexRouter)
app.use('/join', joinRouter)
app.use('/chart', chartRouter)
app.use("/writefeed", writefeed);




app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 서버연결 기다리는 중...');
})

