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


// Loops in JS
// For loop
for(let i=1; i<=10; i++){ // i++ is the same as i=i+1 , it simply means take one step forward. If we want to take two steps forward we can write i=+2.
    console.log(i*i);
}// prints the square of the numbers from 1 to 10.


// lets do a question with arrays and loops.
let fruitList = ["apple", "banana", "mango" , "orange" , "grapes"];
for(let i=0; i<fruitList.length; i++){
    console.log(fruitList[i].length);
}// prints the length of each fruit in the array. // 5 6 5 6 6

// While loop
let i=1; // initialization
while(i<=10){ // condition
    console.log(i*i);
    i++; // increment
}// prints the square of the numbers from 1 to 10.

// Do while loop
let j=1; // initialization
do{
    console.log(i*i);
    i++; // increment
}
while(i<=10); // condition
// prints the square of the numbers from 1 to 10.



// Functions in JS
let calculator= {
    add : adder , // function can be assigned to a variable.

    sub : function adder(a,b){
        console.log(a-b);
        return a-b; // returns the value of a-b.
    } ,

    mul(a,b){ // another way of writing functions. just remove the function keyword and the colon.
        console.log(a*b);
    },

    div :(a,b) => console.log(a/b) // Arrow function; another way of writing functions.
}
function adder(a,b){ // This function is stored in the add variable.
    console.log(a+b);
}

// calling the functions
calculator.add(2,3); // 5
calculator.sub(2,3); // -1
calculator.mul(2,3); // 6
calculator.div(2,3); // 0.6666666666666666  // 2/3


// Arrays and Array methods
let numb = [5, 6, 7, 8, 9, 10];
numb.forEach(ele=> { 
    console.log(ele*ele);
}); 

let numbs = [1,2,3,4,5,6,7,8,9,10];
 
let even = numbs.filter(ele=> {
    return ele%2==0;
});
console.log(even);

let arr = [
    [1,1,1],
    [2,2,2],
    [3,3,3]
]
let reuslt = [].concat(...arr);
console.log(result);
// output = [1,1,1,2,2,2,3,3,3]; 


// Objects in JS
// Objects are key value pairs.
let student_data = {
    "name" : "John",
    "age" : 25,
    "city" : "New York"


}
console.log(student_data.name); 
console.log(student_data["age"]);
console.log(student_data.city);

// . notation is used to access the value of the key.
// [] notation is used to access the value of the key.

let car={
    brand : "skoda",
    color : "Black",
    carName:"slavia",
    fuelType:["petrol","diesel","hybrid","electric"],
    // type1
    start(){
        return "Car started";
    },
    // type2
    stop : function(){
        return "Car stopped";

    
    } ,
    // type3
    horn: () => {
        return "Horn is working";
    }

};
console.log(car);
console.log(car.start()); 
console.log(car.stop());
console.log(car.horn());
delete car.color; 


// callback functions
