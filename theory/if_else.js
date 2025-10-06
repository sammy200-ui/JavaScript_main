// if else statement
if (true) {
  console.log("if");
} else {
  console.log("else");
}   

// if else if else statement
let num = 10;
if (num === 0) {
  console.log("num is 0");
} else if (num === 10) {
  console.log("num is 10");
} else {
  console.log("num is neither 0 nor 10");
}

// switch case statement = means of handling multiple conditions by passing a variable to be tested against different values.
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}


// Ternary operator = condition ? expressionIfTrue : expressionIfFalse
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes        


// storing if else statement in a variable using ternary operator
let Numtype = num%2==0 ? "Even" : "Odd";


// Ternary operator can be nested to handle multiple conditions.
let number = 0;
let numberType = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero"; // this line means if number is greater than 0 then Positive else if number is less than 0 then Negative else Zero
console.log(numberType); // Output: Zero    