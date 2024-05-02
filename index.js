var express = require('express');
var cors = require('cors');
const multer = require('multer');
require('dotenv').config()
const upload = multer();

var app = express();

app.use(cors());
// app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  // res.sendFile(process.cwd() + '/views/index.html');
  res.sendFile(__dirname + '/views/index.html');
});

app.post("/api/fileanalyse", upload.single('upfile'), (req, res) => {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
