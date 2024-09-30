const express =require('express')
const app  =express();

// this middleware is going to call everywhere =>
   let numberOfReq=0
    function calculatereq(req,res,next){
   numberOfReq++
    }

    app.use(calculatereq)
    //any req that is coming to any route after this will have this middleware is added
app.use(express.json())
//why we call it () => it return a function itself not a number
function kidneyMiddleware(req,res,next){
    const kidneyId =req.query.kidneyId
    const username =req.headers.username
    const password=req.headers.password
    if(kidneyId!=1 && kidneyId!=2){
        res.status(403).json({
            msg:"Inputs are not right!"
        });
        
    }
    else{
        next();
    } 
}
function userMiddleware(req,res,next){
    const kidneyId =req.query.kidneyId
    const username =req.headers.username
    const password=req.headers.password
    if(username!="prikshit" && password!='pass'){
        res.status(403).json({
            msg:"Inputs are not right!"
        });
        
    }
    else{
        next();
    }

}

app.get('/health-checkup',kidneyMiddleware,userMiddleware,function(req,res){
    res.send("your health is healthy")
 
 })

 app.get('/kidney-checkup',kidneyMiddleware,userMiddleware,function(req,res){
    res.send("your health is healthy")
 
 })


 app.get('/heart-checkup',kidneyMiddleware,userMiddleware,function(req,res){
    res.send("your health is healthy")
 
 })

 app.listen(3000)


 