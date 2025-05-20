// 4-http.js

const http = require('http');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
