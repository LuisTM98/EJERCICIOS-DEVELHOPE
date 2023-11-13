const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

//METODO 1
let json = filter(JSON.stringify(person));


function filter(jsonObj){
  let temp = JSON.parse(jsonObj)
  let {id, firstName, lastName, age} = temp
  // let result = {id, age}
  // return result
  
  return {id, age}
}

console.log(json); 

//METODO 2

let json2 = JSON.stringify(person, ["id", "age"]);

console.log(json2)

//Creo que me he complicado de mas.