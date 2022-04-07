/*
//SIMPLE FUNCTION - AULA EXECUTANDO ARQUIVOS JS COM NODEJS
 function somar(n1,n2){
    console.log(n1+n2);
}
// RODANDO O CÓDIGO ACIMA EM UM INTERVALO DE 2 SEGUNDOS LEMBRAR QUE É TUDO EM MS
setInterval(function(){
  somar(10,20)
},2000)

// SERVIDOR NODE - AULA CRIANDO SERVIDOR NODE, MODULO HTTPS E MAIS
const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1' //HOST
const port = 3000 //PORTA

//LENDO ARQUIVO E RETORNANDO SE FOI CRIADO O ARQUIVO NO CONSOLE
fs.writeFile('danki.txt','rwste danki code',function/err(){
    if(err) throw err;
    console.log('O arquivo foi criado com sucesso')

 
// Cria um novo arquivo ou insere o conteúdo depois do que já existe ao rodar o comando no console

fs.appendFile('danki.txt', '\nOutro conteúdo', (err) => {
  if (err) throw err;
  console.log('Salvo novamente com sucesso');
})

// AULA LER ARQUIVOS COM BASE NA URL
// Se rodar o server e acessar na slug /teste irá ler o arquivo index.html e retornará o console.log como salvo outra vez e criará uma nova linha no txt
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
// VERIFICAÇÃO NO CONSOLE SE ESTÁ RODANDO O SERVER
server.listen(port, hostname, () => {
  console.log('Ta rodando o server')
})
*/

/* const fs = require ('fs');
const read = require ('readline');

fs.readFile('danki.txt', function(err,data){

  let str = data.toString();

  //separador de caracteres
  // let newStr = str.split('/');

  // ler a string e retornar o início da string e quantidade de caracteres(start,length);
  let newStr = str.substr(1,3);

  console.log(newStr);

}) 
const fs = require ('fs');
const read = require ('readline');

// DELETAR ARQUIVOS - AULA RENOMEANDO E DELETANDO ARQUIVOS
fs. unlink('danki.txt',function(err){
  console.log('arquivo foi deletado');
})

// DELETAR ARQUIVOS - AULA RENOMEANDO E DELETANDO ARQUIVOS
fs.rename('nomeAntigo.txt','nomeNovo.txt',function(err){
  console.log('arquivo foi renomeado.');
})

// AULA LENDO INPUT LINHA DE COMANDO
const readline = require ('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//rl.question = pergunta ao usuário
rl.question('Qual seu nome?', function(name){
  console.log('O nome do usuário é: '+name);
  rl.question('Qual sua idade?', function(idade){
    console.log('A idade do ' + name + ' é de ', +idade);
  })
})

rl.on('close',function(){
  console.log('Adeus');
  process.exit(0);
})
*/