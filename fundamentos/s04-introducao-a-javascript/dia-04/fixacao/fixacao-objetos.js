//Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };


let dados = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
};
// POSSUI DUAS FORMAS DE INSERIR:
// DADOS['VALOR'] E DADOS.VALOR
console.log('Nome completo: ' + dados.name + ' ' + dados['lastName']);


dados.fullName = dados.name + ' ' + dados.lastName;

console.log('Nome completo: ' + dados.fullName);
console.table(dados);