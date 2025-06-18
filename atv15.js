//15. numeros no intervalo de dois numeros

prompt = require('prompt-sync')();

let num1 = Number(prompt('digite o primeiro número: '));
let num2 = Number(prompt('digite o segundo número: '));
let soma = 0;
for (let i = num1; i <= num2; i++)
  soma += i;
console.log('soma: ',soma);