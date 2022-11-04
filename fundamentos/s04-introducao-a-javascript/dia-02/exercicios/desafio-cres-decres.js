let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


//Crescente
for(let i = 0; i < numbers.length; i++){

    // Percorrer cada ' i ' (numbers.length-i-1 = vai na posicao atual em que o i está.)
    for(let j = 0; j < (numbers.length-i-1); j++){
       
      //Verifica se o numero atual é maior que o proximo com condição
      if(numbers[j] > numbers[j+1]){
         
        // Se condição for verdadeira, trocar de posição ( entre j e j+1 )( nova posicao: j+1, j )
        let t = numbers[j]
        numbers[j] = numbers[j + 1]
        numbers[j+1] = t
      }
    }
}

  // Print
  console.log(numbers);


  //Decrescente
for(let i = 0; i < numbers.length; i++){

    // Percorrer cada ' i ' (numbers.length-i-1 = vai na posicao atual em que o i está.)
    for(let j = 0; j < (numbers.length-i-1); j++){
       
      //Verifica se o numero atual é menor que o proximo com condição (apenas troquei o > para < no if rsrsrs)
      if(numbers[j] < numbers[j+1]){
         
        // Se condição for verdadeira, trocar de posição ( entre j e j+1 )( nova posicao: j+1, j )
        let aux = numbers[j]
        numbers[j] = numbers[j + 1]
        numbers[j+1] = aux
      }
    }
}

  // Print
  console.log(numbers);
