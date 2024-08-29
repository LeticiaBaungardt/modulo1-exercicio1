// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.

let idade = 15;

if((idade >= 0) && (idade <= 12)) {
    console.log("Sua faixa etária é INFANTIL.")
} else if((idade >= 13) && (idade <= 17)) {
    console.log("Sua faixa etária é ADOLESCENTE.")
} else if((idade >= 18) && (idade <= 64)) {
    console.log("Sua faixa etária é ADULTO.")
} else if(idade >= 65) {
    console.log("Sua faixa etária é IDOSO.")
};