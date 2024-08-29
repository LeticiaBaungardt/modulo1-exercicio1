// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.


const prompt = require('prompt-sync')() //comando para inserir um comando no terminal, parecido com alert e prompt no navegador

let num1 = Number(prompt("Insira um número inteiro: "))

let variable = 10;

for(let i = 0; i < variable; i++) {
    console.log(num1);
}