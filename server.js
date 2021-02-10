var express = require('express');
const path = require('path');
var app = express();
var http = require("http").createServer(app);
const { createProxyMiddleware } = require('http-proxy-middleware');


var cors = require("cors");

app.use(cors());

app.use(express.static("./build"),createProxyMiddleware({ target: 'http://172.16.11.7:8080', changeOrigin: true }))

// 서버리슨
http.listen(3000, () => {
  console.log("Server listening on port 3000");
});
