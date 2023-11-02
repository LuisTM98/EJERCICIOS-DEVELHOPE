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
    return this.firstName + " " + this.lastName + ", " + this.age
  }
}

const person = new Person('Mario', 'Rossi', 26);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
person.age = -300
console.log(person.fullName);