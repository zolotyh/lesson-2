const { EventEmitter } = require("events");

const db = new EventEmitter();

function Request() {
  var self = this;

  this.bigData = new Array(1e6).join("*");

  this.send = function (data) {
    console.log(data);
  };

  db.on("data", function (info) {
    self.send(info);
  });
}

setInterval(function () {
  const request = new Request();
  console.log(process.memoryUsage().heapUsed);
}, 200);
