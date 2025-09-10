// Want to use this method inthe module.js file for that just need to use export keyword before funcation
export function double(n) {     // with expots any js file can import and use double function
    return n * 2;
}

export const name = "Farhan Arshad";    // can export any thing constant, variables, classes, object, functions, array.

// can export multiple items at onces
// export { double, name };

// Also export a defaut
export default function sayHi() {
    console.log("Hi!");
}
// Aggregating modules
export { water } from './helper.js';    // export water function that comming form the halper.js, and utils.js work like a bridge.
