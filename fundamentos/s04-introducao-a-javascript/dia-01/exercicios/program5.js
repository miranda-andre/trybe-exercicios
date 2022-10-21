const anguloA = 55;
const anguloB = 66;
const anguloC = 82;
let isValid = true;

let somaLados = anguloA + anguloB + anguloC;

if (anguloA >= 0 || anguloB >= 0 || anguloC >= 0 && somaLados >= 180){
    isValid = true
}
else {
    isValid = false
}

console.log(isValid)