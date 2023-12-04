const sum = function (a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
}

const divide = function (a, b) {
  return a / b;
}

// const log = function (value) {
//   console.log(value);
// }

// ((2 + 4) * (5 + 2) - 2) / 5

const sumArrow = (a,b) => a + b;
const subtArrow = (a,b) => a - b;
const multArrow = (a,b) => a * b;
const divArrow = (a,b) => a / b;

let value = divArrow(subtArrow(multArrow(sumArrow(2,4),sumArrow(5,2)),2),5)

console.log(value)
