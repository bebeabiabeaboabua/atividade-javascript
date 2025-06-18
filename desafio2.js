const prompt = require('prompt-sync')();

// Pede a data
const data = prompt("Digite sua data de aniversário (DD/MM/AAAA): ");

// Verifica se tem 2 barras e 3 partes
if (!data.includes('/') || data.split('/').length !== 3) {
    console.log("Formato inválido! Use DD/MM/AAAA");
} else {
    // Divide a data
    const [dia, mes, ano] = data.split('/');

    // Lista de meses
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    // Verifica se os valores são números e estão em intervalos razoáveis
    if (isNaN(dia) || isNaN(mes) || isNaN(ano) || dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 1900 || ano > new Date().getFullYear()) {
        console.log("Data inválida!");

    } else {
        console.log(`Você nasceu em ${dia} de ${meses[parseInt(mes)-1]} de ${ano}`);
    }
}