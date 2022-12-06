const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Adicione o código do exercício aqui:
console.log("FILTRANDO OBJETOS COM SCIFI E FANTASY");
const filterScifiFantasy = (array) => array
    .filter((book) => book.genre === "Ficção Científica" || book.genre === "Fantasia")
const filter = (array, typeOfFilter) => typeOfFilter(array);
console.log(filter(books, filterScifiFantasy));
console.log();

console.log("FILTRANDO (PARA NOME DOS LIVROS) QUE SÃO MAIS ANTIGOS QUE 60 ANOS.");
const olderBooks = (array) => array
    .filter((book) => ((new Date().getFullYear()) - book.releaseYear) > 60)

const listOlderBooks = (array, olderBooks) => olderBooks(array)
    .sort((a, b) => b.releaseYear - a.releaseYear)

console.log(listOlderBooks(books, olderBooks));
console.log();

console.log("SELECIONANDO LIVROS DE ACORDO COM A DATA DE NASCIMENTO DO AUTOR");
const chosenBirthYear = 1920
const booksByAuthorBirthYear = (birthYear) => books
    .filter((book) => book.author.birthYear === birthYear)
    .map((book) => book.name);
console.log(booksByAuthorBirthYear(chosenBirthYear));
console.log();

console.log(`FILTRANDO AUTORES QUE NASCERAM EM: ${chosenBirthYear}`);
const fantasyOrScienceFictionAuthors = (scifiFantasy) => scifiFantasy.map((book) => book.author.name)
console.log(fantasyOrScienceFictionAuthors(filterScifiFantasy(books)));

console.log("Nome de todos os livros com mais de 60 anos de publicação");
const oldBooks = (olderBooks) => olderBooks.map((book) => book.name)
console.log(oldBooks(olderBooks(books)));
console.log();


console.log("Primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.");
const authorWith3DotsOnName = () => books.find((book) => (book.author.name
    .split(' ')
    .filter((word) => word.endsWith('.')).length === 3)).name;
console.log(authorWith3DotsOnName());