const bodyParser = require("body-parser");
const express = require("express");
const oracledb = require("oracledb");
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
const app = express();
app.use(cors());

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../Page", "build", "index.html"));
});

oracledb.initOracleClient({
  libDir:
    "C:/Users/smhrd/Desktop/project/oracle_client",
});
let conn;

oracledb.getConnection(
  {
    user: "campus_h_230627_1",
    password: "smhrd1",
    connectString: "project-db-stu2.smhrd.com:1524/",
  },
  (err, con) => {
    if (err) {
      console.log("접속실패", err);
    }
    conn = con;
  }
);

const writefeed = async (req, res) => {
  try {
    const insertSql =
      "INSERT INTO t_feed(FEED_SEQ, FEED_CONTENT, FEED_IMG, FEED_VIEWS, USER_ID, FEED_COMENT, FEED_LIKES, FEED_DATE, FEED_IMG2) VALUES (FEED_SEQ.NEXTVAL, :content, 'null', 1, :id, 'FEED_COMENT', 1, sysdate, :img)";

    //path를 통해서 이미지파일가져온다음에 buffer 형식으로 변환 --> DB Blob 타입으로 저장 가능
    const imageBuffer = fs.readFileSync(req.files.image.path);

    const insertResult = await conn.execute(insertSql, {
      content: req.body.content,
      img: imageBuffer,
      id: req.body.id,
    });
    conn.commit();
    console.log("Tes : " + insertResult);

    return insertResult;
  } catch (err) {
    console.log(err);
  }
};

app.use(writefeed);

router.post("/", (req, res) => {
  console.log("writefeed router");
  console.log(req.body);
  console.log(req.files);

  // const data = req.body;
  //     res.json(data)
  let cnt = writefeed(req, res);
  conn.commit();
  if (cnt != null) {
    res.json({ message: "success" });
  }
});

const getFeedData = async (req, res) => {
  try {
    const selectSql =
      "select * from(select * from T_FEED ORDER BY FEED_SEQ DESC) where ROWNUM = :id";
    const params = { id: 1 };
    const selectResult = await conn.execute(selectSql, params, {
      fetchInfo: { FEED_IMG2: { type: oracledb.BUFFER } },
    });
    console.log(selectResult.rows[0]);
    const imageBuffer = selectResult.rows[0][0];

    // res.set("Content-Type", "image/*");
    res.send(selectResult.rows[0].FEED_IMG2.toString("base64"));
    
  } catch (err) {
    console.log(err);
  }
};

// const getTextData = async (req, res) => {
//   try {
//     const selectSql =
//     "select * from(select * from T_FEED ORDER BY FEED_SEQ DESC) where ROWNUM = :id";
//     const params = { id: 1 };
//     const selectResult = await conn.execute(selectSql)
//     res.send(selectResult.rows[0].FEED_CONTENT);
//   }catch (err) {
//     console.log(err);
// }
// }

router.post("/getFeedData", (req, res) => {
  console.log("getFeedData router");

  // const data = req.body;
  //     res.json(data)
  getFeedData(req, res);
});

// router.post("/getTextData", (req, res) => {
//   console.log("getTextData router");

//   // const data = req.body;
//   //     res.json(data)
//   getTextData(req, res);
// });

module.exports = router;