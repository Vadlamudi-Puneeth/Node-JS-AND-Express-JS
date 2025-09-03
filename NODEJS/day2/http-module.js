const http = require("node:http");

const server = http.createServer((req,res)=>{
    console.log("Hello");  
    res.writeHead(200,{"Content-type":"text/html" })
    // res.writeHead(301,{location: "https://www.amazon.com/" })

    res.end("<h1 style='color:red'>Hello from node JS</h1>");
})

server.listen(3057,()=>{
    console.log("server is running")
}) // range 1000 - 9999

// http://localhost:3057
// http://127.0.0.1:3057

// if we need to change or edit anything again we need to start the server that's why
// we need to install npm install nodemon -g (g for gloabal lifetime we can do)

// status code
// 200 - ok
// 201 - Created
// 204 - No Content (Delete)

// 301 - Moved Permanently
// 307 - Moved Temporarily

// 400 - Bad Request
// 401 - Unauthorised
// 403 - Forbidden (dont have access)

// 500 - Internal Server Error
// 502 - Bad Gateway


