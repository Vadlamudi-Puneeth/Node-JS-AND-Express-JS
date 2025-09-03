function sucessCallBack(data){
    console.log("Sucess",data);
}

function failureCallBack(){
    console.log("failure");
}


const dummy = fetch('https://dummyjson.com/recipes')
.then(response => response.json())
.then(sucessCallBack)
.catch(failureCallBack);

