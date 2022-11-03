//localStorage - salva os dados sem data de expiração. Os dados não serão removidos quando o browser for fechado, ou seja, eles ficarão disponíveis enquanto não forem explicitamente removidos.
console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0
localStorage.setItem('firstname', 'Adam'); // salva uma entrada com a key = 'firstname' e value = 'Adam'
localStorage.setItem('lastname', 'Smith'); // salva uma entrada com a key = 'lastname' e value = 'Smith'
console.log(localStorage.getItem('lastname')); // retorna o valor 'Smith'
console.log(localStorage.length); // possui duas entradas, então o retorno é o valor: 2
localStorage.removeItem('lastname'); // remove a entrada referente a key = 'lastname'
console.log(localStorage.length); // possui uma entrada, então o retorno é o valor: 1
localStorage.clear(); // limpa todas as entradas salvas em localStorage
console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0



//sessionStorage - salva os dados apenas para a sessão atual. Os dados são removidos assim que a pessoa fecha a aba (tab) ou o navegador (browser).


console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0
sessionStorage.setItem('firstname', 'Adam'); // salva uma entrada com a key = 'firstname' e value = 'Adam'
sessionStorage.setItem('lastname', 'Smith'); // salva uma entrada com a key = 'lastname' e value = 'Smith'
console.log(sessionStorage.getItem('lastname')); // retorna o valor 'Smith'
console.log(sessionStorage.length); // possui duas entradas, então o retorno é o valor: 2
sessionStorage.removeItem('lastname'); // remove a entrada referente a key = 'lastname'
console.log(sessionStorage.length); // possui uma entrada, então o retorno é o valor: 1
sessionStorage.clear(); // limpa todas as entradas salvas em sessionStorage
console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0//OBS: Tanto o localStorage quanto o sessionStorage armazenam dados no formato chave e valor e os valores salvos serão sempre no formato string.



