// Differnet ways to loop in JS

//for loop - Used when you know the exact number of iterations.
for (let i = 0; i < 5; i++) {
    console.log(i);
} // prints 0 1 2 3 4 


//for of loop - Iterates over the values of an iterable object.
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
} // prints 1 2 3 4 5


//forEach loop - Executes a function for each array element.
let arr1 = [1, 2, 3, 4, 5];
arr1.forEach((value, index) => {
    console.log(index, value);
}); // prints 0 1 1 1 2 2 3 3 4 4


//map loop - Creates a new array with the results of calling a function for each array element.
let arr2 = [1, 2, 3, 4, 5];
let newArr = arr2.map((value) => {
    return value * 2;
});
console.log(newArr); // prints [2, 4, 6, 8, 10]


//filter loop - Creates a new array with array elements that pass a test.
let arr3 = [1, 2, 3, 4, 5];
let evenArr = arr3.filter((value) => {
    return value % 2 === 0;
});
console.log(evenArr); // prints [2, 4]


//reduce loop - Reduces the array to a single value.
let arr4 = [1, 2, 3, 4, 5];
let sum = arr4.reduce((acc, value) => {
    return acc + value;
}, 0);
console.log(sum); // prints 15

