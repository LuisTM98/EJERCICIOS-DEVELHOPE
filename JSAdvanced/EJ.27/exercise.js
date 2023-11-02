const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// const id = person.id;
// const personInfo = {
//   firstName: person.firstName,
//   lastName: person.lastName,
//   age: person.age
// };

const {id, ...rest} = person //creamos un objeto de dos variables, asignando a la segunda todo aquello que no es id
const personInfo = rest // asignamos el valor de la segunda variable a la variable que llama el console.log de mas abajo

console.log(id, personInfo);