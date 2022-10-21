//main array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorra o array imprimindo todos os valores nele contidos com a função console.log();
console.log(numbers);

//Some todos os valores contidos no array e imprima o resultado;
let numbersAdd = 0;
for (i = 0; i < numbers.length; i++){
    numbersAdd = numbersAdd + numbers[i];
}

console.log("Soma dos numeros: ", numbersAdd);

//Calcule e imprima a média aritmética dos valores contidos no array;
//  A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
let numbersAverage = 0;

numbersAverage = numbersAdd / numbers.length;

console.log("Media dos numeros", numbersAverage);
console.log("");

//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
for(i=0; i < numbers.length; i++){
    if(numbers[i] < 20){
        console.log("Este numero: " + numbers[i] + " é menor que 20.");
    } else if (numbers[i] > 20){
        console.log("Este numero: " + numbers[i] + " é maior que 20.");
    } else {
        console.log("Este numero: " + numbers[i] + " é igual a 20.");
    }
}

console.log("");

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let numberSave = 0;
for(i=0; i < numbers.length; i++){
    if (numbers[i] > numberSave){
        numberSave = numbers[i];
    }

}
console.log("O maior numero é: ", numberSave);
console.log("");

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let isOdd = false; 
for(i=0; i < numbers.length; i++){
    if(numbers[i] % 2 == 1){
        console.log("Este numero: " + numbers[i] + " é impar.");
        isOdd = true;
    }
}
if (isOdd == false){
    console.log("Não existe nenhum impar")
}

console.log("");

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let numberLow = numbersAdd;
for(i=0; i < numbers.length; i++){
    if (numbers[i] < numberLow){
        numberLow = numbers[i];
    }

}
console.log("O menor numero é: ", numberLow);
console.log("");

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let newArray = []

for(i=0; i < 25; i++){
    newArray[i] = i;
}

for(let numeros of newArray){
    console.log(numeros + ", ");
}

console.log();
//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for(i=0; i<newArray.length;i++){
    console.log(newArray[i]/2)
}

//<em> fin <em> ;)