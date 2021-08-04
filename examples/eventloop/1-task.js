process.stdin.on("data", () => console.log(1));
process.stdin.on("close", () => console.log(2));

process.nextTick(() => console.log(3));

setImmediate(() => console.log(4));

setTimeout(() => console.log(5), 0);

new Promise((resolve) => {
  console.log(6);
  resolve();
}).then(() => console.log(7));

console.log(8);

(async () => {
  await new Promise(() => {
    console.log(9);
  });
})();
