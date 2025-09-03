// Qs. Write a JavaScript program to get the first n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [7, 9, 0]

let arr = [1,2,3,4,-2,-4]

for(let i = 0;i < arr.length; i++){
    if(arr[i] > 0){
        console.log(arr[i]);
    }
}
