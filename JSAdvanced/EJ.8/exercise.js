function multiplyByTwo(value) {
  let number = 2;
  function inner(){
    value = value * number
    console.log(value)
  }
  inner(value)
}

multiplyByTwo(4)