//O fatorial
//Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let fatorial =  1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);
console.log();

//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'Trybe';
let reverseWord = '';

for (let index = 0; index < word.length; index++){
    reverseWord += word[word.length - 1 - index];
}
console.log(word);
console.log(reverseWord);
console.log();

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];
let smallestWord = array[0];

for(let i=0;i < array.length; i++){
    if(array[i].length > biggestWord.length){
        biggestWord = array[i];
    }
}

for(let i=0; i < array.length; i++){
    if(array[i].length < smallestWord.length){
        smallestWord = array[i];
    }
}

console.log(biggestWord);
console.log(smallestWord);

//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let biggestPrime = 0;
    for(let currentNumber = 2; currentNumber <= 50; currentNumber++){
    let isPrime = true;

    //Executa todo numero atual com o seu divisor (todo numero abaixo dele) exemplo:
    //numero atual: 5
    //numeroDivisor: 1,2,3,4,5
    //numero atual: 9
    //numeroDivisor: 1,2,3,4,5,6,7,8,9
        for(let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor++){

            //verifica se o numero atual: currentNumber dividido pelo divisor atual: currentDivisor
            //é divisivel (% resto 0), caso verdadeiro, o numero não é primo, sendo FALSE.
            if(currentNumber % currentDivisor === 0){
                isPrime = false
            }
        }
        //pega o ultimo currentNumber isPrime.
        //ou seja, 47 (isPrime True)
        if(isPrime){
            biggestPrime = currentNumber;
        }
    }

    console.log(biggestPrime);

    //Desafio
    let bkpsquare = 5;


    let square = bkpsquare;
    let draw = '*';
    let line = '';
    for(i = 0; i < square; i++){
        line = line + draw;        
    }

    for(j=0; j < square; j++){
        console.log(line);
        }


    console.log();
    
    //Desafio2
    square = bkpsquare;
    line = '';
    
    for(i=0;i< square;i++){
        line = line + draw;
        console.log(line);
    }
console.log();

   //Desafio3
   square = bkpsquare;
   line = '';
   posicao = square -1;
   
   for(let lineindex = 0; lineindex < square; lineindex++){
    for(let columnindex = 0; columnindex < square; columnindex++){
        if(columnindex < posicao){
            line = line + ' ';
        } else{
            line = line + draw;
        }
    }
    console.log(line);
    line = '';
    posicao -= 1;
   };
   