let num1 = 10;
let num2 = 20;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

// Variable swapping
let temp = num2;
num2 = num1;
num1 = temp;
console.log('After swap: ', num1, num2); // After swap: 20 10

//Swapping back, but with the destructuring

let a, b;
[b, a] = [num1, num2];
[num1, num2] = [a, b];
console.log('after swapping back: ', num1, num2) //after swapping back: 10 20