const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

let json = filter(JSON.stringify(person));

function filter(jsonObj){
  let temp = JSON.parse(jsonObj)
  let {id, firstName, lastName, age} = temp
  let result = {id, age}
  return result
}

console.log(json); // Should return: { id: 1, age: 25 }

//Creo que me he complicado de mas.