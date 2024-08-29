// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')() //comando para inserir um comando no terminal, parecido com alert e prompt no navegador

let num1 = Number(prompt("Ensira um valor: "));

let fatorial = num1;

for(let i = 1; i < num1; i++) {
    fatorial *= i;
}

console.log(fatorial);