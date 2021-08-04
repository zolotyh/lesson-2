const { EventEmitter } = require("events");

var server = new EventEmitter();

server.on("request", function (request) {
  request.approved = true;
});

server.on("request", function (request) {
  console.log(request);
});

server.emit("request", { from: "Клиент" });

server.emit("request", { from: "Ещё клиент" });
