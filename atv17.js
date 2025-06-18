//17. qnt impares e pares

prompt = require('prompt-sync')();

let par = 0
let impar = 0


for (let i = 1; i <= 10; i++){
  num = Number(prompt('digite um número: '));
  if (num % 2 == 0){
    par++;
  }else
    impar++;
}
console.log(`${par} pares e ${impar} impares`)