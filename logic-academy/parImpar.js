numbers = [9, 5, 2, 3];


function oddEven(array) {
    objeto = {
        odd: 0,
        even: 0,
    };

    for (let numero of array) {
        if (numero % 2 == 0) {
            objeto.even++;
        } else {
            objeto.odd++;
        }
    }

// WITH FOR IN 

//  for (let numero in array) {
//     if (array[numero] % 2 == 0) {
//         objeto.even++;
//     } else {
//         objeto.odd++;
//     }
// }

    return objeto;
}
console.log(oddEven([3, 5, 7, 9, 11]));