const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  
  const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
    objeto[novaPropriedade] = valor
  };
  
  adicionaPropriedade(customer, newKey, lastName);
  console.log(customer);
  
  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  
  adicionaPropriedade(customer, newKey, fullName);
  console.log(customer);

//   LEITURA DE DADOS TESTE
  console.log(`Dados do cliente ${customer.firstName}:
  Nome completo: ${customer.fullName}: 
  Idade: ${customer.age}
  Emprego: ${customer.job}`);

//   Agora que você viu diferentes formas de associar chaves e valores a um objeto, que tal praticar? Adicione suas informações ao objeto pessoaEstudante = {}, como nome, email, telefone, github e linkedIn, usando os métodos aprendidos neste conteúdo.