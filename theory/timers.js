// timers in JS

// setTimeout
// setInterval
// clearTimeout
// clearInterval

function greet(){
    console.log("Hello World");
}
setTimeout(greet, 2000); //greet function will be called after 2 seconds

let timeout = setTimeout(greet, 2000); //greet function will be called after 2 seconds
clearTimeout(timeout); //greet function will not be called

let interval = setInterval(greet, 2000); //greet function will be called every 2 seconds
 clearInterval(interval); //greet function will not be called anymore

// Example of using setTimeout to simulate a delay in fetching data from a server
function fetchData(){
    console.log("Fetching data from server...");
    setTimeout(() => {
        console.log("Data fetched from server");
    }, 3000); //data will be fetched after 3 seconds
}
fetchData();

