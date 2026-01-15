const http = require("http");

const host = "0.0.0.0";
const port = 3000;

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Date/time now: " + new Date().toString() + "\n");
}).listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}`);
});
