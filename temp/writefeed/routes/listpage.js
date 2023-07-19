const bodyParser = require('body-parser');
const express = require('express')
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
const path = require('path')
const cors = require('cors')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({ extended: false }));
const app = express()
router.use(cors())
app.use(cors())

// const data = {
//     title: 'title1',
//     id: 'id1',
//     date: 'date1',
//     number: 'number1',
// }

let num;
router.get('/', function(req,res){

        console.log('listpage');
        res.sendFile(path.join(__dirname,'../project/build/index.html'))
    
})






oracledb.initOracleClient({ libDir: 'oracle_client' })
let conn;

oracledb.getConnection({
    user: "campus_h_230627_1",
    password: "smhrd1",
    connectString: "project-db-stu2.smhrd.com:1524/"
}, (err, con) => {
    if (err) {
        console.log('접속실패', err);
    }
    conn = con;
});


const getPost = async (req, res) => {
    try {
        const getSql = "SELECT * FROM t_post ORDER BY post_seq DESC"
        const getResult = await conn.execute(getSql)
        // console.log(getResult.rows);
        const data = getResult.rows
        res.json(data)


    } catch (err) {
        console.log(err);
    }
}

const selectPost = async (req, res) => {
    try {
        // const value = Object.keys(req.query)
        const value = req.params.num
        console.log('params',req.params);
        // console.log('req.query',req.query);
        console.log(value);
        // const value = 23
        const getSql = "SELECT * FROM t_post where post_seq="+value
        const getResult = await conn.execute(getSql)
        // console.log(getResult.rows);
        const data = getResult.rows
        res.json(data)


    } catch (err) {
        console.log(err);
    }
}


app.use(getPost)

router.get('/listpage', function(req, res) {
    console.log('node list page');
    console.log(req.session);
    getPost(req,res)
  });
// router.get('/', (req, res) => {
//     console.log('node list page ')
//     // getPost(req,res)
//     res.json(data)

// })

app.use(selectPost)


router.get('/listpage/viewpage/:num', function(req, res) {
    const num = req.params.num;
    console.log('view page content!!!!');
    selectPost(req,res)
  });

router.get('/viewpage', function(req, res) {
    console.log('view page');
    num = req._parsedUrl

    res.sendFile(path.join(__dirname,'../project/build/index.html'))
  });




// router.get('*', function (req, res) {
//     console.log('whole router  in listpage')
//     res.sendFile(path.join(__dirname, '../project/build/index.html'))
// })


module.exports = router;