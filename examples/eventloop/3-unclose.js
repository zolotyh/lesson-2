var http = require("http");

var server = new http.Server(function (req, res) {}).listen(3000);

setTimeout(function () {
  server.close();
}, 2500);

server.on("close", () => console.log("close"));

const interval = setInterval(function () {
  console.log(process.memoryUsage().heapUsed);
}, 1000);

interval.unref();
interval.ref();
