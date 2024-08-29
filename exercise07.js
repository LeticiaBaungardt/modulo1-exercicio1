// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.


const prompt = require('prompt-sync')() //comando para inserir um comando no terminal, parecido com alert e prompt no navegador


let menuVenda=
    console.log("Promoção de maçãs, leve mais e pague menos:");
    console.log("Maçãs pelo valor de R$0.30 cada.");
    console.log("Comprando acima de 12 unidades, elas saem a R$0.25 cada.");

let macasCompradas = prompt("Informe a quantidade de maçãs que deseja comprar: ");

//veerificador de número inteiro para o pedido de maçãs
let verificarInt = Number.isInteger(macasCompradas);

if(verificarInt != true){
    console.log("Valor inválido, informe um valor inteiro de maçãs que deseja comprar!");
    return;
}

let promo1 = (macasCompradas * 0.30);
let promo2 = (macasCompradas * 0.25);

if(macasCompradas < 12){
    console.log(`O valor a ser pago é de R$${promo1}`);
}else if(macasCompradas >= 12){
    console.log(`O valor a ser pago é de R$${promo2}`);
}