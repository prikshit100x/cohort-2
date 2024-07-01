// indepedent pro that are supposed to perform some task

function findSum(a,b){
 return a+b
}

const value =findSum(1,2)
console.log(value);

function calculateArthmetic(a,b,type){
    if(type== "sum"){
        return a+b
    }
    if(type == "minus"){
        return a-b
    }
}
  function greet(){
    console.log("hello world");
  }
 setTimeout(greet,1*1000)


 // setInterval(greet,1*1000)