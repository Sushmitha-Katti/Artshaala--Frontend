var http = require('http');

var server = http.createServer((req,res) => {
  console.log(req)
}).listen(80, err => {
  if(err){
    throw err;
  }
  console.log('http server running at port: 80')
})