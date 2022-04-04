const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 5000

const server = http.createServer((req, res) => {
  if ((req, url == '/danki')) {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  } else {
    // return res.end()
  }
})
/* const server = http.createServer((req,res)=>{

  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');

  res.end("This is a server")
})
 */

server.listen(port, hostname, () => {
  console.log('Ta rodando o server')
})
