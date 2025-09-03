// maximum
let arr = [1,2,3,5,4,2,1]
let max = 0;
for(let i = 0;i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}
console.log(max)