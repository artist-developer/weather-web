var express = require('express');
const path = require('path');
var app = express();
var http = require("http").createServer(app);
const { createProxyMiddleware } = require('http-proxy-middleware');


var cors = require('cors');

app.use(cors());

app.use(express.static("./build"),createProxyMiddleware({ target: 'default-weather-app-29201-6070141-e4b461bbcae3.kr-fin.lb.naverncp.com:8080', changeOrigin: true }));
//app.use(express.static("./build"));
// 서버리슨
http.listen(3000, () => {
  console.log("Server listening on port 3000");
});
