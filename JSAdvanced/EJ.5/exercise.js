const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = 'Simon'

console.log(person1);
console.log(person2);

// En javascript, los objetos como 'person1' son creados ajenos a la variable a la variable que les da
// nombre, en este caso 'person1'. La variable con la que se declaran los objetos actuan como
// referencias al mismo. Cuando se asigna otra variable a la variable inicial del objeto, como ocurre
// con 'person2', esta unicamente se declara como otra referencia al objeto original, y no como un objeto aparte.
// Si queremos hacer modificaciones en 'person2' que no afecten al objeto original, habremos de crear en 'person2'
// un objeto completamente distinto al original. Existen metodos para lograr esto sin tener que copiar el codigo
// del objeto al completo, como es el caso del siguiente comando:
// 
//        const person2 = Object.assign({}, person1);
//
// Voy a declarar un nuevo objeto, 'person3', y comprobarlo:

const person3 = Object.assign({}, person1);

person3.firstName = 'Ramon'
//ahora, person1 y person2 tienen deberia seguir llamandose simon, pero person3 deberia cambiar el nombre a Ramon

console.log(person3)