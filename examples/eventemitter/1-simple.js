const { EventEmitter } = require("events");

const server = new EventEmitter();

server.on("request", function (request) {
  console.log(request, 1);
});

server.on("request", function (request) {
  console.log(request, 2);
});

server.emit("request", { from: "Клиент" });

server.emit("request", { from: "Ещё клиент" });
