let person = {
    name: "Sam",
    city: "Pune"
};

console.log(person.name); // Output: Sam

// Adding a New Property
person.age = 25;

// Deleting a Property
delete person.city;

// object.keys() Returns an Array of Keys
console.log(Object.keys(person)); // Output: ["name", "age", "city"]

// object.values() Returns an Array of Values
console.log(Object.values(person)); // Output: ["Sam", 25]

// object.entries() Returns an Array of [key, value] Pairs
console.log(Object.entries(person));
// Output: [["name", "Sam"], ["age", 25], ["city", "Pune"]]

// Check if a Property Exists
console.log("name" in user); // true
console.log("age" in user);  // false

// Iterating Over Properties
let person = { name: "Sam", age: 25, city: "Pune" };
for (let key in person) {
    console.log(key, person[key]);
}

// Copying an Object
let user = { name: "Sam", age: 25 };
let newUser = { ...user }; 
console.log(newUser); // { name: "Sam", age: 25 }

// Merging Objects
let address = { city: "Pune", country: "India" };
let person = { ...user, ...address };
console.log(person);
/*
{
  name: "Sam",
  age: 25,
  city: "Pune",
  country: "India"
}
*/

// shallow copy
// using Object.assign()
let origina = {
    name: "Sam",
    details: { age: 25, city: "Pune" }
  };
  let shallowCopy = Object.assign({}, origina); // Creates a shallow copy
  shallowCopy.details.city = "Mumbai"; // Modify the nested object
  console.log(original.details.city); // Output: "Mumbai" (Oops! It changed in the original)
  console.log(shallowCopy.details.city); // Output: "Mumbai"


// deep copy
let original = { name: "Sam", details: { age: 25, city: "Pune" } };
let deepCopy = JSON.parse(JSON.stringify(original)); // Deep copy
deepCopy.details.city = "Mumbai"; // Modify deep copy
console.log(original.details.city); // Output: "Pune"  (Original remains unchanged)
console.log(deepCopy.details.city); // Output: "Mumbai"
// but this loses functions and symbols

// using  structured clone algorithm
let original1 = { name: "Sam", details: { age: 25, city: "Pune" } };
let deepCopy = structuredClone(original);
deepCopy.details.city = "Mumbai";
console.log(original.details.city); // Output: "Pune"
console.log(deepCopy.details.city); // Output: "Mumbai"