// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.


const prompt = require('prompt-sync')() //comando para inserir um comando no terminal, parecido com alert e prompt no navegador

let peso = parseFloat(prompt("Informe o seu peso em kg: "));
let altura = parseFloat(prompt("Informe a sua altura em metros (Ex.: 1.70): "));

const imc = peso / (altura * altura);

console.log(`Seu IMC é: ${imc.toFixed(2)}`);

if(imc < 18.5){
    console.log("Sua categoria é: Abaixo do peso!");
}else if((imc => 18.5) && (imc <= 24.9)){
    console.log("Sua categoria é: Peso norma!");
}else if((imc => 25) && (imc <= 29.9)){
    console.log("Sua categoria é: Sobrepeso!");
}else if(imc > 30){
    console.log("Sua categoria é: Obesidade!");
}