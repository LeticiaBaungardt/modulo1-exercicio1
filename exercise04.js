// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.


//instale o prompt sync, digitando no terminal: 'npm install prompt-sync'

const prompt = require('prompt-sync')() //comando para inserir um comando no terminal, parecido com alert e prompt no navegador

const menuInterativo = 
    console.log("Bem vindo ao menu interativo, escolha uma opção:");
    console.log("1. Fazer soma.");
    console.log("2. Fazer subtração.");
    console.log("3. Sair.");

let optionUser = Number(prompt("Digite a opção escolhida: "));

switch (optionUser) {
    case 1:
        console.log('Você escolheu a opção 1: Fazer soma.');
        const num1 = parseFloat(prompt('Digite o primeiro número: '));
        const num2 = parseFloat(prompt('Digite o segundo número: '));
        const soma = parseFloat(num1) + parseFloat(num2);
        console.log('A soma dos números é: ' + soma);
        break;

    case 2:
        console.log('Você escolheu a opção 2: Fazer subtração.');
        const num3 = parseFloat(prompt('Digite o primeiro número: '));
        const num4 = parseFloat(prompt('Digite o segundo número: '));
        const subtração = parseFloat(num3) - parseFloat(num4);
        console.log('A subtração dos números é: ' + subtração);
        break;

    case 3:
        console.log("Retornando ao menu. Até mais!");
        break;
    
    default:
        console.log("Opção inválida. Tente novamente.");
        break;
}