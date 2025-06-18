//1. media de três números
console.log('digite três números para fazer a média deles');

prompt = require('prompt-sync')();

num1 = Number(prompt('digite o primeiro número: '));
num2 = Number(prompt('digite o segundo número: '));
num3 = Number(prompt('digite o terceiro número: '));

media = (num1 + num2 + num3) / 3;

console.log('a média dos números é: ', media);