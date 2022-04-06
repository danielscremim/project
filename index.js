/* function somar(n1,n2){
    console.log(n1+n2);
}

setInterval(function(){
  somar(10,20)
},2000)
 */
const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

/* fs.writeFile('danki.txt','rwste danki code',function/err(){
    if(err) throw err;
    console.log('O arquivo foi criado com sucesso')

 */
// Cria um novo arquivo ou insere o conetúdo depois do que já existe

fs.appendFile('danki.txt', '\nOutro conteúdo', (err) => {
  if (err) throw err;
  console.log('Salvo novamente com sucesso');
})

const server = http.createServer((req, res) => {
  if (req.url == '/teste') {

    fs.readFile('index.html', function (err, data) {

      fs.appendFile('danki.txt', "\nOutro conteúdo de novo",(err)=>{
      if (err) throw err;
      console.log('salvo outra vez');
    })
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    })
    
  }else {
    // return res.end()
  }
})

server.listen(port, hostname, () => {
  console.log('Ta rodando o server')
})
