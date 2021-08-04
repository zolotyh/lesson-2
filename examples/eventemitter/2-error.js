const { EventEmitter } = require("events");

var server = new EventEmitter();
console.log(server.getMaxListeners());

//server.on("error", function (err) {
//// ..
//console.error(err);
//console.log("конец");
//});

server.emit("error", new Error("серверная ошибка"));
