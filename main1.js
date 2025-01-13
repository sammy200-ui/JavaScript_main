// Basics of JS
console.log("Hello, world!"); //prints "Hello, world!" to the console.
console.log(42);             // Prints number .
console.log(true);           // boolean value.


let greeting = "Hi";
const pi = 3.14;     // Value cannot be changed.
var color = "blue";  // Function-scoped.

greeting = "Hello";  // Works for let.
color = "red";       // Works for var.
pi = 3.14159;        // Cannot reassign const.



// let discountpercentage = 55;
// let isCheap = !(discountpercentage > 50);


let fruits = ["apple", "banana", "mango"];
// find the length of each word in the array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].length);
}

// learn for in and for of loops