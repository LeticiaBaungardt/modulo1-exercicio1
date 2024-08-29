// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')() //comando para inserir um comando no terminal, parecido com alert e prompt no navegador

let num1 = parseFloat(prompt("Digite um número decimal (ou 0 para encerrar): "))
let counter = 0;
let sum = 0;


while(num1 !== 0){
    sum += num1;
    counter++;
    num1 = Number(prompt("Digite outro número: "));
}

console.log("A média aritmética é: ", (sum/counter).toFixed(2));