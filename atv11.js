//11. notas

prompt = require('prompt-sync')();

do{
  nota = Number(prompt('digite a nota entre 0 e 10: '));
  console.log('nota inválida');
}while (nota < 0 || nota > 10)