// A promise is an object returned by an asynchronous function, which represents the current state of the operation

const { resolve } = require("path");

// the promise object provides methods to handle the eventual success or failure of the operation.

// fetch('http://somwthing.com').then().catch().finally();

// creating promise
const promisesOne = new Promise( function(resolve,reject){
    // Do an async task
    // DB Calls , cryptography , network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve(); // .then() se connected hoga
    },1000)
})

//comsumption
promisesOne.then(function(){
    console.log("Promise is consumed");
})


new Promise( function(resolve,reject){
setTimeout(function(){
    console.log("Async task 2");
    resolve();
},1000)
}).then(function(){
    console.log("Async Task 2 resolved");
})

// passing values
const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve({username : "chai", email:"chaiorcode@gmail.com"})
    },1000)
})

PromiseThree.then(function(user){ // obj hi user
console.log(user);
})

const promiseFour =new Promise(function(resolve,reject){
    setTimeout(function(){
     let error =false
     if(!error){
      resolve({username:"prikshit",password:"123"})
     }
     else{
        reject('ERROR: Something went wrong')
     }
    },1000)
})

promiseFour
.then((user)=>{
console.log(user);
return user.username // return value next then() me jaege
})
.then((username)=>{
console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The Promise is Either Resolved or Rejected");
})
