// Delete all the num occurances

let arr = [1,2,2,3,3,4]
num=2
for(let i = 0;i < arr.length; i++){
    if(arr[i] == num){
        continue;
    }else{
        console.log(arr[i]);
    }
}
