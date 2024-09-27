const express =require("express")
const app =express()
app.use(express.json())
let users =[{
    name:"prikshit",
    kidneys:[{
        healthy:false
    }]
}];

app.get("/",function(req,res){
    const prikshitKidneys =users[0].kidneys;

    const numberOfKidneys =prikshitKidneys.length;

    let numberOfHealthyKidneys =0;

    for(let i=0;i<numberOfKidneys;i++){
        if(prikshitKidneys[i].healthy){
            numberOfHealthyKidneys =numberOfHealthyKidneys+1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

// post req , we send data in body
// for post we add

app.post("/",function(req,res){
const isHealthy = req.body.isHealthy;
users[0].kidneys.push({
    healthy:isHealthy
})
res.json({
    "msg":"done!"
})
})
app.listen(3000)

// all kidneys t be healthy
app.put('/',function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({

    })
})

// delete all unhealthy kidneys
app.delete("/", function (req, res) {
    if(atleastOneUnhealthyKidney()){

   
    users[0].kidneys = users[0].kidneys.filter(kidney => kidney.healthy);
    res.json({ msg: "Done!" });
}
else{
    res.status(411).json({
        msg:"You have no bad kidneys"
    })
}
  });

  function atleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;

    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney=true
        }
    }
    return atleastOneUnhealthyKidney;
  }