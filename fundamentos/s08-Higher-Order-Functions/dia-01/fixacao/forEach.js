// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

// arrayOfValues.forEach((element, index) => {
//   console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
// });

const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

pessoasAprovadas.forEach((nome,index) => pessoasAprovadas[index] = nome.toUpperCase());

console.log(pessoasAprovadas);
console.log();

// ++==++==++==++==++==++==++==++==++==++==++==++==

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multiply = (number) => console.log(number * 2);

numbers.forEach(multiply);   // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

// ++==++==++==++==++==++==++==++==++==++==++==++==

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  // Adicione seu código aqui
emailListInData.forEach(email => {
    console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
});