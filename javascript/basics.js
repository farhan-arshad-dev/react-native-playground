console.log("Hello World");
console.error("This is an error");
console.warn("This is a warning");

// var -> Global varibale (not recomendeed)
// let -> Variable - ES6
// const -> contatnt - ES6

let score = 30; // variable
console.log(score);
score = 31;
console.log(score);
console.log(typeof score);

// dynamically types langugages
score = "31";
console.log(score);
console.log(typeof score);

const overs = 6;    // constant
console.log(overs);

// Data type: String, Numbers, Boolean, null, undefined, Symbol(ES-6)

// varible/const name rules
// by default variables are `undefine`
// Can't be a reserved keyword
// Should be meangin full
// Can't start with a number
// Con't contain a space or hyphen (-)
// Are case-sensitive

// const should be initialized, Premitive Types
const name = 'Farhan';  // String Literal
const age = 30;         // Number Literal
const rating = 4.5;     // Number Literal
const isCool = true;    // Boolean Literal
const x = null          // null is the value(explicitly clear the content), and object is te type
const y = undefined     // undefined both type and value

let z;                  // by default variables type and values is `undefine`

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);

console.log(y);
console.log(z);
console.log(typeof y);
console.log(typeof z);

// Concatination
console.log('My name is ' + name + ' and I am ' + age);
// Template String
const hello = `My name is ${name} and I am ${age}`      // Template Literals
console.log(hello);

// String properties and methods
const s = 'Hello World!';
console.log(s.length); // property
console.log(s.toUpperCase()); // method
console.log(s.toLowerCase()); // method

console.log(s.substring(0, 5)); // method, 5 is the length of chars not the end index.
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split('')); // split by chars

const string = 'technology, computers, it, code';
console.log(string.split(',')); // split by chars

//(Single Line commnets)
/* 
Multi line comments
*/

// Reference Types Array, funcations, object.
// Arrays

console.log("Reference Types");

const numbers = new Array(1, 2, 3, 4, 5);      // index 0-4, array using object
console.log(numbers);

// using liters, and can caontain multi type data, JS is not the staticly typed (dynamically types)
const fruits = ['apples', 'oranges', 'pearns', 10, true];
console.log(typeof fruits);         // array is also the type of object
console.log(fruits);
console.log(fruits[1]);

// arrays can manuplated the array (udpate the elements), but not reasign the array 
// like 
// fruits = [];
fruits[5] = 'grapes'; // not the recomended way cuz will update the element is index is already exit.
console.log(fruits);

// use of push method cuz don't know the exact number of elements in the array
fruits.push('mangos');
console.log(fruits);

fruits.unshift('strawberries'); // to add the elements at first position
console.log(fruits);

fruits.pop(); // delete last element of the array
console.log(fruits);

console.log(Array.isArray(fruits));
console.log(Array.isArray('fruits'));

console.log(fruits.indexOf('oranges'));

// object literals
const person = {
    firstName: 'Farhan',
    lastName: 'Arshad',
    age: '30',
    hobbies: ['Gamming', 'Movies', 'travling'],
    address: { // object inside the object
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log("Object Oriented Programming");
console.log(person);

console.log(person.firstName);  // dot operator
console.log(person["firstName"]);  // Bracket Notation

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstName, lastName } = person; // pulling out properties
const { hobbies, address: { city } } = person; // pulling out properties

console.log(firstName);
console.log(lastName);
console.log(city);

// Add properties
person.email = 'farhan.arshad@arbisoft.com';
console.log(person);

// array of object literals
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 1,
        text: 'Meetings',
        isCompleted: true
    },
    {
        id: 1,
        text: 'Dentist Appt',
        isCompleted: false
    }
]
console.log(todos);
console.log(todos[1].text);

// Json data format simmiler to array of object literals
const todoJSON = JSON.stringify(todos)
console.log(todoJSON);

// Loops
// for loop
for (let i = 0; i < 10; i++) {
    console.log(`For loop number: ${i}`);
}

// while loop
let i = 0;
while (i < 10) {
    console.log(`While loop number: ${i}`);
    i++;
}

// Array iteration
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

// for of loop
// Array iteration
for (let todo of todos) {
    console.log(todo.text);
}

// high-order array methods -> foreach, map, filter
todos.forEach(function (todo) {
    console.log(todo.text);
});

const todoText = todos.map(function (todo) {
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted == true;
});
console.log(todoCompleted);

const todoCompletedText = todos.filter(function (todo) {
    return todo.isCompleted == true;
}).map(function (todo) {
    return todo.text;
});
console.log(todoCompletedText);


//Equality Operators
/*
`==` (Loose Equality)

* Compares **values only** (after type coercion).
* Converts operands to the same type before comparing.
*/

console.log(5 == "5"); // true  (string converted to number)
console.log(0 == false);     // true
console.log(null == undefined); // true

/*
`===` (Strict Equality)
* Compares **value and type** (no coercion).
* Safer and more predictable.
*/

console.log(5 === "5");      // false (different types)
console.log(5 === 5);     // true
console.log(null === undefined); // false

/*
`!=` (Loose Inequality)
* Opposite of `==`.

*/
console.log(5 != "5");       // false (after coercion, they’re equal)

/*
### `!==` (Strict Inequality)
* Opposite of `===`.
*/
console.log(5 !== "5");     // true (types are different)


/*
Relational Operators
`>` (Greater than)
`<` (Less than)
`>=` (Greater than or equal to)
`<=` (Less than or equal to)
Work on numbers and strings (lexical comparison for strings).
*/

console.log(10 > 5);       // true
console.log("a" < "b");      // true  (compares Unicode values)
console.log("20" > 5);     // true  ("20" converted to number)

// Special Cases
/*
`Object.is()`
Like`===` but treats ** NaN and - 0 /+0 ** differently.
*/
console.log(NaN === NaN);          // false
console.log(Object.is(NaN, NaN));  // true
console.log(0 === -0);             // true
console.log(Object.is(0, -0));     // false

/*
`null` and`undefined`
Special coercion rules
*/
console.log(null == undefined);   // true
console.log(null === undefined);  // false

/*
`NaN`
Special number that is ** not equal to anything **, even itself:
*/
console.log(NaN === NaN);   // false
console.log(isNaN(NaN));    // true

/*
Other Useful Comparisons
Ternary(conditional operator)
*/

let num = 10;
let result = (num > 5) ? "Big" : "Small";  // "Big"

console.log(num);           // 10
console.log(result);        // Big

// `typeof` with comparison
console.log("Hello");
console.log(typeof "Hello" === "string");  // true

/*
## 📌 Quick Summary Table
    | Operator | Meaning | Coercion ? |
| ----------- | ------------------------------- | --------- |
| `==` | Equal(loose) | ✅ Yes |
| `===` | Equal(strict) | ❌ No |
| `!=` | Not equal(loose) | ✅ Yes |
| `!==` | Not equal(strict) | ❌ No |
| `>` `<` | Greater / Less than | ✅ Yes |
| `>=` `<=` | Greater / Less than or equal | ✅ Yes |
| `Object.is` | Same value(safer strict check) | ❌ No |
---
Coercion(Type Conversion): In JavaScript, coercion means converting a value from one type to another automatically or explicitly.
*/

// Conditions

const x1 = 11;
const y1 = 10;

if (x === 10) {
    console.log('x is 10');
} else if (x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}

if (x1 > 5 || y1 > 10) {
    console.log('x is more than 5 or y is more than 10');
}

const color = x1 > 10 ? 'red' : 'blue';
console.log(color);

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;

    default:
        console.log('color is not rest or blue');
        break;
}

// funcations introduce in ES6

function addNums(num1, num2) {      // type and value will be undefined by defautlt
    console.log(num1 + num2);
}

addNums(5, 4);      // 9
addNums()   // NaN without default values

function addNums1(num1 = 1, num2 = 1) {  // with default values, and the return the value
    return num1 + num2;
}

console.log(addNums1(5, 4));

// Function Expression
const greet = function (name) {
    return 'Hi, I am the Funcation expression';
};
console.log(greet());

// Arrow Functions
console.log("Arrow Functions")
const addNumbers = (num1 = 1, num2 = 1) => num1 + num2;    // equals to const addNumbers = (num1 = 1, num2 = 1) => { return num1+ num2;}

console.log(addNumbers(5, 4));

todos.forEach((todo) => console.log(todo));

// OOP. Similler to object literals but with Prefix object name.  Mainly used in ES5
// Constructor funcation
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dbo = new Date(dob);   // Date object
    this.getBirthYear = function () {
        return this.dbo.getFullYear()
    }

    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

// instantiate object
const person1 = new Person('Farhan', 'Arshad', '1-20-1993');
const person2 = new Person('Noman', 'Arshad', '09-13-1991');

console.log(person1);   // method are vislble under ther person object
console.log(person2);
console.log(person2.getBirthYear());    // dot
console.log(person2.getFullName());

// Prototype (default object inside each object by default, and current object inherits some properties and methods)
function Student(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dbo = new Date(dob);   // Date object
}

Student.prototype.getBirthYear = function () {
    return this.dbo.getFullYear()
}

Student.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// instantiate object
const student1 = new Student('Farhan', 'Arshad', '1-20-1993');
console.log(student1);     // method are vislble under ther person ->>prototype object along with constructure.


// destructuring => extract values from arrays and object then assign them to variable in a convient way
// [] = to perfrom array destructuring
// {} = to perfrom object destructuring

// Example-1 swap the values

let a = 1;
let b = 2;

console.log(`a = ${a}`);
console.log(`b = ${b}`);

[a, b] = [b, a] // destructuring
console.log('After destructuring');
console.log(`a = ${a}`);
console.log(`b = ${b}`);

// Example-2 swap the 2 values in a array
const colors = ["red", "green", "blue", "balck", "white"];

console.log(`colors = ${colors}`);

[colors[0], colors[4]] = [colors[4], colors[0]]; // destructuring

console.log('After destructuring');
console.log(`colors = ${colors}`);

// Example-3 Assign array elements to variables
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log('After destructuring');
console.log(`FirstColor = ${firstColor}`);
console.log(`SecondColor = ${secondColor}`);
console.log(`thirdColor = ${thirdColor}`);
console.log(`extraColors = ${extraColors}`);        // that will be an array

// Example-4 Extract value from objects
const personx = {
    firstNamex: 'Farhan',
    lastNamex: 'Arshad',
    agex: 32
}

const { firstNamex, lastNamex, agex, jobx } = personx;  // vaiable name should be the same as properties name.
// if any property is missing than value will be undefined if not default value assigned

console.log(firstNamex);
console.log(lastNamex);
console.log(agex);
console.log(jobx);

// Example-5 destructuring In Function params.
console.log('destructuring In Function params');
function displayPerson({firstNamex, lastNamex, agex, jobx}) {
    console.log(`FirstName: ${firstNamex}`);
    console.log(`LastName: ${lastNamex}`);
    console.log(`Age: ${agex}`);
    console.log(`Job: ${jobx}`);
}

displayPerson(personx);
