const express = require("express");

const app = express();

app.get("/",(req,res,next)=>{
    // console.log(req.url, req.method);
    // res.end("<h1>hi</h1>")
    res.json({
        isSucess : true,
        message: "Server is running fine...",
        data:{},
    })
});

app.post(("/"),(req,res,next)=>{
    res.json({
        isSucess : true,
        message: "Server is running psr fine...",
        data:{},
    })
})

app.listen(3333, "localhost", ()=>{
    console.log("--------- Server Started ------------")
})
