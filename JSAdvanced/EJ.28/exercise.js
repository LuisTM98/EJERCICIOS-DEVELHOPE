function sum(...nums) {
  return nums.reduce((a,b) => a+b);
}

const numbers = [1, 2, 3, 4, 6];

console.log(sum(numbers[0], numbers[1], numbers[2]));

//La resolucion vista en clase no termina de ser correcto. Mas 
//abajo esta comentado el codigo de clase. El ejercicio pide que
//refactoricemos el codigo con el spread de tal manera que el 
//console.log no varie su resultado en la consola, pero
//sin variar el contenido del console.log como tal.
//El ejercicio no pide variar el resultado, sino unicamente
//refactorizar la funcion sum con el spread operator


// SOLUCION PROPUESTA EN CLASE:
// function sum(...nums) {
//   const suma = nums.reduce((a,b) => a + b);
//   return suma;
// }

// const numbers = [1, 2, 3];
// console.log(sum(...numbers));