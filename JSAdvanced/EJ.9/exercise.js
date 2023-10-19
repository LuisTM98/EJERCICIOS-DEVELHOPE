const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

function keysValues(givenObject){
  let printString = "";
  let objectKeys = Object.keys(givenObject);
  let index = 0;
  for (const x in givenObject) {
    printString += objectKeys[index] + ": " + givenObject[x] + "; " ;
    index++
  }
  function inner(){
    console.log(printString)
  }
  inner()
}

keysValues(person)

