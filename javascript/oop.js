// OOP in ES6
// Class in this type of class all the method and the constructure under the prototype 
class Employee {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dbo = new Date(dob);   // Date object
    }
    getBirthYear() {
        return this.dbo.getFullYear()
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// instantiate object
const employee1 = new Employee('John', 'Doe', '1-20-1993');
const employee2 = new Employee('Mary', 'Smith', '09-13-1991');

console.log(employee1);   // method are vislble under ther person object
console.log(employee2);
console.log(employee1.getBirthYear());
console.log(employee2.getFullName());
