// let answer = 1+2+3+4+5

//loop => iterate thru over some code segment again and again
let ans =0
for(let i=1;i<=100;i++){
 ans =ans + i;
}
console.log(ans);



const ages = [21,22,23,24,25,26]
for(let i=0;i<ages.length;i++){
    if(ages[i]%2==0){
      console.log(ages[i]);
    }
}

const users =[{
    firstName:"prikshit",
    gender:"male"
},{
    firstName:"sahil",
    gender:"male",
    metdata:{
        age:21,
        adress:"chd"
    }
},{
    firstName:"swati",
    gender:"female"
}]


for(let i=0;i<users.length;i++){
    if(users[i]["gender"] == "male"){
        console.log(users[i]["firstName"]);
    }
}
