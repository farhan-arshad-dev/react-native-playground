let sId;
console.log(`sId = ${typeof (sId)}`);
let sId1;
console.log(`sId1 = ${typeof (sId1)}`);
let sId2 = null;
console.log(`sId2 = ${typeof (sId2)}`);
sId2 = 2;
console.log(`sId2 = ${typeof (sId2)}`);
let id = 5;
console.log(`Id = ${id}`);
let id1 = 5;
let company = 'Arbisoft';
let isPublished = true;
let x = 'string';
x = 5;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
let person = [1, 'Hello!', true];
let employee;
employee = [
    [1, 'Farhan'],
    [2, 'Arshad'],
    [3, 'Arbisoft'],
];
console.log(employee);
let pId;
pId = 5;
pId = '5';
function getBear() {
    return { name: 'Baby Bear', honey: true };
}
const bear = getBear();
bear.name;
bear.honey;
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
;
console.log(Direction1.Up);
console.log(Direction1);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "up";
    Direction2["Down"] = "down";
    Direction2["Left"] = "left";
    Direction2["Right"] = "right";
})(Direction2 || (Direction2 = {}));
;
console.log(Direction2.Up);
console.log(Direction2);
const user = {
    id: 1,
    name: 'farhan'
};
console.log(user);
let cid = 1;
let customerId = cid;
let customerId1 = cid;
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function addNum1(x, y) {
    console.log(x + y);
}
addNum1(1, 2);
console.log('Interfaces');
const user1 = {
    id: 1,
    name: 'Farhan',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(1, 2));
console.log(sub(10, 2));
class Person {
    id;
    name;
    age;
    phoneNumber = 123;
    address = 'xyz';
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const farhan = new Person(1, 'farhan');
console.log(farhan);
console.log(farhan.register());
class Employee extends Person {
    position;
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
;
const emp = new Employee(3, 'Nomman', 'Manager');
console.log(emp);
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(['a', 'b', 'c']);
stringArray.push('d');
export {};
//# sourceMappingURL=basics.js.map