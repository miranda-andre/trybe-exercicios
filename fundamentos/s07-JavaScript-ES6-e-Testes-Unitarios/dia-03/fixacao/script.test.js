//Você pode verificar se um array contém um item em particular utilizando toContain. Para verificar que um item possui uma estrutura mais complexa, utilize toContainEqual. toHaveLength permite facilmente verificar o tamanho de um array ou de uma string.

//Exemplo: o código da função abaixo addNewSkill adiciona uma nova habilidade em uma lista de habilidades skills. No teste, podemos avaliar se o tamanho da lista aumentou em um; ou, ainda, se a lista contém a nova habilidade após a função ser executada.



const skills = ['HTML', 'CSS', 'JavaScript'];

const addNewSkill = (newSkill) => {
  skills.push(newSkill);
}

test('Adiciona Jest na lista de habilidades', () => {  
  const previousLength = skills.length;
  addNewSkill('Jest');
  expect(skills).toContain('Jest');
  expect(skills).toHaveLength(previousLength + 1);
});

// É bastante comum testar se um objeto possui uma propriedade específica. O matcher toHaveProperty é ideal para esses casos. Por exemplo, podemos avaliar se, ao criar um objeto com e-mail e senha, o objeto realmente tenha essas propriedades. Mais ainda: podemos testar se o valor da propriedade de e-mail tem o valor adequado.

const createUser = (firstName, lastName) => {
  const user = {
    email: (firstName + '_' + lastName + '@example.com').toLowerCase(),
    password: Math.floor(Math.random() * 100000000),
  };
  return user;
}

test('Cria email e senha', () => {
  const user = createUser('Mona', 'Lisa');
  expect(user).toHaveProperty('email', 'mona_lisa@example.com');
  expect(user).toHaveProperty('password');
});


// Para testes de fluxos de exceções e de lançamentos de erros com o throw, podemos utilizar o matcher toThrow. Este matcher será usado para testar se uma função é capaz de lançar um erro quando executada. Por exemplo, se quisermos testar uma função verificaNumeros('string') passando uma string como parâmetro. O matcher toThrow irá testar o erro retornado pela função para verificar se a mensagem de erro está correta, por exemplo. Para testar se uma função está retornando um erro, é importante ter atenção à sintaxe do .toThrow:

const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido');
  }
  return number * 2;
};
multiplyByTwo(4);

test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
  expect(multiplyByTwo(4)).toBe(8);
});
test('testa se é lançado um erro quando number é indefinido', () => {
  expect(() => { multiplyByTwo() }).toThrow();
});
test('testa se a mensagem de erro é "number é indefinido"', () => {
  expect(() => { multiplyByTwo() }).toThrow(new Error('number é indefinido'));
});


//not permite testar o oposto de algo. Por exemplo, este código testa que domingo é um dia da semana, mas não um dia útil:

const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});