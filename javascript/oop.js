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


// Shradha Khapra Video (Lecture 11 : Classes & Objects | JavaScript Full Course):
// Youtube Video: https://www.youtube.com/watch?v=N-O4w6PynGY&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&index=13

// object literals
// Prototype (default object inside each object by default, and current object inherits some properties and methods)
const employeeX = {
    firstName: 'Farhan',
    lastName: 'Arshad',
    age: '30',
    hobbies: ['Gamming', 'Movies', 'travling'],
    address: { // object inside the object
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    },
    // lets define the methods
    getFullName: function () {
        console.log(`FullName is ${this.firstName} ${this.lastName}`)
    },
    getAddress() {
        return `Addrss is ${this.address.street} ${this.address.city} ${this.address.state} `
    },
    calculateTax() {
        return 'Tax rate is 10%';
    }
};

console.log(employeeX);
employeeX.getFullName()
console.log(employeeX.getAddress());

const karan = {
    saraly: 50000,
    calculateTax() {
        return 'Tax rate is 20%';
    }
};

karan.__proto__ = employeeX;     // can update the proto type object

console.log(karan);
console.log(karan.getAddress());
// if object and __proto__ have same object than main object method will be used,
// Like overriding the method.
console.log(karan.calculateTax());

// Class in JS
// Program code template for creating objects, state(veriables) + behaviour (methods).
class ToyotaCar {
    // if not constructor define, JS will create empty constructor and invocked by new
    constructor(brand, mileage) {
        this.brand = brand;
        this.mileage = mileage;
        console.log('Creating new object');
    }
    start() {
        console.log('start');
    }

    stop() {
        console.log('stop');
    }

    setBrand(brand) {
        this.brand = brand
    }
}

let fortuner = new ToyotaCar();     // invoked constructor, can have params
fortuner.setBrand("fortuner", 10);
console.log(fortuner);

let lexus = new ToyotaCar("lexus", 12);
console.log(lexus);

let lexus1 = new ToyotaCar();   // params will be undefined
console.log(lexus1);

// Inheritance in JS
class Parent {
    hello() {
        console.log('hello');
    }
}

class Child extends Parent { }

let obj = new Child();
obj.hello();

class PersonObj {

    constructor(name) {
        this.name = name;
        this.species = "Homo sapiens";
    }

    eat() {
        console.log('eat');
    }

    sleep() {
        console.log('sleep');
    }

    work() {
        console.log('do nothing');
    }
}

class EmployeeObj extends PersonObj {

    constructor(name, branch) {
        super(name);   // invoked Parent class constructor, mandatory for the child class to call the parent class constructor
        this.branch = branch;
    }

    work() {    // overriding
        super.eat()
        console.log('solve probleams, build something');
    }
}

class Doctor extends PersonObj {
    work() {
        console.log('treat patients');
    }
}

let employeeObj = new EmployeeObj('Farhan Arshad', 'Computer Science');
console.log(employeeObj);
employeeObj.work(); // always invoked own method instated of Parent class method.

let doctorObj = new Doctor();
doctorObj.work();

// Practice Question

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(`User Data: ${this.name}, ${this.email}`);
    }
}

class Admin extends User {
    editData() {
        this.name = "New Name";
        this.email = "New Email";
    }
}

let user1 = new User("Farhan", "farhan@example.com");
console.log(user1);

// will directly call parent class constructor
// we can add the Admin class constructor and than need to call the Parent class constructor using super kerword
let admin = new Admin("admid", "admin@example.com");
console.log(admin);
admin.editData();
console.log(admin);


// Error handling (try-catch)

let a = 5;
let b = 10;

console.log("a=", a);
console.log("b=", b);
console.log("a+b=", a + b);
try {
    console.log("a+c=", a + c);     // error statemnt
} catch (error) {
    console.log(error);
}
console.log("a+b=", a + b);
console.log("a+b=", a + b);

// Lexical Scope (Lexical this)

// Problem
console.log('Lexical Scope probleam');
function startGame() {
    this.lives = 0;
    this.totaLives = function () {
        console.log(this.lives);
        (function () {
            console.log('Lexical Scope probleam cont...');
            // nested function will create own context for on each level,
            // so unable to access/context of the parent fucntion this.lives value.
            // to fix this we will use Arrow function will fix this probleam.
            // can fix by create a new variable in the parent function scope,
            // but will used Lexical this.
            console.log(this.lives);    // this.lives will called for inner function.
        })();
    }
};

var mario = new startGame();
mario.totaLives();

// Solution with arrow function, in arrow s
console.log('Lexical Scope Solution');
function startGame1() {
    this.lives = 1;
    this.totaLives = () => {     // with arrow function the Lexical this will pass as a scope
        console.log(this.lives);
        (() => {    // with arrow function the Lexical this will pass as a scope
            console.log('Lexical Scope Solution cont...');
            console.log(this.lives);
        })();
    }
};

var mario1 = new startGame1();
mario1.totaLives();
