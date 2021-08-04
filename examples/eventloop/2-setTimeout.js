const http = require("http");

const server = http.createServer(() => {});

server.listen();
server.on("close", () => console.log("close"));

setTimeout(() => server.close(), 3000);
