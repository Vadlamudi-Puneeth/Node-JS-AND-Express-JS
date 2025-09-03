//synchronous

const fs = require("fs")

// fs.writeFileSync("./my-file.txt", "ABCD");
const res = fs.readFileSync("./my-file.txt","utf-8");

console.time("id1")
console.log(res)
console.timeEnd("id1")