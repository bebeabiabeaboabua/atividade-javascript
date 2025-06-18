//4. salario mensal

prompt = require('prompt-sync')();

salarioMensal = Number(prompt('digite o salário mensal: '));
reajuste = Number(prompt('digite o percentual de reajuste: '));

resultado = salarioMensal + (salarioMensal * reajuste / 100);

console.log('o salário reajustado é: ', resultado);