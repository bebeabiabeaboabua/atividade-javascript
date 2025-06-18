//2. conversão do dólar para o real

prompt = require('prompt-sync')();

dolar = Number(prompt('digite o valor em dólar: '));
cotacao = Number(prompt('digite a cotação atual do dólar: '));

resultado = dolar * cotacao;

console.log('o valor em reais é: ', resultado);