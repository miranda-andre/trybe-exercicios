// arquivo script.js

//nextSibling: retorna o próximo nó.
//nextElementSibling: retorna o próximo elemento.

//É importante dizer que, à primeira vista, as propriedades nextSibling e nextElementSibling parecem fazer a mesma coisa, mas uma pega o próximo nó do DOM, enquanto a outra pega o próximo elemento, e nem sempre o próximo nó é um elemento.

//Primeiro, foi selecionado o elemento div utilizando o seu id, ‘start’. Na sequência, aplicadas as propriedades nextSibling e nextElementSibling. Você pode ver que nextSibling retornará o texto “nó” que representa o próximo nó do DOM a partir da div, enquanto nextElementSibling retornará o próximo elemento propriamente, ou seja, o elemento <p>.


console.log(document.getElementById('start').nextSibling) // nó

console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>