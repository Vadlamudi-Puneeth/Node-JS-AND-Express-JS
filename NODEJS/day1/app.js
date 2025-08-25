const os = require("node:os")

// const cpu_count = os.cpus().length;
// console.log(cpu_count);
// console.log(os.cpus());

// console.log(os.platform())
// console.log(os.totalmem())

// const {pbkdf2Sync} = require("node:crypto")

// const hash = pbkdf2Sync("Puneeth","heavy-security-asd",100000,10 ,"sha512");
// Puneeth: this you want to change
// 100000: this is the no of aterations bigger number more security and also more effect to run the program
// 10: no of characters
// heavey-security-asd if password is same for two users then it change like different salt different users
// sha512: this is the algo
// console.log(hash.toString("hex"));

const { pbkdf2Sync } = require("crypto");

const hash1 = pbkdf2Sync("Puneeth", "salt1", 100000, 10, "sha512");
const hash2 = pbkdf2Sync("Puneeth", "salt2", 100000, 10, "sha512");

console.log("salt1 →", hash1.toString("hex"));
console.log("salt2 →", hash2.toString("hex"));

