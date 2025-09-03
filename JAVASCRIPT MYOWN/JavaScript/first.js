// // console.log("I am going to learn u");
// let a = 10
// let b = 15
// let c = a + b
// console.log(c)

// let pencil = 5
// let pen = 3
// console.log("your pay",pencil + pen)
// console.log(`your pay ${pen + pencil}`)

//    ***********  Create a traffic light system that shows what to do based on colours

// let color = prompt("Enter the color that you want: ")

// if(color == "red"){
//     console.log("stop")
// }else if(color == "yellow"){
//     console.log("slow down")
// }else{
//     console.log("move")
// }


//             **************** Use switch statement to print the day of the week using a number variable 'day' with values 1 to 7

// let key = 5
// switch(key){
//     case 1:
//         console.log("monday")
//         break;
//     case 2:
//         console.log("tuesday")
//         break;
//     case 3:
//         console.log("wednesday")
//         break;
//     default:
//         console.log("Invalid")
// }

//      ********************* trim

// str = "    hell "
// console.log(str.trim())

// let msg = ' apna   '
// console.log(msg.trim())

// let str = msg.trim()
// console.log(str.trim())

// let str = "puneeth"
// console.log(str.indexOf("nee"));

// let str = "                               hello "
// console.log(str.toUpperCase().trim());

// let str = "Ilovecoding"
// console.log(str.slice(1,4));
// console.log(str.slice(-3));

// console.log(str.replace("love","do"))


//        **************  Trim and convert into uppercase

// let msg = "help!"
// console.log(msg.trim().toUpperCase())

// let name = "apNaCollege"
// console.log(name.slice(4,9))
// console.log(name.indexOf("Na"))
// console.log(name.replace("Na","na"))

// let newString = name.slice(4,12).replace("l","t")
// console.log(newString)


// let student1 = "nani"
// let student2 = "puneeth"
// let student3 = "pavan"

// let studentArray = [student1,student2,student3]
// console.log(studentArray)
// console.log(studentArray[1])
// console.log(studentArray[1][0])

// studentArray.push("lpc")
// studentArray.pop()
// studentArray.unshift("start ")
// studentArray.shift()
// console.log(studentArray)


// ****************** from given state of an array, change it into final state

// let start=  ["january","july","march","august"]
// to
// end: ['july','june','march','august']

// start.shift()
// start.shift()

// start.unshift("june")
// start.unshift("july")

// console.log(start)

// let primary = ["red","green","yellow"]
// console.log(primary.indexOf("yellow"))

// console.log(primary.includes("green"))

// let primary = ["red","blue","pink"]
// let secondary = ["green","yellow","vango"]

// console.log(primary.concat(secondary))
// console.log(secondary.reverse())

// let colors = ["red","blue","green","yellow"]
// colors.splice(0,2,"an","a")
// console.log(colors)

// let num = [3,4,7,1,2,4,0]
// console.log(num.sort())

// let start = ["january","july","march","august"]
// ["july","june","march","august"]
// console.log(start.reverse().indexOf("march"))

// start.splice(0,2,"july","june")
// console.log(start)


// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [7, 9, 0]

// let array = [7,9,0,-2]
// let n = 3
// console.log(array.slice(0,n))

// let array = [7,9,0,-1]
// let n = 3
// console.log(array.slice(-n))

// let str = ""
// if(str.length == 0){
//     console.log(true)
// }else{
//     console.log(false)
// }

// let str = "nanipune"
// let idx = 4
// if(str[idx] == str[idx].toLowerCase()){
//     console.log(true)
// }

// let arr = [1,2,4,4]
// console.log(arr.indexOf(3))

//******************** loops                         */

// for(let i = 0;i < 5; i++){
//     console.log(i)
// }

// **************** print odd numbers 

// let n = prompt("Enter the number: ")

// for(let i = 1;i < n; i++){
//     if(i % 2 != 0){
//         console.log(i)
//     }
// }

// ******************************* MULTIPLICATION TABLE

// let n = 5
// for(let i = 1;i <= 10; i++){
//     console.log(n+' * ' +i+" = "+(n * i));
// }

// for(let i = 1;i < 5; i++){
//     for(let j = 1;j < 5; j++){
//         console.log(j);
//     }
// }

// let i = 0
// while(i <= 5){
//     console.log(i)
//     i++
// }


// let favMovie = "avatar";

// let guess = prompt("Guess the name of the movie").toLowerCase().trim();

// while (guess !== favMovie) {
//     console.log("Wrong");
//     guess = prompt("Guess the movie name again").toLowerCase().trim();
// }

// console.log("Correct! The movie is Avatar.");

// let i = 1
// while(i <= 5){
//     if(i == 3){
//         break;
//     }
//     console.log(i)
//     i++
// }

// let fruits = ["mango","apple","banana"]

// for(let fruit of fruits){
//     console.log(fruit)
// }

// ********************** TO DO APP

// let req = prompt("Enter the task u want")
// let todo = []

// while(true){

//     if(req == "quit"){
//         console.log("quitting");
//         break;
//     }

//     if(req == "list"){
//         console.log("_________________")
//         for(let i = 0;i < todo.length; i++){
//             console.log(todo[i]);
//         }
//         console.log("_________________")
//     }else if(req == "add"){
//         todo.push(prompt("Enter the activity u want to add"));
//     }else if(req == "remove"){
//         let index = prompt("ENter the task index u want to remove");
//         todo.splice(index,1);
//     }

//     req = prompt("Enter the task u want to do")

// }

// Delete all the num occurances

// let arr = [1, 2, 3, 4, 5, 6, 2, 3]
// let num = 2

// for(let i = 0;i < arr.length; i++){
//     if(arr[i] == num){
//         continue;
//     }else{
//         console.log(arr[i]);
//     }
// }

// to find no of digits in the number

// let num = 23454;
// let count = 0;

// while (num !== 0) {
//     num = Math.floor(num / 10);
//     count++;
// }

// console.log(count); // Output: 5

// let num = 12345
// let sum = 0

// while(num != 0){
//     let digit = num % 10;
//     sum = sum + digit;
//     num = Math.floor(num / 10);
// }

// console.log(sum)

// *****  factorial of a number

// let num = 5
// let fact = 1

// for(let i = 1;i <= 5; i++){
//     fact = fact * i;
// }

// console.log(fact)

// ******** largest number in array

// let arr = [1,11,3,4,5]
// let max = 0

// for(let i = 0;i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }

// console.log(max)

// ************* Object literals

// const student = {
//     name: "nani",
//     age: 20,
//     marks: 90,
//     city: "Delhi"
// };


// *** creating an object literal for the properties of thread/ twitter post which includes
// Username, content, likes, reposts, tags

// const post = {
//     username: "@nani_puneeth",
//     content: "This is my first post",
//     likes: 1000,
//     reposts: 90,
//     tags: 100
// };

// console.log(post["likes"])
// console.log(post.tags);

// const student = {
//     name: "nani",
//     age: 20,
//     marks: 95,
//     city: "delhi"
// };

// student.city = "mumbai"
// student.gender = "male"
// student.marks = "A"

// console.log(student);

// Objects of Objects

// const classInfo = {
//     nani: {
//         gender: "male",
//         grade: "A"
//     },
//     puneeth: {
//         gender: "male",
//         grade: "A+"
//     },
//     bhanu: {
//         gender: "female",
//         grade: "B"
//     }
// };

// console.log(classInfo)

// Array of objects

// const classInfo = [
//     {
//         name: "aman",
//         grade: "A+",
//         city: "delhi"
//     }
// ]

// console.log(classInfo)


// ***** Generate a random number between 1 and 100

// console.log(Math.floor(Math.random()*100)+1);

// console.log(Math.floor(Math.random()*5) + 1);

// // between 20 and 25
// console.log(Math.floor(Math.random()*5) + 21);

// Qs1. Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].
// console.log(Math.floor(Math.random()* 6 ) + 1)

// const obj = {
//     car :{
//         name: "sui",
//         model: "bui",
//         color: "blue"
//     }
// }

// console.log(obj)

// const person = {
//     name: "nani",
//     age: "20",
//     city: "kavali"
// }
// person.city = "newyork"
// person.country = "US"
// console.log(person)



//  -- fUNCTIONS

// function hello(){
//     console.log("print")
// }

// hello();

// create a function which gives average of three numbers

// function avg(num1,num2,num3){
//     console.log((num1 + num2 + num3) / 3);
// }

// avg(2,3,4)

// create a function that returns sum of numbers from 1 to n

// function sumOfNumbers(n){
//     let sum = 0;
//     for(let i = 1;i <= n; i++){
//         sum+=i;
//     }
//     return sum;
// }

// console.log(sumOfNumbers(6));

//  create a function that returns all the string in the array

// function fun(arr){
//     let str = "";
//     for(let i = 0;i < arr.length; i++){
//         str += arr[i];
//     }
//     return str;
// }

// let arr = ['nani',' puneeth',' is',' using',' insta'];
// console.log(fun(arr));

//  Write a JavaScript function that returns array elements larger than a number.

// function func(num,arr){
//     for(let i = 0;i < arr.length; i++){
//         if(arr[i] > num){
//             console.log(arr[i]);
//         }
//     }
// }

// let num = 5
// let arr = [1,2,3,4,5,6,7,8,9]
// func(num,arr);

// Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.

// function func(arr){
//     let index = 0;
//     let max = arr[0].length;
//     for(let i = 0;i < arr.length; i++){
//         if(arr[i].length > max){
//             max = arr[i];
//             index = i;
//         }
//     }
//     console.log(arr[index]);
// }

// country = ["Australia", "Germany", "United States of America"] 
// func(country);

//Write a JavaScript function to count the number of vowels in a String
// argument.

// function fun(str){
//     let count = 0;
//     for(let i = 0;i < str.length; i++){
//         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'o' || str[i] == 'u' || str[i] == 'i'){
//             count+=1;
//             console.log(str[i]);
//         }
//     }
//     console.log(count);
// }

// let str = "qwertyujhgfdcxxscdvfgaxszcvbnmk";
// fun(str);

// function fun(start,end){
//     let diff = end - start;
//         console.log(Math.floor(Math.random() * diff) + start);
    
// }

// fun(5,10);

// Write a JavaScript function to extract unique characters from a string

// function fun(str){
//     let ans = '';
//         for(let i = 0;i < str.length; i++){
//             let curr = str[i];
//             if(ans.indexOf(curr) == -1){
//             ans+=curr;
//         }
//     }
//     console.log(ans);
// }

// fun("abcdabcdefgggh");

// ----------- this

// const student = {
//     name : "nani",
//     maths : 54,
//     physics : 89,
//     chemistry: 34,

//     getAvg(){
//         let avg = (this.maths + this.physics + this.chemistry)/3;
//         console.log(avg);
//     }
// }
// console.log(student.getAvg());

// ------ Arrow functions

// const sum = (a,b) => { 
//     // here the sum stored in the variable
//     // console.log(a+b);
//     a+b;
// }
// console.log(sum(1,2));

// const sum = (a, b) => a + b;
// console.log(sum(1, 2)); // Output: 3


// ---- Timeout
// console.log("Hello")

// setTimeout(()=>{
//     console.log("jrbghrbsgh rbfhsw");
// },5000);

// console.log("puneeth");

// -- Time interval

// let id = setInterval(()=>{
//     console.log("nani");
// },2000);
// clearInterval(id);

// avg of numbers arrow functions

// sum = (num1,num2,num3) =>{
//     console.log((num1+num2+num3)/3);
// }
// sum(1,2,3);

// return if its even or not

// isEven = (num) => {
//     if(num%2 == 0) 
//         console.log("even")
// }
// isEven(6);

// for Each

// let arr = [1,2,3,4,5];

// let print = (elements) => {
//     console.log(elements);
// }

// arr.forEach(print)

// let students = [
//     {
//         name: 'puneeth',
//         marks: 45
//     },
//     {
//         name : 'nani',
//         marks: 55
//     },
//     {
//         name : 'pinder',
//         marks: 65
//     }
// ];

// students.forEach(students => {
//     console.log(students.name);
// }) ;

// map

// let num = [1,2,3,4];

// let newArr = num.map(function(e1) {
//     return e1 * 2;
// })

// console.log(newArr);

// Every

// let arr = [2,4];
// console.log(arr.every((el) => (el % 2 == 0)));

// //---- Reduce
// let arr = [1,2,3,4]

// let final = arr.reduce((acc,ele) => (acc+ele));
// First step acc = 0 , ele = 1 returns (0+1 = 1) // By default acc is null or 0
         //   acc = 1 , ele = 2 return (1+2 = 3) like that it will go

// console.log(final)

// -- Find maximum in array using reduce

// let arr = [10,9,38,0,34,2]
// // here we can see evry time it is checking either acc or ele is big and return to next iteration
// let max = arr.reduce((acc,ele) => {
//     if(acc < ele){
//         return ele;
//     }else{
//         return acc;
//     }
// })

//check if all numbers in array are multiples of 10 or not

// let arr = [10,20,30,40,50,60,70,80,90];

// console.log( arr.every((ele) => (ele % 10 == 0) )  );

// create a function to find minimum number of array

// let arr = [10,9,38,1,34,2]

// let min = arr.reduce((acc,ele) =>{
//     if(acc < ele){
//         return acc;
//     }else{
//         return ele;
//     }
// })
// console.log(min)

// ===== Default parmameters

// function fun(a,b=2){
//     console.log(a+b);
// }
// fun(2);

// Spread

// let arr = [1,5,8,4,3,0]
// Math.min(...arr)
// console.log(...arr)

// let chars = [...'hello'];
// console.log(chars);


// =----- Destructuring

// let names = ['nani','pinder','puneeth','bains']
// let[winner,runner] = names;  
// let winner = names[3]
// console.log(winner,runner);

// ------ Square and sum the array elements using the arrow function and then find the average of the array

// let sum = 0;
// let arr = [1,2,3,4,5]

// let newArr = arr.map((ele) => {
//     return ele * ele;
// })

// for(let i = 0;i < arr.length; i++){
//     sum = sum + newArr[i];
// }

// console.log(sum)

// let sum = 0;
// let arr = [1,2,3,4,5]

// arr.forEach((ele) => {
//     sum = sum + (ele * ele);
// } )

// console.log(sum);

// Create a new array using the map function whose each element is equal to the original element plus 5.

// arr = [1,2,3,4,5];

// let newArr = arr.map((ele)=>{
//     return ele + 5;
// })

// console.log(newArr)

// . Create a new array whose elements are in uppercase of words present in the original array.

// let arr = ['nani','puneeth','pinder']

// let newArr = arr.map((ele)=>{
//     return ele.toUpperCase();
// })
// console.log(newArr)

// const object1 = [
//     {
//         name : 'puneeth',
//         marks: 87
//     },
//     {
//         name: 'nani',
//         marks: 99
//     }
// ];

// const object2 =  [
//     {
//         name : 'pinder',
//         marks: 87
//     },
//     {
//         name: 'varun',
//         marks: 99
//     }
// ];

// const object3 = [...object1,...object2]
// console.log(object3)

//Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.

// const doubleAndReturnArgs = (arr,...args) => [
//     ...arr,
//     ...args.map((ele)=>ele*2)
// ]

// console.log(doubleAndReturnArgs([1,2,3],4,4));


// let small = document.getElementByClassName("comic-covers");

// for(let i = 0;i < small.length; i++){
//     console.log(small[i]);
// }


// console.log(document.querySelector("#spd"));

// console.dir(document.querySelector("h1"));

// let links = document.querySelectorAll('a');
// let links = document.querySelectorAll('.only-p a');

// for(let i = 0;i < links.length; i++){
//     links[i].style.backgroundColor= 'yellow';
// }

// let btn = document.querySelector("button")
// console.dir(btn)

// btn.onclick = function(){
//     console.log("This is javascript button");
// }

// function sayHello(){
//     console.log('Hello');
// }

// for(btns of btn){
//     btns.onclick = sayHello;
// }

// btn.onmouseenter = function(){
//     console.log("mouse ebfe");
// }


// let btn = document.querySelector("button")

// // btn.onclick = sayHello;
// // btn.onclick = sayName;

// btn.addEventListener("click", sayHello);
// btn.addEventListener("click", sayName);

// function sayHello(){
//     console.log("Hello");
// }

// function sayName(){
//     console.log("nani");
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     let head = document.querySelector("h1"); 
//     let randomColor = getRandomColor();
//     head.innerText = randomColor;
//     let div = document.querySelector("div");
//     let newStr = "rgb"+randomColor;
//     div.style.backgroundColor =  newStr ;
// } )

// function getRandomColor(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);


//     let str = `(${red},${green},${blue})`;
//     return str;
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     console.log(this.innerText)
// })

// let btn = document.querySelector("button")
// btn.addEventListener('click', function(event){
//     console.log(event);
//     console.log('button clicked');
// })

// let input = document.querySelector("input");
// input.addEventListener('keyup', function(event){
//     console.log(event);
//     console.log(event.key);
//     console.log(event.code);
//     console.log('key was released');
// })

// let form = document.querySelector("form");
// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     alert('your form is submitted sucessfully');
// })

// let form = document.querySelector('form')

// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     let inp = document.querySelector('input');
//     // console.log(inp.innerText);//this wont work
//     console.dir(inp);
//     console.log(inp.value);
// })

// let form = document.querySelector('form')

// form.addEventListener('submit', function(event){
    
//     event.preventDefault();
    
//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");

//     console.log(user.value)
//     console.log(pass.value)

// })


// let user = document.querySelector("#user");
// let form = document.querySelector("form");
// form.addEventListener('submit',function(event){
//     event.preventDefault();
// })

// user.addEventListener('input', function(event){
//     console.log('input changed')
//     console.log("final value" + this.value);
// })


// function savetoDB(data,sucess,failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//          sucess();
//     }else{
//         failure();
//     }
// }

// console.log(savetoDB(
//     "nani",
//     ()=>{console.log("Data saved sucessfully");
//     savetoDB(
//         "nani",
//          ()=>console.log("Data saved sucess");
//          ()=>console.log("Data failed to save")
//         )}
//     ()=>console.log("Data failed to save")
// ))

//like above we need to do so many nested loops that's y we use promises


// function savetoDB(data){
//     return new Promise((resolve,reject) => {
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4 ){
//             resolve("sucess");
//         }else{
//             reject("failed");
//         }
//     });
// }
// for the above we will get exception if rejected to modify that

// function savetoDB(data){
//     return new Promise((resolve,reject) => {
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4 ){
//             resolve("sucess");
//         }else{
//             reject("faihbfhjfsed");
//         }
//     });
// }

// let request = savetoDB("nani");
// request.then((result)=>{ // resolve hits this
//     console.log("Data saved",result)
//     return savetoDB("hello world")
// })
// .then((result)=>{
//     console.log("data2 saved",result);
//     return savetoDB("hello 2");
// })
// .then((result)=>{
//     console.log("data3 saved",result);
// })
// .catch(()=>{ // rejects hits this
//     console.log("Data failed")
// })

// async function greet() {
//     return "hi";
// }

// function getNum(){
//     return new Promise((resolve,reject) =>{
//         setTimeout((result)=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve("succcesss");
//         },1000);
//     });
// }

// async function greet(){
//     await console.log(getNum());
//     // await getNum();
//     // await getNum();
//     // getNum();
// }
// greet();


// h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             console.log("color changed");
//             resolve();
//         },delay)
//     })
// }

// async function call(){
//     await changeColor("red", 1000)
//     await changeColor("blue", 1000)
//     await changeColor("green", 1000)
//     changeColor("yellow", 1000)
// }

// Handling Rejections

// h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{

//             let num = Math.floor(Math.random()*10)+1;
//             if(num > 3){
//                 reject("reject");
//             }

//             h1.style.color = color;
//             console.log("color changed");
//             resolve();
//         },delay)
//     })
// }

// async function call(){
//     await changeColor("red", 1000)
//     await changeColor("blue", 1000)
//     await changeColor("green", 1000)
//     await changeColor("yellow", 1000)

//     let a = 9;
//     console.log(a);
// }

// see here it is rejected for the sake of that after code was not executed


// h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{

//             let num = Math.floor(Math.random()*10)+1;
//             if(num > 3){
//                 reject("rejects");
//             }

//             h1.style.color = color;
//             console.log("color changed");
//             resolve();
//         },delay)
//     })
// }

// async function call(){

//     try{
//         await changeColor("red", 1000)
//         await changeColor("blue", 1000)
//         await changeColor("green", 1000)
//         await changeColor("yellow", 1000)
//     }catch(err){
//         console.log("error caught");
//         console.log(err);
//     }

//     let a = 9;
//     console.log(a);
// }

// let jsonRes = '{"fact": "hi","length":76}'
// console.log(JSON.parse(jsonRes)) // converts into JSobject

// let obj = { fact: 'hi', length: 76 }
// console.log(JSON.stringify(obj)) // converts into JSON

// let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data.fact);
//   })
//   .catch(error => {
//     console.error(error);
//   });


// let url = "https://catfact.ninja/fact";
// 
// async function getFacts() {
//     try{
//         let res = await fetch(url)
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url)
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     }catch(err){
//         console.log(err);
//     }
// }


// let btn = document.querySelector("button");
// let p = document.querySelector("p");

// btn.addEventListener('click', async() => {
//     let res = await getFacts();
//     console.log(res);
//     p.append(res);
// })

// let url = "https://catfact.ninja/fact";
// async function getFacts() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }catch(err){
//         console.log(err);
//         return err;
//     }
// }

// img.setAttribute("src",link);


// const url = "https://icanhazdadjoke.com/";

// async function jokes() {   
//     try{
//         const config = {headers: {Accept : "application/json" } };
//         let res = await axios.get(url,config);
//         console.log(res.data.joke);
//     }catch(err){
//         console.log(err);
//     }
// }


// let url = "http://universities.hipolabs.com/search?name="

// let country = "nepal";

// let btn = document.querySelector("button");

// btn.addEventListener('click', async ()=>{
//     let country = document.querySelector("input").value;
//     console.log(country);

//     let collagesArr = await getCollages(country)
//     // console.log(collagesArr);

//     show(collagesArr);

// })

// function show(collagesArr){
//     let list = document.querySelector("#list");

//     for(collage of collagesArr){
//         console.log(collage.name);
//         let li = document.createElement("li");
//         li.innerText = collage.name;
//         list.append(li);
//     }
// }

// async function getCollages(country){
//     try{
//         let res = await axios.get(url+country);
//         return res.data;
//     }catch(err){
//         console.log(err);
//     }
// }
