class Student {
    fullName: string
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = `${firstName} ${middleInitial}. ${lastName}`;
    }
}

interface Person {
    firstName : string
    lastName : string
}
const greeter = (person : Person) => `Hello, ${person.firstName} ${person.lastName}`;
const user = new Student("Zoë", "I", "Gonzales");

console.log(greeter(user))
console.log(user.fullName);