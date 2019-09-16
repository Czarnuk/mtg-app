const http = require('http');
const static = require('node-static');

const fileServer = new static.Server('./public');

http.createServer((req, res) => {
  fileServer.serve(req, res);
}).listen(8000);
