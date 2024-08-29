// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.


const prompt = require('prompt-sync')() //comando para inserir um comando no terminal, parecido com alert e prompt no navegador

let soma = 0;

for(let i = 1; i <=5; i++) {
    let num1 = Number(prompt("Digite o " + i + "º número: "));
    soma += num1;
}

console.log("A soma total dos 5 números informados é: " + soma);