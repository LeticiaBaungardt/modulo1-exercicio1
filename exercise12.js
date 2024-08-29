// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.


const prompt = require('prompt-sync')() //comando para inserir um comando no terminal, parecido com alert e prompt no navegador

let multiplier = 7

for(let counter = 0; counter <= 10; counter++){
    console.log(`${multiplier} * ${counter} =`, multiplier * counter);
}