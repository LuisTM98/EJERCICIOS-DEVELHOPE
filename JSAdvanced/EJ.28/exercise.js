function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

const numbers = [1, 2, 3, 4, 5];

console.log(sum(numbers[0], numbers[1], numbers[2]));

function sumAgain(givenArray){
  return givenArray.reduce((a,b) => a + b)
}

console.log(sumAgain(numbers))

// function sum(...nums) {
//   const suma = nums.reduce((a,b) => a + b);
//   return suma;
// }

// const numbers = [1, 2, 3];
// console.log(sum(...numbers));