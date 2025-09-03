//**************** Use switch statement to print the day of the week using a number variable 'day' with values 1 to 7

let key = prompt("Enter the number ")
switch(key){
    case 1: 
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("sunday")
        break;
    default:
        console.log("Invalid")
}
