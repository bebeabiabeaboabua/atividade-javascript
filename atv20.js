//20. quadrado

const prompt = require('prompt-sync')();


let tamanho = Number(prompt('Digite o tamanho do lado do quadrado (1-20): '));


if (isNaN(tamanho) || tamanho < 1 || tamanho > 20) {
    console.log('Tamanho inválido! Digite um número entre 1 e 20.');
} else {
    
    for (let linha = 1; linha <= tamanho; linha++) {
        let conteudoLinha = '';

        for (let coluna = 1; coluna <= tamanho; coluna++) {
            if (linha === 1 || linha === tamanho || coluna === 1 || coluna === tamanho) {
                conteudoLinha += '* ';
            } else {
                conteudoLinha += '  '; 
            }
        }

        console.log(conteudoLinha);
    }
}