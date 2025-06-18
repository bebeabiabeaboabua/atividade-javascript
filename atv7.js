//7. conversões

const prompt = require('prompt-sync')();

// 1. Conversão de Fahrenheit para Celsius
function converterFahrenheitParaCelsius(tempF) {
    const tempC = (tempF - 32) * 5 / 9;
    return tempC.toFixed(2); // Arredonda para 2 casas decimais
}

// 2. Conversão de polegadas para milímetros
function converterPolegadasParaMilimetros(polegadas) {
    const POLEGADA_EM_MM = 25.4; // 1 polegada = 25.4 mm
    return (polegadas * POLEGADA_EM_MM).toFixed(2);
}


// --- Programa principal ---
console.log("Escolha uma opção:");
console.log("1. Converter Fahrenheit para Celsius");
console.log("2. Converter polegadas de chuva para milímetros");

const opcao = prompt("Digite 1 ou 2: ");

if (opcao === "1") {
    const tempF = Number(prompt("Digite a temperatura em Fahrenheit: "));
    const tempC = converterFahrenheitParaCelsius(tempF);
    console.log(`${tempF}°F equivalem a ${tempC}°C`);
} else if (opcao === "2") {
    const chuvaPol = Number(prompt("Digite a quantidade de chuva em polegadas: "));
    const chuvaMil = converterPolegadasParaMilimetros(chuvaPol);
    console.log(`${chuvaPol} polegadas de chuva equivalem a ${chuvaMil} mm`);
} else {
    console.log("Opção inválida!");
}