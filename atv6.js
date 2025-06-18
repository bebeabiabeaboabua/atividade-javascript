//6.latas

const aluminioPorMetroQuadrado = 100

prompt = require('prompt-sync')();

const raio = Number(prompt('digite o raio do cilindro: '));
const altura = Number(prompt('digite a altura do cilindro: '));

const PI = 3.14;


const areaLateral = 2 * PI * raio * altura;
const areaBase = 2 * PI * raio * raio;
const areaTotal = areaLateral + areaBase;


const valorFinal = areaTotal * aluminioPorMetroQuadrado;

console.log('Custo total do alumínio: R$', valorFinal.toFixed(2));