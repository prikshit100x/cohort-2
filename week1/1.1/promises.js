// syntactical sugar that make the code slightly more readable

// no callbacks in promises

const fs =require('fs');

function prikshitReadFile(){
    return new Promise(function(resolve){
        fs.readFile('a.txt','utf-8', function(err,data){
            resolve(data);
        })
    })
}

function onDone(data){
    console.log(data);
}

prikshitReadFile().then(onDone);