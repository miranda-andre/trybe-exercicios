const pessoas = [
    { nome: 'Ana', cargo: 'Analista' },
    { nome: 'João', cargo: 'Gerência' },
    { nome: 'Aline', cargo: 'Analista' },
    { nome: 'Joana', cargo: 'Gerência' },
  ];
  
  let verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');
  
  console.log(verificaCargo); // true

  verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Product Owner');
  
  console.log(verificaCargo); // false


  const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('X', listNames)); // false
console.log();

//fixacao
console.log('-=-= fixacao: =-=-');
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((hasName) => hasName === name)

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));