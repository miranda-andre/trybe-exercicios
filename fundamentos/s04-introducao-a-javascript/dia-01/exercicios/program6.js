const name = "pawn";
let movement;

switch(name){
    case "pawn":
        movement = "O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo."
        break;
    case "tower":
        movement = "A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças"
        break;
    case "knight":
        movement = "É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa."
        break;
    case "bishop":
        movement = "O bispo move-se ao longo da diagonal. Não pode pular outras peças."
        break;
    case "queen":
        movement = "A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças."
        break;
    case "king":
        movement = "O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez."
        break;
    default:
        movement = "N/A"
        break;
}

console.log(movement)