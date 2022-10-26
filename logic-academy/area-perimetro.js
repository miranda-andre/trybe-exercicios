// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
// Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato abaixo:

let objeto = {
    area: 0,
    perimetro: 0,
  };
  
  function triangleAreaPerimeter(base, height){
    objeto['area'] = base * height;
    objeto['perimetro'] = (2 * base) + (2 * height);
  
  
    return objeto
  };
  
  console.log(triangleAreaPerimeter(2,4));