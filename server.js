var express = require('express');
const path = require('path');
var app = express();
var http = require("http").createServer(app);

var cors = require("cors");

app.use(cors());

app.use(express.static("./build"))

// 서버리슨
http.listen(3000, () => {
  console.log("Server listening on port 3000");
});
