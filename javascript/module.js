// Java Scripts Modules
// Split up your code into separate components
// Easier to maintin and organize
// Supported all major browsers.

import { double, name } from './utils.js';    // successfuly import the double funtion form the utils.js files
// can also assign alias to the imports example given
import { double as utilsDouble } from './utils.js';
// can import event thing at once form a file
import * as Utils from './utils.js';

console.log('JS Mobules');

console.log(double(5));
console.log(name);
console.log(utilsDouble(2));

console.log(Utils.double(3));
console.log(Utils.name);

// to import the default
// import {default as sayHello} from './utils.js';
import sayHello from './utils.js';       // sayHelo automatically pick default export

sayHello();

Utils.water();  // comming from helper.js via utils.js