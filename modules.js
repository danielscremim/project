function helloDanielModule(){
  console.log('Test is right!');
}

var num = 10;

var obj = {nome: 'Daniel', idade: '21'}

exports.helloDanielModule = helloDanielModule;
exports.qualquernome = num;
exports.obj = obj;
