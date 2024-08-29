// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.


const prompt = require('prompt-sync')() //comando para inserir um comando no terminal, parecido com alert e prompt no navegador

let valor1 = Number(prompt("Informe o primeiro valor: "));
let valor2 = Number(prompt("Informe o segundo valor: "));

if(valor1 === valor2) {
    console.log("Erro: Informe valores que não sejam iguais!")
}else{
    if(valor1 > valor2){
        console.log(`Ordem crescente é: ${valor2}, ${valor1}`);
    }else if(valor1 < valor2){
        console.log(`Ordem crescente é: ${valor1}, ${valor2}`);
    }
}

