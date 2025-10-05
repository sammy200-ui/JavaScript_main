// promisies in js

// promise is a object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// states of a promise
// 1. pending: initial state, neither fulfilled nor rejected.
// 2. fulfilled: meaning that the operation completed successfully.
// 3. rejected: meaning that the operation failed.

// creating a promise
let myPromise = new Promise((resolve, reject) => {
    // asynchronous operation
    let success = true; // change this to false to see rejection

    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed.");
    }
});

// consuming a promise
myPromise
    .then((value) => {
        console.log(value); // "Operation was successful!"
    })
    .catch((error) => {
        console.error(error); // "Operation failed."
    })
    .finally(() => {
        console.log("Promise has been settled (either fulfilled or rejected).");
    });

// chaining promises
let promiseChain = new Promise((resolve, reject) => {
    resolve(1);
});
promiseChain
    .then((value) => {
        console.log(value); // 1
        return value + 1;
    })
    .then((value) => {
        console.log(value); // 2
        return value + 1;
    })
    .then((value) => {
        console.log(value); // 3
    })
    .catch((error) => {
        console.error("Error in promise chain:", error);
    });


// using async/await with promises
async function asyncFunction() {
    try { // try means to try the code and if there is an error it will go to catch
        let result = await myPromise;
        console.log("Async/Await Result:", result);
    } catch (error) { // catch means to catch the error
        console.error("Async/Await Error:", error);
    } finally {
        console.log("Async/Await Promise has been settled.");
    }
}
asyncFunction();


// promise.all - takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved or rejects if any of the promises in the array reject.
let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values); // [3, 42, "foo"]
}); // prints [3, 42, "foo"]

