//Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
//Bonus: use somente um if.

const num1 = 5;
const num2 = 1;
const num3 = 3;

let isTrue = true;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0){
    isTrue = true;
}else{
    isTrue = false;
}

console.log(isTrue)