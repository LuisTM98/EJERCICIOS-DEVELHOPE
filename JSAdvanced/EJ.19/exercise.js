class Person {
  firstName = ""
  lastName = ""
  age = 0
  constructor(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  set age(newVal){
    if (newVal < 1) {this.age = 1}
    else if (newVal > 110) {this.age = 110}
    else {this.age = newVal}
  }

  get fullName() {
    return this.firstName + " " + this.lastName
  }
}

const person = new Person('Mario', 'Rossi', -255);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);