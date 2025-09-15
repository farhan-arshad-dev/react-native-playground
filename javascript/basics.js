console.log("Hello World");
console.error("This is an error");
console.warn("This is a warning");

//(Single Line commnets)

/* 
Multi line comments
*/


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

// const should be initialized, Premitive Types (and contains Immutable)
const name = 'Farhan';  // String Literal
const age = 30;         // Number Literal
const rating = 4.5;     // Number Literal
const isCool = true;    // Boolean Literal
const x = null          // null is the value(explicitly clear the content), and object is type
const y = undefined     // undefined both type and value

let z;                  // by default variables type and values is `undefine`
z = 0;
z = 1;  // Reassignment is not the same as mutable

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

// Reference(Structural) Types Array, funcations, object. And Structural contains Mutable data (can change the value).
// Arrays

console.log("Reference Types");

const numbers = new Array(1, 2, 3, 4, 5);      // index 0-4, array using object
console.log(numbers);

// using liters, and can caontain multi type data, JS is not the staticly typed (dynamically types)
// create an array using const doesn't make array immutable, can change the value, but can't reassign the array
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
let adcIndex = fruits.indexOf("abc");
if (adcIndex !== -1) {
    console.log('Item found');
}

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

let todoCompletedText = todos.filter(function (todo) {
    return todo.isCompleted == true;
}).map(function (todo) {
    return todo.text;
});
console.log(todoCompletedText);
todoCompletedText = "diaflkjsdfh";
console.log(todoCompletedText);
console.log(todos);



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
function displayPerson({ firstNamex, lastNamex, agex, jobx }) {
    console.log(`FirstName: ${firstNamex}`);
    console.log(`LastName: ${lastNamex}`);
    console.log(`Age: ${agex}`);
    console.log(`Job: ${jobx}`);
}

displayPerson(personx);

// Spread and REST operators in Javascript 

// Challenges-1
function sumOne(a, b) {
    return a + b;
}

console.log(sumOne(5, 4)); // works well
let myA = [5, 4];
console.log(sumOne(myA)); // didn't work for the array same goes for object.

// Solutions
console.log("spread operator");
console.log(sumOne(...myA)); // spread operator, take a group and spread into multiple values

// Challenges-2 want to recei2ved my 1 OR more value. 

// like in one function call give 3 number and in other function call 5 number are given
console.log("Rest operator");
// Rest operator get the individual values and make group in form of an array.
function sumTwo(...args) {   // ...args(REST operator) can be any valiable name. and operates like an array
    let sum = 0;
    for (const arg of args) {
        sum = sum + arg;
    }
    return sum;
}

console.log(sumTwo(3, 5));
console.log(sumTwo(3, 5, 8, 9));
console.log(sumTwo(myA));     // didn't work well, cuz Rest operator operator recieevd individual value
console.log(sumTwo(...myA));

function sumThree(a, b, ...args) {   // first 2 values should multiple, and reset will be use to calcualte the sum.
    let mul = a * b;
    let sum = 0;
    for (const arg of args) {
        sum = sum + arg;
    }
    return [mul, sum];
}

console.log(sumThree(3, 5, 2, 2));

// Deep copy and Shallow Copy of the object
// Shallow copy creates a new object but only copies the values of primitive types (like numbers and strings) and references to objects.
// A deep copy creates a completely new and independent object, recursively duplicating all nested objects as well.
// Probleam
// Impure function that mutates the data
const addToScroreHostory = (array, score) => {
    array.push(score);
    return array;
}
const scoreArray = [44, 23, 12];
console.log(addToScroreHostory(scoreArray, 14));    // mutates the original array

// More detial...
console.log('Deep copy and Shallow Copy');
const xArray = [44, 45, 60];
const yArray = [...xArray];     // Shallow copy using the spread operator
console.log(xArray === yArray);

// can use Object.assign()
const tArray = Object.assign([], yArray);
console.log(tArray === yArray);
tArray.push(11);
console.log(yArray);
console.log(tArray);

// lets consider
yArray.push([7, 8, 9]);
const vArray = [...yArray];
vArray[3].push(5);
console.log(vArray);
console.log(yArray);    // still update the nested array cuz share the ref of nested array.

// same goes to object, even Object.freeze is a shallow freeze, cuz we can update the nested object.
const scoreObj = {
    first: 44,
    second: 12,
    third: { a: 1, b: 2 }
}
Object.freeze(scoreObj);
scoreObj.third.a = 8;
console.log("scoreObj.third.a =", scoreObj);

// Deep copy need to avoide this
// but Json parsing cuz of stringify losses the data types
// also does't work for complex types like Dates, functions, undefined, Maps, Sets, FileList, ImageData, Regexps e.t.c
const newScoreObj = JSON.parse(JSON.stringify(scoreObj));   // only works with premitive types.
console.log(newScoreObj);
console.log(scoreObj === newScoreObj);

// Deep copy function
const deepClone = (obj) => {
    if (typeof obj !== 'object' || obj === null) return obj

    // create an array or object to hold the values
    const newObject = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        const value = obj[key];
        // recursive call for the nested objects and arrays
        newObject[key] = deepClone(value);
    }
    return newObject;
}

console.log('Deep copy funcation');
const myScoreObj = deepClone(scoreArray);
console.log(myScoreObj === scoreArray);
myScoreObj.push(50);
console.log('myScoreObj =', myScoreObj);
console.log('scoreArray =', scoreArray);

// Code Practice Question

console.log('Code Practice Question');
const user = { name: 'abc', address: { street: 'xyz' } }

console.log('Copy ref');
const refUser = user;
refUser.name = 'Farhan';
console.log(refUser === user);      // still the same cuz just copy the ref of the object

console.log('Shallow copy');
const shallowUser1 = { ...user };      // Shallow copy using spread operator
const shallowUser2 = Object.assign({}, user);

shallowUser1.name = 'Farhan';
console.log(shallowUser1 === user);      // different objects
shallowUser1.address.street = "abc";
console.log(shallowUser1);
console.log(user);  // but update the nested object cuz of shallow copy(means nested object OR array still shared the ref);

shallowUser2.name = 'Arshad';
console.log(shallowUser1 === user);      // different objects
shallowUser1.address.street = "lmn";
console.log(shallowUser1);
console.log(user);  // but update the nested object cuz of shallow copy(means nested object OR array still shared the ref);

console.log('Deep copy');

const userX = { name: 'abc', address: { street: 'xyz' } }

console.log('Deep copy Using JSON.stringify and JSON.parse');
const deepUser1 = JSON.parse(JSON.stringify(userX));
deepUser1.name = 'Farhan';
console.log(deepUser1 === userX);      // different objects
deepUser1.address.street = "abc";       // didn't effect original object
console.log(deepUser1);
console.log(userX);

console.log('Deep copy Using structuredClone');
const deepUser2 = structuredClone(userX);
console.log(deepUser2 === userX);      // different objects
deepUser2.address.street = "abc";       // didn't effect original object
console.log(deepUser2);
console.log(userX);

console.log('Deep copy Using deepClone function defined above');
const deepUser3 = deepClone(userX);
console.log(deepUser3 === userX);      // different objects
deepUser3.address.street = "abc";       // didn't effect original object
console.log(deepUser3);
console.log(userX);

// Deep copy using spread operator
const personX = { ...person, hobbies: [...person.hobbies], addNumbers: { ...person.address } };

//******* Can use libraries for a deep copy function.


console.log('Weekly 1-1 with Mentor Queries');
// Weekly 1-1 with Mentor.
// Hoisting concept.
// In JavaScript is a mechanism where variable and function
// declarations are conceptually moved to the top of their containing
// scope during the compilation phase, in short we can make a call of 
// a variable OR a fucnction before the declaration.

// Scope difference between var and let.
for (var abc = 1; abc <= 5; abc++) {
    setTimeout(() => {
        console.log(abc);
    }, abc * 1000);
}

// output, cuz abc will the same for each itration.
// 6
// 6
// 6
// 6
// 6

for (let abc = 1; abc <= 5; abc++) {
    setTimeout(() => {
        console.log(abc);
    }, abc * 1000);
}

// output cuz abc instance will be create for each instance.
// 1
// 2
// 3
// 4
// 5

// Code output
console.log('a');
setTimeout(() => {  // cuz setTimeout is asynchronous.
    console.log('b');
}, 0);
console.log('c');

