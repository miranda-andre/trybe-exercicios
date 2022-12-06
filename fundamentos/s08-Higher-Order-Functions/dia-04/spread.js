// array original
const items = ['Camiseta', 'Carregador', 'Chinelo'];

// nova variável
const newItems = [...items, 'Pão', 'Geleia', 'Manteiga de Amendoim'];

console.log(newItems);



const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);



const product = {
    id: 1,
    name: 'Camiseta',
};

const newProduct = {
    ...product,
    pbnj: 'Peanut Butter n Jelly'
}

console.log(newProduct);


const producta = {
    id: 1,
    name: 'Camiseta',
};

const productPrice = {
    price: 23
}

const totalProduct = {
    ...producta,
    ...productPrice
}

console.log(totalProduct); 

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800


// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Manga', 'Morango', 'Kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Maca', 'Banana', 'Pessego'];

const fruitSalad = (fruit, additional) => [...fruit,...additional];

console.log(fruitSalad(specialFruit, additionalItens));