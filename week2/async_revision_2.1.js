// call backs
function square (n){
    return n*n;
}
function squareofsomething(a,b,fn){
    let square1 =fn(a);
    let square2 =fn(b);
    return square1+square2;
}
let ans =squareofsomething(1,2,square)
console.log(ans);

// Async Functions


function onDone(content){
    console.log(content);
}

setTimeout(onDone,1000)


console.log("hi there");
let sum=0;
for(let i=0;i<10000;i++){

sum+=i;

}
console.log(sum);

const fs =require('fs');

fs.readFile("a.txt","utf-8", function(err,data){
    console.log(data);
})

// PROMISES
// syntactical sugar 
// call backs are ugly
// under the hood convert into call backs





