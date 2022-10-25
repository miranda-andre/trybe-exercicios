// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

let carz = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in carz) {
    console.log(index, carz[index]);
  }

//resultado:
//      type Fiat
//      model 500
//      color white

//O for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não
//dos índices como o for/in:
let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

//FIXACAO:
//Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for(let i in names){
  console.log('Olá ' + names[i]);
};
console.log();

//Teste pessoal:
let namesTwo = ['João', 'Maria', 'Jorge'];

for(let i of namesTwo){
  console.log('Ola ' + i);
}
console.log();
//Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse
//objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let i in car){
  console.log(i, car[i]);
}