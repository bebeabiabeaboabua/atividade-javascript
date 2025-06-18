//19. maior numero

const prompt = require('prompt-sync')();

let contador = 1;
let maior = null;

while (contador <= 10) {
    let num = Number(prompt(`Digite um número: `));

    if (maior === null || num > maior) {
        maior = num;
    }

    contador++;
}

console.log("O maior número é:", maior);