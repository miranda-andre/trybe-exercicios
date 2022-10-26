//Crie uma função que ligue e desligue um motor de um carro.

//Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);

statusMotor = `desligado`;

const ligaDesliga = () => (
//bonus com ternary operator
 statusMotor === `desligado` ? statusMotor = `ligado` : statusMotor = `desligado`
)

console.log(`O motor está ${ligaDesliga()}`);
console.log(`O motor está ${ligaDesliga()}`);
console.log(`O motor está ${ligaDesliga()}`);
console.log();
//🚀 Crie uma função que calcule a área de um círculo.
// Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado.

const radius = 5;

const circleArea = radius =>{
    const area = Math.PI * Math.pow(radius,2)

    return area;
}

console.log(`Essa é a area do circulo: ${circleArea(radius)}`);

//🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

const frase = 'Antônio foi no banheiro e não sabemos o que aconteceu'

const longestWord = phrase => {
    let wordCounter = 0;
    let longWord = '';
    splitPhrase = phrase.split(' ');
    
    for(const word of splitPhrase){
        if(word.length > wordCounter){
            longWord = word;
            wordCounter = word.length;
        }
    }
    return (`A maior palavra nesta frase é: "${longWord}" com ${wordCounter} letras.`);
}

console.log(longestWord(frase));

//COMPARAR COM GABARITO:
//OBS: não foi consultado.

// const longestWord = (text) => {
//     const wordArray = text.split(' ');
//     let maxLength = 0;
//     let result = '';
  
//     for (const word of wordArray) {
//         if (word.length > maxLength) {
//             maxLength = word.length;
//             result = word;
//         }
//     }
  
//     return result;
//   }
  
//   console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

// E TAMBÉM COM SORT();
// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));

//by andre-miranda