const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/", { target: "http://172.16.11.7:8080" }));
};