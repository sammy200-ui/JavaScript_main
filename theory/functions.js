// functions in js
// function is a block of code that performs a specific task when called or invoked.

// function declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!

// function expression
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // Output: 8

// arrow function
const multiply = (a, b) => a * b;
console.log(multiply(4, 2)); // Output: 8

// default parameters
function sayHello(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(sayHello()); // Output: Hello, Guest!

// rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

// callback function
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "Sample Data" };
        callback(data);
    }, 1000);
}
fetchData((data) => {
    console.log("Fetched Data:", data);
});

// higher-order function
function operate(a, b, operation) {
    return operation(a, b);
}
const result = operate(5, 3, (x, y) => x - y);
console.log(result); // Output: 2


// function scope
function scopeExample() {
    let localVar = "I'm local";
    console.log(localVar); // Accessible here
}
scopeExample();
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined


// global scope
let globalVar = "I'm global";
function accessGlobal() {
    console.log(globalVar); // Accessible here
}
accessGlobal();
console.log(globalVar); // Accessible here too

// recursion
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// function hoisting
hoistedFunction(); // Works because of hoisting
function hoistedFunction() {
    console.log("This function is hoisted!");
}
// nonHoistedFunction(); // Uncaught ReferenceError: Cannot access 'nonHoistedFunction' before initialization
const nonHoistedFunction = function() {
    console.log("This function is not hoisted!");
};
nonHoistedFunction();

// methods in objects
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};
console.log(calculator.add(10, 5)); // Output: 15
console.log(calculator.subtract(10, 5)); // Output: 5

// function constructors
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("John", 30);
console.log(person1.name); // Output: John
console.log(person1.age);  // Output: 30    

