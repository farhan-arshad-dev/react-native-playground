// Typescript opensource
// Superset of Java Script
// types are optional
// complies down to regular JS
// Can use for both front-end and back-end (with Node.js)
// 3rd party libraries can be added for type defination

// Dynamic Typing => associated with runtime. (Java Script, Python, Ruby, PHP)
// Static Typing => explicitly assign to variables, funcation, params, return values e.t.c (Java, C/C++, Rust, Go)

// PROS => More Robust, Easily Spot Bugs, Predictability, Readability, Popular
// Cons => More code to white, More to learn, Required compilation, Not true static type.
// Extensions .ts and .tsx/jsx working with react compoents.
// TSC (TypeScript Compiler) is used to complete .ts files down to JS.
// Report at compile time. Many TS compilation tools.
// tsconfig.json file is used to configure how TypeScript works.
// User tsc --init to create the default `tsconfig.json`

let sId;    // by default undefined
console.log(`sId = ${typeof (sId)}`);

let sId1: any;    // type will be undefined
console.log(`sId1 = ${typeof (sId1)}`);

let sId2 = null;
console.log(`sId2 = ${typeof (sId2)}`);  // by default type is object
sId2 = 2;
console.log(`sId2 = ${typeof (sId2)}`);  // now type is number

// Type annotations in TypeScript are a way to explicitly declare
// the expected data type of variables, function parameters, and
// function return values. Type annotations are written using a colon (:)
let id: number = 5;
console.log(`Id = ${id}`);

// Basic Types
let id1: number = 5;
let company: string = 'Arbisoft';
let isPublished: boolean = true;
let x: any = 'string';

x = 5;

// Array
let ids: number[] = [1, 2, 3, 4, 5];
// ids.push('Hello!'); // not possible

let arr: any[] = [1, true, 'Hello'];    // can store any type of value in any position

// Tuple can hold multiple types of data. 
// need to define the exact type of type in an array, 
// store value as per define per positon
let person: [number, string, boolean] = [1, 'Hello!', true];

// Tuple Array
let employee: [number, string][]
employee = [
    [1, 'Farhan'],
    [2, 'Arshad'],
    [3, 'Arbisoft'],
    // [true, 'Arbisoft']   // not possible
]

console.log(employee);

// Union a variable to hold a the value of multiple types.
let pId: number | string;   // union
pId = 5;    // true statment
pId = '5';  // true statment

// Intersection types allow for combining multiple types into a single, cohesive type.
// Extending a type via intersections
type Animal = {
    name: string;
}

type Bear = Animal & {
    honey: boolean;
}

function getBear(): Bear {
    return { name: 'Baby Bear', honey: true };
}

const bear = getBear();
bear.name;
bear.honey;

// Enum to define the named constat numaric OR string
enum Direction1 {
    Up,
    Down,
    Left,
    Right
};

console.log(Direction1.Up);      // show o until we assign the value, rest will be hold the increment.
console.log(Direction1);

enum Direction2 {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right'
};

console.log(Direction2.Up);     // will show the string value
console.log(Direction2);

// Object / Custome type / Type Aliases
// This enhances code readability, simplifies complex type definitions,
// and promotes reusability of types across a project.
// type UserID = string; // Alias for a primitive type
// type Coordinates = { x: number; y: number; }; // Alias for an object type
// type Status = "active" | "inactive" | "pending"; // Alias for a union type
// type GreeterFunction = (name: string) => string; // Alias for a function type

type User = {
    id: number,
    name: string,
}

// use a type alias to give a name to any type
type ID = number | string;

const user: User = {
    id: 1,
    name: 'farhan'
}

console.log(user);

// Type Assertion explicitly tells the comiler to treat an entiy of different types
let cid: any = 1;
let customerId = <number>cid;
// customerId = '1'    // not possible
let customerId1 = cid as number // other way
// customerId1 = '1';      // not possible

// Functions with the return types
function addNum(x: number, y: number): number {
    return x + y;
}

console.log(addNum(1, 2));

function addNum1(x: number, y: number): void {
    console.log(x + y);
}

addNum1(1, 2);

// Interfaces 
console.log('Interfaces');
// like a custom type OR Specific strucutre for a object or a function

interface UserInterface {
    readonly id: number;    // read only property
    name: string;
    age?: number;           // optional property
}

const user1: UserInterface = {
    id: 1,
    name: 'Farhan',
}

// user1.id = 5;   // false statement

// Interface function
interface MathFun {
    (x: number, y: number): number;
}

const add: MathFun = (x: number, y: number): number => x + y;
const sub: MathFun = (x: number, y: number): number => x - y;

console.log(add(1, 2));
console.log(sub(10, 2));


// Classes
interface PersonInterface {
    id: number;
    name: string;
    register(): string;
}

class Person implements PersonInterface {
    id: number;     // public by default until defined
    name: string;   // should be defined cuz define in Interface
    age?: number    // optional property

    private phoneNumber: number = 123;
    protected address: string = 'xyz';

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is now registered`;
    }
}

const farhan: Person = new Person(1, 'farhan');
console.log(farhan);
console.log(farhan.register());

// Inheritance
// Subclass
class Employee extends Person {
    position: string;

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
};

const emp: Employee = new Employee(3, 'Nomman', 'Manager');

console.log(emp);

// Generics used to build reuseable components => Similler to Templets in C++

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let stringArray = getArray<string>(['a', 'b', 'c']);

// numArray.push('1'); // not possible
stringArray.push('d');  // true statment
