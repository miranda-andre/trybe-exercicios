const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

window.onload = function(){
};
// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?


//Por causa da classe .tech que está na primeira caixa.

//
// .tech {
//     transform: translateY(-20px);
//   }
//


// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
let addTech = (event) => {
    event.target.className = "tech";
};

//  - Deve existir apenas um elemento com a classe 'tech'.
let changeElement = (event) => {
    const techElement = document.querySelector('.tech');
    techElement.classList.remove('tech');
    event.target.className = 'tech';
    input.value = '';
};

firstLi.addEventListener('click', changeElement);
secondLi.addEventListener('click', changeElement);
thirdLi.addEventListener('click', changeElement);

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener('input', (event) => {
    const techInput = document.querySelector('.tech');
    techInput.innerText = event.target.value;
  });


// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?

myWebpage.addEventListener('dblclick', () => {
    window.location.href = "http://miranda-andre.github.io";
});

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener('mouseover', (event) => {
    event.target.style.color = "blue";
});

myWebpage.addEventListener('mouseout', (event) => {
    event.target.style.color = "white";
});

// Segue abaixo um exemplo do uso de event.target:


const resetText = (event) => {
    // O Event é passado como um parâmetro para a função.
    event.target.innerText = 'Opção reiniciada';
    // O event possui várias propriedades, porém a mais usada é o event.target,
    // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.