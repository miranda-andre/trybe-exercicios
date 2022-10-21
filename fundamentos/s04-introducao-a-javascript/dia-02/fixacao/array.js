let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];


//Obtenha o valor “Serviços” do array menu:
console.log(menuServices);

//Procure o índice do valor “Portfólio” do array menu:
let indexOfPortfolio = menu.indexOf('Serviços');

console.log(indexOfPortfolio);

//Adicione o valor “Contato” no final do array menu:
//lembrete pessoal: .push final; .unstaged inicio;
//remover .pop() final; .unshift inicio
menu.push('Contato');

console.log(menu);