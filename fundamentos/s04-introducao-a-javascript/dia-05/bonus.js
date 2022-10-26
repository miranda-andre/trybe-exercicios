const substituaX = nome => {
    const frase = 'Tryber x aqui!';
    const fraseArray = frase.split(' ');
    for(let i = 0; i <= fraseArray.length; i++){
        if(fraseArray[i] == 'x'){
            fraseArray[i] = nome;
        }
    }
    return fraseArray.join(' '); 
  };
  
  console.log(substituaX('Bebeto'));