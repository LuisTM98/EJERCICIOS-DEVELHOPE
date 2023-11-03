class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }

  // fromJson(parameter){
  //   let {id, firstName, lastName, age} = JSON.parse(parameter)
  //   let temp = {id, firstName, lastName, age}
  //   return new Person(temp)
  // }
}


const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
// const developer = Person.fromJson(json);   

// console.log(developer);

let {id, firstName, lastName, age} = JSON.parse(json)
let developer = new Person(id, firstName, lastName, age)
console.log(developer)