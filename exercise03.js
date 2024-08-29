// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let nota = 6;

if(nota <= 4){
    console.log("Vocês está REPROVADO.")
} else if((nota >= 5) && (nota <= 7)){
    console.log("Vocês está em RECUPERAÇÃO.")
} else {
    console.log("Vocês está APROVADO.")
};