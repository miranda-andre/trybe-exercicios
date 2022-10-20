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
