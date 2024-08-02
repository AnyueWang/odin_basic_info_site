const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 8080

http.createServer((req, res) => {
  const url = req.url
  let filePath
  switch (url) {
    case '/':
      filePath = './index.html'
      break;
    case '/about':
      filePath = './about.html'
      break;
    case '/contact-me':
      filePath = './contact-me.html'
      break;
    default:
      filePath = './404.html'
      break;
  }
  fs.readFile(path.resolve(__dirname, filePath), (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(data)
    return res.end()
  })
}).listen(port, () => {
  console.log(`The server is running on port ${port}`)
})

