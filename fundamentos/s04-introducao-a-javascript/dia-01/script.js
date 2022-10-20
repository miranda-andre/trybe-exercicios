const myName = "Andre Miranda";
const birthCity = "San Francisco/CA";
let birthYear = "2002";
console.log(myName + ", " + birthCity + ", " + birthYear);

birthYear = "2030";

console.log(birthYear);
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-")

//Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 
// birthCity = "Sao Paulo"

// irá dar erro pois a variável é constante, logo, não pode ser alterado do valor inicial.
// para solução deverá ser variavel "let".



//3.1.2 typeof
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
    firstName: 'Ana',
    lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-");

//3.1.2 soma  para fixar foguetinho

const base = 5;
const height = 8;
const area = base * height;

console.log(area);

const perimeter = base * 2 + height * 2
console.log(perimeter)

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-");
//3.1.3 if else  fixacao

const candidato = 77;
let resultado = null;

if (candidato >= 80){
 resultado = "parabens"   ;
} else if (candidato < 80 && candidato >= 60){
    resultado = "voce esta na nossa lista de espera";
} else {
    resultado = "voce foi reprovado";
}

console.log(resultado);
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-");

//3.1.4
console.log("Status processo seletivo:");
let status = "lista";
let processo;
switch (status){
    case "aprovado":
    processo = "Parabéns, você foi aprovada(o)!"
    break;

    case "lista":
    processo = "Você está na nossa lista de espera"
    break;

    case "reprovada":
    processo = "Você foi reprovada(o)"
    break;

    default:
    console.log("Informacao incorreta.")
}
 
console.log(processo);


//Lembrete


// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false