// promise
// funtion
// fetch
// callback 
// hof
// Array methods
//timers in JS
//async in JS


// promises 
let marks = 40;
let promise = new Promise((resolve, reject) => {
    if (marks == 40) {
        resolve('pass');
    } else {
        reject('fail');
    }
});
promise
    .then(result => console.log(result))
    .catch(error => console.log(error));


    let markss = 40;
    let promisee = new Promise((resolve, reject) => {
        if (marks == 40) {
            resolve({passed:'pass'});
        } else {
            reject({failed:'fail'});
        }
    });
    promisee
        .then(accept => console.log(accept))
        .catch(error => console.log(error));



//fetch it atleast take one argument

let value = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) =>{
        return res.json();
    }).then(parameter => { //this .then catched the value of the previous .then
        console.log(parameter);
        let data = parameter;
        console.log(data);
        let keysdata = Object.keys(data);
        console.log(keysdata);
    })
    .catch((error) =>{
        console.log(error);
    }
    );
    

// async and await
//async deifnes a function that will always return a promise
//await is used to wait for the promise to resolve.
// makes the code shorter and cleaner rather than using .then and .catch chainings.

async function fetchData(){
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let json = await data.json();
    console.log(json);
}
//try and catch block
async function fetchData(){
    try{ //then
        let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let json = await data.json();
        console.log(json);
    }catch(error){ //
        console.log(error);
    }
}