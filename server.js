const express = require("express"),
  aws = require("aws-sdk"), // ^2.2.41
  bodyParser = require("body-parser"),
  multer = require("multer"), // "multer": "^1.1.0"
  multerS3 = require("multer-s3"); //"^1.4.1"
const app = express();
const s3 = new aws.S3();
const port = process.env.PORT || 5000;

aws.config.update({
  secretAccessKey: "xxxxxxxxx",
  accessKeyId: "xxxx",
  region: "xxx"
});
// app.use(bodyParser.json());
// console.log that your server is up and running


// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "terobots-document",
    acl: "public-read",
    key: function(req, file, cb) {
      console.log(file);
      cb(null, file.originalname); //use Date.now() for unique file keys
    }
  })
});
app.post("/upload", upload.array("upl", 1), function(req, res, next) {
  console.log(upload.array("upl", 1));
  res.send("Uploaded!");
});


app.listen(port, () => console.log(`Listening on port ${port}`));