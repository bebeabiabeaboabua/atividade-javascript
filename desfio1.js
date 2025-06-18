
//salário aumento

prompt = require('prompt-sync')();

salario = Number(prompt('Digite seu salário: '));

if(salario > 0){
  if(salario <= 280){
    let percentual = 20;
    let aumento = salario * (percentual / 100);
    let novoSalario = salario + aumento;
    console.log(`Salário antes do reajuste: ${salario}`);
    console.log(`Percentual de aumento aplicado: ${percentual}%`);
    console.log(`Valor do aumento: ${aumento}`);
    console.log(`Novo salário após o aumento: ${novoSalario}`);
      }else if(salario > 280 && salario <= 700){
        let percentual = 15;
        let aumento = salario * (percentual / 100);
        let novoSalario = salario + aumento;
        console.log(`Salário antes do reajuste: ${salario}`);
        console.log(`Percentual de aumento aplicado: ${percentual}%`);
        console.log(`Valor do aumento: ${aumento}`);
        console.log(`Novo salário após o aumento: ${novoSalario}`);
          }else if(salario > 700 && salario <= 1500){
            let percentual = 10;
            let aumento = salario * (percentual / 100);
            let novoSalario = salario + aumento;
            console.log(`Salário antes do reajuste: ${salario}`);
            console.log(`Percentual de aumento aplicado: ${percentual}%`);
            console.log(`Valor do aumento: ${aumento}`);
            console.log(`Novo salário após o aumento: ${novoSalario}`);  
              }else if(salario > 1500){
                let percentual = 5;
                let aumento = salario * (percentual / 100);
                let novoSalario = salario + aumento;
                console.log(`Salário antes do reajuste: ${salario}`);
                console.log(`Percentual de aumento aplicado: ${percentual}%`);
                console.log(`Valor do aumento: ${aumento}`);
                console.log(`Novo salário após o aumento: ${novoSalario}`);  
              }
}else{
  console.log('Salário inválido');
}