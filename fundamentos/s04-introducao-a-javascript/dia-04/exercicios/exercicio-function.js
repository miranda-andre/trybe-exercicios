//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

let word = "arara";

function isPalindrome(wordCheck){
    reverse = word.split("").reverse().join("");
    if (reverse == word){
        return true;
    }else{
        return false;
    }
}
console.log(isPalindrome(word));

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let array = [2,3,6,7,10,1]

//jeito que fiz

// function indiceDoMaior(numeros){
//     let indiceMenor = numeros[0];
//     let indiceValor = 0;

//     for(let i in numeros){
//         if (numeros[i] > indiceMenor){
//             indiceMenor = numeros[i];
//             indiceValor++;
//         }
//     }
//     return indiceValor;
// }

// gabarito trybe

function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
  
    return indiceMaior;
  }

console.log(indiceDoMaior(array));
console.log();
//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
let array2 = [2, 4, 6, 7, 10, 0, -3];

function indiceDoMenor(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
      if (numeros[indiceMenor] > numeros[indice]) {
        indiceMenor = indice;
      }
    }
  
    return indiceMenor;
  }

console.log(indiceDoMenor(array2));
console.log();
//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(nome){
    let maiorNome = 0;
    let indice = 0;
    for (let i in nome){
        if (nome[i].length > maiorNome){
            maiorNome = nome[i].length;
            indice = i
        }
    }
    return nome[indice];
}

console.log(maiorNome(nomes));

//do gabarito

// function maiorPalavra(palavras) {
//     let maiorPalavra = palavras[0];
//     for (let indice in palavras) {
//       if (maiorPalavra.length < palavras[indice].length) {
//         maiorPalavra = palavras[indice];
//       }
//     }
  
//     return maiorPalavra;
//   }
  
//   console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda
console.log();

//Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somatorio(numero){
    if(numero < 0){
        return "Nao pode ser negativo.";
    } else{
        soma = 0;
        for (let i=0; i <= numero; i++){
        soma = soma + i;
        }
        return soma;
    }
}
console.log(somatorio(5));

//Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function verifyEnding(word,ending){
    word.split('')
    ending.split('')
    let control = true;

    for (let i = 0; i <= word.length; i++){
        if(word[word.length - ending.length + i] != ending[i]){
            control = false;
        }
    }
    return control;
      
}
console.log(verifyEnding("trybe","ybe"));  

//FORMA B
//Uma outra forma de fazer esse exercício é transformar as strings em arrays com o método split e depois revertê-los com o método reverse. Assim, comparamos em um loop cada posição dos dois arrays e caso alguma seja diferente, retornamos false.


// function verificaFimPalavra(palavra, fimPalavra) {
//     let inversoPalavra = palavra.split('').reverse().join('');
//     let inversoFimPalavra = fimPalavra.split('').reverse().join('');
//     let result;
//     for (let index = 0; index < inversoFimPalavra.length; index += 1) {
//       if (inversoPalavra[index] !== inversoFimPalavra[index]) {
//         result = false;
//         break;
//         break; // O "break" serve para encerrar o loop.
//       } else {
//         result = true;
//       }
//     }
    
//     return result;
//   }
  
//   console.log(verificaFimPalavra('trybe', 'be')); //true
//   console.log(verificaFimPalavra('joaofernando', 'fernan')); //false