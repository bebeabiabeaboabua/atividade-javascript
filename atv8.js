//8. nome idade e peso

const prompt = require('prompt-sync')();

// Ler dados da primeira pessoa
console.log("\nDados da pessoa 1:");
const nome1 = prompt('Nome: ');
const idade1 = Number(prompt('Idade: '));
const peso1 = Number(prompt('Peso (kg): '));

// Ler dados da segunda pessoa
console.log("\nDados da pessoa 2:");
const nome2 = prompt('Nome: ');
const idade2 = Number(prompt('Idade: '));
const peso2 = Number(prompt('Peso (kg): '));

// Ler dados da terceira pessoa
console.log("\nDados da pessoa 3:");
const nome3 = prompt('Nome: ');
const idade3 = Number(prompt('Idade: '));
const peso3 = Number(prompt('Peso (kg): '));

// Calcular médias
const mediaIdade = (idade1 + idade2 + idade3) / 3;
const mediaPeso = (peso1 + peso2 + peso3) / 3;

// Exibir resultados
console.log('\n=== Resultados ===');
console.log(`Média de idade: ${mediaIdade.toFixed(1)} anos`);
console.log(`Média de peso: ${mediaPeso.toFixed(1)} kg`);