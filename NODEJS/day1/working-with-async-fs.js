// async

const fs = require("node:fs");

console.log("start")
fs.readFile("./my-file.txt", "utf-8", (err,data)=>{
    if(err){
        console.log("something went wrong cannot read file");
    }else{
        console.log(data);
    }
})
console.log("end")