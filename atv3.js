//3. vale transporte

prompt = require('prompt-sync')();

horas = Number(prompt('digite o número de horas trabalhadas: '));
valorHora = Number(prompt('digite o valor da hora trabalhada: '));

salario = horas * valorHora;

valeTransporte = salario * 0.06;

salarioFinal = salario - valeTransporte;

console.log('o desconto é de ', valeTransporte);
console.log('o salário final é: ', salarioFinal);