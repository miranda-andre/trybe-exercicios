// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é: X
// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
// 3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
// 4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
// Bônus: Crie a condição utilizando operador ternário.
// 5 - Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.



// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
let soma = 0;

for (let i = 1; i <= 50; i++) {
    soma = soma + i;
}
// A soma total de 1 a 50 é: X
console.log("A soma total de 1 a 50 é: " + soma);

console.log();
// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.

let numero = 0;
for (let i = 2; i <= 150; i++) {

    if (i % 3 == 0) {
        numero++;
    }
}
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
if (numero == 50) {
    console.log("Easteregg! Mensagem Secreta: quantidade de numeros divisiveis por 3 são: " + numero);
} else {
    console.log("Quantidade de numeros divisiveis por 3" + numero);
}

// 3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 


//PSYCHO WAY

let jokenpo = ["rock", "paper", "scissors"]
let randomP1 = (Math.floor(Math.random() * 3));
let randomP2 = (Math.floor(Math.random() * 3));
let player1 = randomP1;
let player2 = randomP2;
// 0 = Pedra
// 1 = Papel
// 2 = Tesoura

// win  lose
// 0    2
// 1    0
// 2    1
if((jokenpo[player1] == jokenpo[player2])){
    console.log("Player 1: " + jokenpo[player1]);
    console.log("Player 2: " + jokenpo[player2]);
    console.log("A Tie!");
} else if((jokenpo[player1] == jokenpo[0] && jokenpo[player2] == jokenpo[2]) || (jokenpo[player1] == jokenpo[1] && jokenpo[player2] == jokenpo[0]) || (jokenpo[player1] == jokenpo[2] && jokenpo[player2] == jokenpo[1])){
    console.log("Player 1: " + jokenpo[player1]);
    console.log("Player 2: " + jokenpo[player2]);
    console.log("Player 1 won!");
} else{
    console.log("Player 1: " + jokenpo[player1]);
    console.log("Player 2: " + jokenpo[player2]);
    console.log("Player 2 won!");
}
console.log();

//Normal way
let person1 = 'scissors';
let person2 = 'rock';

if ((person1 === 'paper' && person2 == 'rock') || (person1 === 'rock' && person2 === 'scissors') || (person1 === 'scissors' && person2 === 'paper')) {
} else if (person1 === person2) {
  console.log('A Tie');
} else {
  console.log('Player 2 won');
}
 console.log();
// 4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
// Bônus: Crie a condição utilizando operador ternário.

//with conditional operator
let age = 18;

condition = (age >= 18) ? "the person is +18.":"the person is under 18.";
console.log(condition);

//or this
console.log("The person is: " + (age < 18 ? "under age":"over 18."));

// 5 - Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let ageCarol = 18;
let ageMurilo = 16;
let ageBaeta = 19;

if (ageCarol < ageMurilo && ageCarol < ageBaeta) {
  console.log('Carolzita é a mais nova');
} else if (ageMurilo < ageCarol && ageMurilo < ageBaeta) {
  console.log('Murilo é o mais novo');
} else {
  console.log('Baeta é é o mais novo');
}