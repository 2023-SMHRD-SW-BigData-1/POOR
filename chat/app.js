const express = require('express')
const webSocket = require('./socket')
const nunjucks = require('nunjucks')
const indexRouter = require('./routes')
const userRouter = require('./routes/user')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const fileStore=require('session-file-store')(session)

const app = express()

app.set('view engine', 'html')
nunjucks.configure('views',{
    express : app,
    watch : true
})

app.use(cookieParser('secretKey'))
// session
app.use(session({
    resave : false,
    secret : 'secretKey',
    cookie : {
        httpOnly :true,
        secure : true
    },
    saveUninitialized: true,
    store : new fileStore()
}))

app.use(express.urlencoded({extended : true}))
// app.engine('jsx', require('express-react-views').createEngine());
// app.set('views', path.join(__dirname, 'views')); // 템플릿 파일 경로
// app.set('view engine', 'jsx'); // View Engine으로 JSX 사용



// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine());

app.use('/',indexRouter)
app.use('/user', userRouter)

app.set('port',process.env.PORT||8090)

const server = app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 서버연결 기다리는 중...');
})

webSocket(server)