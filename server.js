const express = require('express')
const path = require('path')
<<<<<<< HEAD
const session = require('express-session');
const fileStore = require('session-file-store')(session)
const app = express()
const indexRouter = require('./routes/index')
const newRouter = require('./routes/new')
=======
const app = express()
const indexRouter = require('./routes/index')
>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899
const userRouter = require('./routes/user')
const writeRouter = require('./routes/post')
const joinRouter = require('./routes/join')
const listRouter = require('./routes/listpage')
<<<<<<< HEAD
const newRouter = require('./routes/new')
const chartRouter = require('./routes/chart')
=======
>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899
const cors = require('cors')
app.set('port',process.env.PORT||8888)
app.use(express.json())
app.use(cors())
<<<<<<< HEAD
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    // cookie : {
    //     httpOnly : true,
    // },
    // store : new fileStore()
  }));

<<<<<<<< HEAD:server.js
=======

>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899
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
<<<<<<< HEAD
app.use('/new', newRouter)
app.use('/home', indexRouter)
app.use('/join', joinRouter)
app.use('/chart', chartRouter)

========
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
>>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899:temp/server.js
=======
app.use('/new', indexRouter)
app.use('/home', indexRouter)
app.use('/join', joinRouter)

>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899




app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 서버연결 기다리는 중...');
<<<<<<< HEAD
    //http://localhost:8888
=======
>>>>>>> 5aca50cd35ddb7de3054ef1081a5c8b75d7ed899
})

