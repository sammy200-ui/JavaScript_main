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

// function adder(a, b) {

let calculator = {
    add: adder,
    sub: function(a,b ){
        console.log(a-b)
    },

    mul:function(a,b){
        console.log(a*b)
    } ,
//     // both upper and lower are same just remove the colen and the function inbuild name.
    mul(a,b){ 
        console.log(a*b)
    } ,
   
}