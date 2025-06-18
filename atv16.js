//16. gerador de tabuada

prompt = require('prompt-sync')();

num = Number(prompt('digite o número: '));

for (let i = 1; i <= num; i++)
  console.log(num,'x',i,'=',num*i);