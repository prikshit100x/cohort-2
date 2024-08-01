//synchronous => one after the other , sequential

// asynchrounuos => multiple thimngs are context switching with each other



function findSum(n){
let ans =0;
for(let i=0;i<n;i++){
    ans+=i;
}
return ans;
}

function findTill100(){
   console.log(findSum(100)); 
}
setTimeout(findTill100,1000) // settimeout is async function
console.log("hello ji");



const fs =require("fs")

fs.readFile('a.txt',"utf-8", function(err,data){
    console.log(data);
})

console.log("hi there");

let a =0;
for(let i=0;i<100000;i++){
    a++;
}
console.log("hi there 2");

//hi there
//hi there-2
// hi from t.txt file


