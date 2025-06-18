//10. energia

prompt = require('prompt-sync')();

taxaConsumo = Number(prompt('digite a taxa de consumo: '));
horasLigado = Number(prompt('digite o número de horas ligado: '));
valorWattHora = Number(prompt('digite o valor do watt hora: '));

energiaTotalGasta = taxaConsumo * horasLigado;

valorTotal = energiaTotalGasta * valorWattHora;

console.log('energia total gasta: ',energiaTotalGasta);
console.log('valor total a ser pago: ',valorTotal);