function sumUntil(maxValue) {
  let sumacion = 0
for (let i = 1; i <= maxValue; i++) {
  sumacion = sumacion + i
}
return sumacion
}

console.log(sumUntil(5));