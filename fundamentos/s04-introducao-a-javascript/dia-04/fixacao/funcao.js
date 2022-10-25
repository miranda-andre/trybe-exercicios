
// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);

console.log();
// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo

//Veja dois exemplos de funções sem parâmetros:

function bomDia() {
    return 'Bom dia!';
  }
  
  console.log(bomDia()); // Bom dia!
console.log();



  //Outro

  let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado
console.log();
//E agora, exemplos de funções usando parâmetros:

// Com função
function soma(a, b) {
    return a + b;
  }
  
  console.log(soma(5, 2)); // 7
console.log();
  //Outro

  function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
      return primeiroNum + ' é maior que ' + segundoNum;
    } else if (segundoNum > primeiroNum) {
      return segundoNum + ' é maior que ' + primeiroNum;
    } else {
      return 'Os números são iguais';
    }
  }
  
  console.log(maiorNum(10, 20)); // 20 é maior que 10
  console.log(maiorNum(2, -5)); // 2 é maior que -5
  console.log(maiorNum(1, 1)); // Os números são iguais

  console.log();
  //FIXACAO:

  let a = 7;
  let b = 3;

  function adicao(num1,num2){
    result = num1 + num2;

    return result;
  }

  function subtracao(num1,num2){
    result = num1 - num2;

    return result;
  }

  function multiplicacao(num1,num2){
    result = num1 * num2;

    return result;
  }

  function divisao(num1,num2){
    result = num1 / num2;

    return result;
  }

  console.log(adicao(a,b));
  console.log(subtracao(a,b));
  console.log(multiplicacao(a,b));
  console.log(divisao(a,b));

console.log();

//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, 
//duas constantes com os valores que serão comparados.

let valor1 = 12;
let valor2 = 3;

function maiorValor(num1, num2){
    if(num1 > num2){
        resultado = "o numero: " + num1 + " é maior que: " + num2;
    } else if(num1 < num2){
        resultado = "o numero: " + num2 + " é maior que: " + num1;
    } else{
        resultado = "numeros iguais."
    }
    return resultado;
}

console.log(maiorValor(valor1,valor2));
console.log();

//Faça um programa que retorne o maior de três números. Defina, no começo do programa, 
//três constantes com os valores que serão comparados.

let val1 = 1;
let val2 = 2;
let val3 = 3;

function maiorValor3(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        resultado = num1;
    } else if (num2 > num1 && num2 > num3){
        resultado = num2;
    } else if (num3 > num1 && num3 > num2){
        resultado = num3;
    } else {
        resultado = "insira numeros diferentes"
    }
    return resultado + " é o maior numero.";
}

console.log(maiorValor3(val1,val2,val3));
console.log();

//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor 
//for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo 
//retorne “zero”.

let numeroVal = -3;

function maiorMenor (valor){
    if(valor > 0){
        resultado = "positivo";
    } else if(valor < 0){
        resultado = "negativo";
    } else{
        resultado = "zero"
    }
    return "o numero " + valor + " é: " + resultado;
}

console.log(maiorMenor(numeroVal));
console.log();

//Faça um programa que receba três constantes com os valores dos três ângulos internos de um 
//triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso 
//contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

let angulo1 = 12;
let angulo2 = 80;
let angulo3 = 90;

function isTriangle(anguloA,anguloB,anguloC) {
    if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0){
        return "invalid Angle, not a triangle."
    } else{
        resultado = anguloA + anguloB + anguloC

        if(resultado >= 180){
            return true
        } else {
            return false
        }
    }
}
console.log(isTriangle(angulo1,angulo2,angulo3));
console.log();