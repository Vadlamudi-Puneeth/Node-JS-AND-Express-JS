const express = require("express");

const app = express();

app.use( (req,res,next)=>{
    console.log("-->",req.method, req.url);
    next();
}) //middleware

app.use((res,req,next)=>{
    console.log("second middleware");
    next();
})

app.get(("/"),(req,res)=>{
    res.json({
        isSucess:true,
        data:{},
    })
})

app.post(("/"),(req,res)=>{
    res.json({
        isSucess:true,
        data:{},
    })
})

app.listen(3333, "localhost", ()=>{
    console.log("server started");
})
