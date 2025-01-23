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

let fruits = ["apple", "banana", "mango"];
// find the length of each word in the array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].length);
}

// conditionals in JS
if(condition){
    // code to be executed if the condition is true
}else if (anothercondition){
    // code to be executed if the condition is true
}else if (yetanothercondition){
    // code to be executed if the condition is true
}else{
    // code to be executed if the condition is false
}

// example:
if(num==0){
    // code to be executed if the condition is true
}else if (num==10){
    // code to be executed if the condition is true
}else if (num==20){
    // code to be executed if the condition is true
}else{
    // code to be executed if the condition is false
}

// switch case
switch(expression){
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
        // code block
}

// example of switch case
switch(num){
    case 0:
        // code block
        break;
    case 10:
        // code block
        break;
    case 20:
        // code block
        break;
    default:
        // code block
}

// Another way of writing conditionals:
if(num%2==0){
    console.log("Even");
}else{
    console.log("Odd");
}
// can be written as:
num%2==0 ? console.log("Even") : console.log("Odd"); // Ternary operator
// the ? is used to check the condition before the colon and the colon is used to check the condition after the colon.

// we can even store the value in a variable.
let Numtype = num%2==0 ? "Even" : "Odd";

// How to use this for multiple conditions:
let Result = num>0 ? "Positive" : num<0 ? "Negative" : "Zero";

// lets break this down:
let result = (num>0) // condtion 1
        ? // if 
        "Positive" // if the condition is true
        : // else
         (num<0) // else if
         ? // if
          "Negative" // if the condition is true
           : "Zero";  // else if the condition is false


// Loops in JS
// For loop
for(let i=1; i<=10; i++){ // i++ is the same as i=i+1 , it simply means take one step forward. If we want to take two steps forward we can write i=+2.
    console.log(i*i);
}// prints the square of the numbers from 1 to 10.



















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