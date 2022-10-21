const a = 7;
const b = 6;

let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);


//comparacao entre A e B.
let compara;
if (a > b){
    compara = "A é maior que B";
} else if (a < b){
    compara = "B é maior que A";
}else{
    compara = "Ambos possuem o mesmo valor.";
}
console.log(compara);


//if else maior numero
const num1 = 5;
const num2 = 7;
const num3 = 6;

if (num1 >= num2 && num1 >= num3){
    console.log(num1);
}else if (num2 >= num1 && num2 >= num3){
    console.log(num2);
}else if (num3 >= num1 && num3 >= num2){
    console.log(num3);
}else{
    console.log("brain exploding");
}

//if else positivo,negativo,zero

const num77 = 5;

if (num77 > 0){
    console.log("positive");
} else if(num77 < 0 ){
    console.log("negative");
}else{
    console.log("It's zero.")
}
