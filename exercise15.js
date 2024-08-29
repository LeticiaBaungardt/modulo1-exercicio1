// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let num1 = 0;
let num2 = 1;
let nextNumber;

console.log(num1);
console.log(num2);

for (let i = 3; i <= 10; i++) {
    nextNumber = num1 + num2;
    console.log(nextNumber);
    num1 = num2;
    num2 = nextNumber;
}
