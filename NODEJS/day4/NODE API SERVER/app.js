const http = require("node:http");

const server = http.createServer((req,res)=>{
    console.log(req.url);
})

// if(req.url === "/" && req.method === "GET"){
    // this is big that's y we are using express.js
// }

server.listen(3333,()=>{
    console.log("----------- Server Started ------------")
})
