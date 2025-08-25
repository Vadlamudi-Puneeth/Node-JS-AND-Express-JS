console.log("1.A")
const {calculateBMI} = require("./bmi_helper")

console.log("1.B")
const {division} = require("./maths_helper")

console.log("1.C")

const student = {
    name : "puneeth",
    city : "delhi",
    height: 2,
    weight: 100
};

console.log(division(6,3));

calculateBMI(student);

// 1.A
// 2.A
// 3.Aa
// 3.B
// 2.B
// 1.B
// 1.C

// if it calls require again it wont read all the things it will remember that is called caching