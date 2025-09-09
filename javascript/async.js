// Shradha Khapra Videos Lecture 12 : Callbacks, Promises & Async Await | JavaScript Full Course
// Async await, promise chains, callback hell (Async Programming)

// synchronous programing (Execute the linse in the sequence order)
console.log("Synchronous");
console.log('one');
console.log('two');
console.log('three');

// Asynchronous programing
console.log("Asynchronous");
console.log('one');
console.log('two');
function helloMethod() {    // didn't wait to compelte the task.
    console.log("hello method");
}
setTimeout(helloMethod, 2000); // timeout; 2s = 2000ms, helloMethod is also the callback.
console.log('three');
console.log('four');

// with arrow notation
setTimeout(() => {
    console.log("hello statement");
}, 3000);
console.log('five');
console.log('six');

// callbacks
function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, sum); // callback is a method that is passed as a param.

console.log("Arrow funciton")
// Can be used a arrow function
calculator(3, 2, (a, b) => {
    console.log(a * b);
});

// callback hell
// nested callback stacked below one another froming a pyramind structure (Pyramind of Doom)
// let have exmaple in which we need data of 3 user from the database, in a sequence like with inidividual delay.

function getData(dataid, getNextData) { // this methid will mimic the data is loading from database.
    // 2s 
    setTimeout(() => {
        console.log(`data=${dataid}`)
        if (getNextData) {
            getNextData();
        }
    }, 2000)
}
// following nested callback is not the good practice and called callback hell. difficult to understand and manage.
getData(1, () => {  // this statement will get data with inidividual delay.
    getData(2, () => {
        getData(3, () => {
            getData(4, () => {
                getData(5);
            });
        });
    });
});

// Promises (solution of the callback hell).
// States (pending (results undefined), fulfilled(resolved) value results, rejected(with error object))
let promise = new Promise((resolve, reject) => {     // resolve, and reject are the callback provided by js 
    console.log('I am a promise');
    let a = true;
    if (a === true) {
        resolve("Success");     // to mark as complete with success
    } else {
        reject("some error");   // to mark as complete with error
    }
});

console.log(promise);

// Async data fetching with promise
function getDataPromise(dataid) {
    return new Promise((resolve, reject) => {
        // 5s 
        setTimeout(() => {
            console.log(`data=${dataid}`)
            resolve("success");
            // reject("error");
        }, 5000)
    });
}

let dataPromise = getDataPromise(1);

console.log(dataPromise);
setTimeout(() => {
    // check promis value after 5s
    console.log(dataPromise);
}, 5000)

// Use Promis with callback methods.
// .then() -> executes in case of fulfilled.
// .catch() -> execuets in case of reject.

const getPromisCallback = () => {
    return new Promise((resolve, reject) => {
        console.log('I am a promise');
        resolve("Success");     // to mark as complete with success
        // reject("error");
    });
};

let promisCallback = getPromisCallback();
promisCallback.then((result) => {   // result object is same as passed with resolved method call
    console.log('promise fulfilled', result);
});

promisCallback.catch((error) => {   // error object is same as passed with reject method call
    console.log('promise fulfilled', error);
});

// Promise Chain

function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data1')
        }, 4000)
    })
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data2')
        }, 4000)
    })
}

console.log('fetching data 1....');
asyncFunc1().then((result) => {
    console.log(result);
    asyncFunc2().then((result) => {
        console.log(result);
    });
})

// update the callback exmaple to Promise chain
function getDataPromiseChain(dataid) { // this methid will mimic the data is loading from database.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data = ${dataid}`);
            resolve('Success');
        }, 3000)
    });
}
// following nested callback is not the good practice and called callback hell. difficult to understand and manage.
console.log('Promise chaning fetching data 1....');
getDataPromiseChain(1).then((results) => {
    console.log('Promise chaning fetching data 2....');
    return getDataPromiseChain(2);
}).then((results) => {
    console.log('Promise chaning fetching data 3....');
    return getDataPromiseChain(3);
}).then((results) => {
    console.log(results);
});

// Async-Await (make it more simple Promise Chaining. Callback hell => Promise Chain => Async Await)

// async is a keyword used to make a method Async, and always return the Promise.
// await is the key word to pause the execution of its surrounding async until the Promiss is settled.
// await keyword can only be used with async function call.

// await getDataPromiseChain(1);   // can't use directly not a valid statement

// Consider the example

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {      // mimic the time taking call
            console.log('weather data');
            resolve(200);
        }, 2000);
    });
}

async function getWeatherData() {
    console.log('Fetching weather data');
    await api();        // this is valid statement
    console.log('got the weather data');
}

getWeatherData()

// Exmaple to Promise Chain => Async Await conversion
async function getAllData() {    // extra method call to use async-await to overcome we can used IIFE.
    console.log('Async-Await fetching data 1....');
    await getDataPromiseChain(1);
    console.log('Async-Await fetching data 2....');
    await getDataPromiseChain(2);
    console.log('Async-Await fetching data 3....');
    await getDataPromiseChain(3);
    console.log('Async-Await fetching data 4....');
    await getDataPromiseChain(4);
    console.log('Async-Await fetching data 5....');
    await getDataPromiseChain(5);
}

getAllData();
// We can't use both async-await and .then()|.catch() at the same time. use one at a time.

// IIFE: Immediately Invoked Function Expression nameless functions. // 
(async function () {    // no need any extra method call statement, and can't reused.
    console.log('IIFE Async-Await fetching data 1....');
    await getDataPromiseChain(1);
    console.log('IIFE Async-Await fetching data 2....');
    await getDataPromiseChain(2);
    console.log('IIFE Async-Await fetching data 3....');
    await getDataPromiseChain(3);
    console.log('IIFE Async-Await fetching data 4....');
    await getDataPromiseChain(4);
    console.log('IIFE Async-Await fetching data 5....');
    await getDataPromiseChain(5);
})();
