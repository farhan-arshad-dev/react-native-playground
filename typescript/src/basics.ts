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
sId2 = 2;   // inferred as number  (Type inference)
console.log(`sId2 = ${typeof (sId2)}`);  // now type is number

let sId3 = "Farhan"     // inferred as string (Type inference)

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
function addNum(x: number, y: number): number {     // explicit typing manually specify the type.
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

// Utility types (Partial, Pick, Omit, Record, Keyof)

// Partial
type UserX = {
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    phone: number | string,
    id: number,
    password: string
}

// Probleam if we need to assign some value in the define type, didn't allow. so declare as partial
// let user1: UserX = {
//     firstName: 'farhan'
// }

let user2: Partial<UserX> = {   // Partial make unsed properties to optional like `?` do.
    firstName: 'Farhan',
    lastName: 'Arshad'
};

// Pick type(Pick<data_type, key) used to reuse some roperties in other object e.g
// Also any chage in UserX type will refelect in Team type, e.g data type change of any property

type Team = {
    id: string,
    name: string,
    membaers: Array<Pick<UserX, 'firstName' | 'lastName' | 'phone'>>;
};
type PickUserX = Pick<UserX, 'firstName' | 'lastName' | 'phone'>

// Omit type(Moit<data_type, key) oposite the Pick type (omit some properties don;'t want to use)

type Team1 = {
    id: string,
    name: string,
    membaers: Array<Omit<UserX, 'is' | 'pasword'>>;
};

type OmitUserX = Omit<UserX, 'id' | 'password'>

// Record type(Record<keys_data_type, value_data_type>), used to restrict the keys datatype and values datatype for an object

type Foordorder = Record<number, string>

let foodOrder: Foordorder = {
    1: 'apple',
    2: 'oranges',
    3: 'banna',
    // "mango": 1  // not possible
}

// same for custom types
type City = 'Lahore' | 'Multan' | 'Islamabad'
type ScoreType = {
    population: number,
    score: number
};

type CityScore = Record<City, ScoreType>

let cityScore: Partial<CityScore> = {
    Lahore: {
        population: 1,
        score: 1
    },
    Multan: {
        population: 2,
        score: 2
    }

    // Dera: {  // not possble cuz Dera key doesn't exist
    //     population: 2,
    //     score: 2
    // }
}

// keyof => Produces a union type of its keys. This union type will consist
// of string literal types or number literal types, representing the names
// of the properties within that object type.

// Consider the object and want to reuse the keys
let cities = {
    multan: { area: 25 },
    lahore: { area: 25 },
    islamabad: { area: 25 },
    pindi: { area: 25 },
}

type CitiesType = typeof cities;
type CityX = keyof CitiesType;  // CityX now contains all key of cities ('multan' | 'lahore' | 'islamabad' | 'pindi')

type CityXScore = Record<CityX, ScoreType>

let cityXScore: Partial<CityXScore> = {
    lahore: {
        population: 1,
        score: 1
    },
    multan: {
        population: 2,
        score: 2
    }

    // dera: {  // not possble cuz Dera key doesn't exist
    //     population: 2,
    //     score: 2
    // }
}

// Type narrowing type guards (in, instanceof, typeof)
// Type narrowing is the concept to a broad or union type of a variable
// is refined to a more specific type within a certain scope,
// usually after a runtime check
console.log('Type narrowing');
// typeof guard
function getPostion(position: number | string) {        // union
    if (typeof position === 'string') {     // norrow down to check the specific type to only string
        console.log(position.split(" "));
    } else {
        console.log(position);
    }
}

// in guard
type Student = { study: () => {} };
type EmployeeX = { work: () => {} };

function activity(actor: Student | EmployeeX) {
    if ('study' in actor) {     // check the availbility of the property.
        return actor.study();
    } else {
        return actor.work();
    }
}

// instanceof   => h is the instance of ''Human' if and only if, the prototype chian of h contains Human.prototype
// 'instanceof' expression must be of type 'any', an object type or a type parameter.
class StudentX {
    name = "abc";
}
let studentX = new StudentX();
console.log(studentX instanceof StudentX);

// Modules & namespaces
// Module => is any file that has at least one import or export. 
// let you split code into multiple files and use import/export to share things between them.

// Namespaces => Namespace is a TypeScript-specific way of organizing code inside a single file.
// It uses the namespace keyword to wrap related functions, classes, or interfaces under one name.
// Helps avoid global name collisions in large scripts.

// Modules is already covered in JavaScript

// Namespaces   => Replaced by modules in modern TypeScript/JavaScript.
namespace MathUtils {
    export function add(a: number, b: number): number {     // without export keyword unable to use in other files.
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }
}

// Usage
console.log(MathUtils.add(10, 5)); // 15

// Declaration Merging
// Can Declare same name class|interface at different place and typescript compliler treat
// all the declaration together and treated as single one. e.g
console.log('Declaration Merging')

// Interface declaration
interface BankAccount {
    accountNumber: number;
    accountName: string,

    debit: (amount: number) => void // same goes for methods.
}

interface BankAccount { // allow to declare the same name interface.
    accountNumber: number;  // duplication is just ignored
    accountBalance: number;
    credit: (amount: number) => void
}

let acc1: BankAccount = {
    accountNumber: 123,
    accountName: "Current",
    accountBalance: 123,

    debit(amount: number): void {

    },

    credit(amount: number): void {

    }
}

// Enum Merging
enum ErrorCode {
    ARRAY,
    CLASS,
}

enum ErrorCode {    // in that case we need to define the index. cuz first declaration have 0 and 1 index by default
    INDEX = 2,
}

console.log(ErrorCode.ARRAY);
console.log(ErrorCode.CLASS);
console.log(ErrorCode.INDEX);

// Ambient Types => type declarations that describe the shape of existing code
// (usually JS or external APIs) without providing an implementation.
// They live in .d.ts (declaration files).
// Think of them as “type-only contracts” — they tell the TypeScript compiler
// what exists, but don’t generate any JavaScript code.
console.log('Ambient Types');

// Just declare without Implementation 
declare const VERSION: string;  // No JavaScript will be emitted for the declare — it’s only for type-checking.
console.log(VERSION); // TypeScript knows it's a string
