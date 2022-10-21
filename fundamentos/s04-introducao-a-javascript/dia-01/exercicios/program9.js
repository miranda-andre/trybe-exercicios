//Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
//Bonus: use somente um if.

const num1 = 4;
const num2 = 2;
const num3 = 2;

let isTrue = true;

if (num1 % 2 == 1 || num2 % 2 == 1 || num3 % 2 == 1){
    isTrue = true;
}else{
    isTrue = false;
}

console.log(isTrue)