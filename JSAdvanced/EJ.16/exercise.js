class Person {
    constructor(firstName, lastname){
        this.firstName = firstName
        this.lastName = lastname
    }
}

const developer = new Person('Mario', 'Rossi');
console.log(developer.firstName + " " + developer.lastName);
