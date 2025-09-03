console.log("2.A")
const {division, power} = require("./maths_helper")
console.log("2.B")

const calculateBMI = (obj) =>{
    const {height,weight} = obj;

    const heightSq = power(height,2)
    const bmi = division(weight,heightSq);

    setTimeout(()=>{console.log(bmi)},1000);

}

module.exports = {
    calculateBMI
}
