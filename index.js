var http = require('http')

const port = 8080

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World!')
}).listen(port, ()=>{
  console.log(`The server is running on port ${port}`)
})