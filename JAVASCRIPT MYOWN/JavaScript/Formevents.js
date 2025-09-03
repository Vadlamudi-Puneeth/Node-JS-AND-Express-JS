// let greet = document.getElementById("greetings");


// const handleName = (e) =>{
//     greet.innerHTML = `
//         Hello ${e.target.value}
//     `    
// }

// const handleRegister = (e)=>{
//     e.preventDefault();
//     console.log(e);
//     const pass = e.target[2].value;
    
//     if(pass.length < 8){
//         alert("Enter more than 8 characters");
//         return;
//     }

//     const EmailRegex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");

//     if(! EmailRegex.test(e.target[1].value)){
//         alert("Please Enter valid Email");
//     }else{ 
//         console.log(e.target[0].value);
//         console.log(e.target[1].value);
//         console.log(e.target[2].value);
//         console.log(e.target[3].value);

//         window.open("./html/thankyou.html","mytab")
//     }
// }



console.log("start");

const handleClick = () =>{
    console.log("clicked");
}

console.log("end");