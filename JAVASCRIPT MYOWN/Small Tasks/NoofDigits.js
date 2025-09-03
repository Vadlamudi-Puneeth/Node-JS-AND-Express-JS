// no of digits

let num = 1345
let count = 0

while(num != 0){
    num = Math.floor(num / 10)
    count+=1
}

console.log(count)
