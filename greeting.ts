class Student {
    fullName: string
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = `${firstName} ${middleInitial}. ${lastName}`;
    }
}
// no need to include "implements" statement
interface Person {
    firstName : string
    lastName : string
}
// type usage
const greeter = (person : Person) => `Hello, ${person.firstName} ${person.lastName}`;
const user = new Student("Zoë", "I", "Gonzales");

console.log(greeter(user)) // Hello, Zoë Gonzales
console.log(user.fullName) // Zoë I. Gonzales