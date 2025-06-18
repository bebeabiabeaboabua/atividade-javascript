//18. fibonacci

const prompt = require('prompt-sync')();

const quantidade = Number(prompt('Quantos números da sequência Fibonacci você quer? '));

let anterior = 0;
let atual = 1;

console.log('Sequência Fibonacci:');

for (let i = 0; i < quantidade; i++) {
  console.log(atual);

  let proximo = anterior + atual;

  anterior = atual;
  atual = proximo;
  }