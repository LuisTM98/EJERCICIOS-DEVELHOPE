function isAdult(parameter) {
  return parameter >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

let {id, firstName, lastName, age} = person

console.log(isAdult(age)); //da true

//si cambiamos la edad a 7, directamente en la variable age

age = 8

console.log(isAdult(age))