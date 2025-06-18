//12. usuario e senha

prompt = require('prompt-sync')();

do{
  let usuario = prompt('digite o usuário: ');
  let senha = prompt('digite a senha: ');
  if (usuario != senha){
    console.log('usuário e senha válidos');
  }else
    console.log('usuário e senha iguais, digite novamente');
}while(usuario == senha)