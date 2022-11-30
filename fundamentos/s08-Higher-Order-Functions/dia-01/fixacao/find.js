const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

console.log(idades.find((idade) => idade < 20)); // 18
console.log(idades.find((idade) => idade > 50)); // 73
console.log(idades.find((idade) => idade === 33)); // undefined

const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyNumbers = numbers.find((number) => number % 2 === 0);

// console.log(verifyNumbers); // 30

//fixacao
//Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
console.log(numbers.find((num)=> num % 3 === 0 && num % 5 === 0));

//Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];
console.log(names.find((name) => name.length === 5 ));

//or option:
// const verifyName = names.find(names.find((name) => name.length === 5 ));
// console.log(verifyName);

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  // Adicione seu código aqui
const findMusic = musicas.find((music) => music.id === '31031685')
console.log(findMusic);