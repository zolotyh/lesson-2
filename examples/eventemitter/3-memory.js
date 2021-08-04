//class Request
function Request() {
  const self = this;

  this.bigData = new Array(1e6).join("*");

  this.send = function (data) {
    console.log(data);
  };

  this.onError = function () {
    self.send("извините, у нас проблема");
  };
}

setInterval(function () {
  const request = new Request();
  console.log(process.memoryUsage().heapUsed);
}, 500);
