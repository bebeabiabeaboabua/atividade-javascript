//9. autolocadora
const prompt = require('prompt-sync')();

console.log("=== Cálculo de Aluguel de Carro ===");

// Entrada de dados
const taxaDiaria = Number(prompt("Digite a taxa fixa por dia (R$): "));
const taxaPorKm = Number(prompt("Digite a taxa por Km rodado (R$): "));
const diasAluguel = Number(prompt("Digite o número de dias de aluguel: "));
const kmRodados = Number(prompt("Digite a quilometragem rodada (Km): "));

// Cálculos
const descontoDiario = taxaDiaria * 0.10; // 10% de desconto por dia
const taxaDiariaComDesconto = taxaDiaria - descontoDiario;
const valorTotalDiarias = taxaDiariaComDesconto * diasAluguel;
const valorTotalKm = taxaPorKm * kmRodados;
const valorTotalAluguel = valorTotalDiarias + valorTotalKm;

// Saída dos resultados
console.log("\n=== Resumo do Aluguel ===");
console.log(`Número de dias: ${diasAluguel}`);
console.log(`Quilometragem rodada: ${kmRodados} Km`);
console.log(`Desconto aplicado (por dia): R$ ${descontoDiario.toFixed(2)}`);
console.log(`Valor total das diárias: R$ ${valorTotalDiarias.toFixed(2)}`);
console.log(`Valor total por Km rodado: R$ ${valorTotalKm.toFixed(2)}`);
console.log(`VALOR TOTAL DO ALUGUEL: R$ ${valorTotalAluguel.toFixed(2)}`);