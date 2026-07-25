// problem 01 : check if a number is even or odd

// let number = 201;

// if(number % 2===0){
//     console.log("Even number");
// }else{
//     console.log("Odd number");
// }

function checkEvenOrOddNumber(number){
    if(number%2===0){
        return "Even number"
    }else{
        return "Odd number"
    }
}

console.log(checkEvenOrOddNumber(20));
console.log(checkEvenOrOddNumber(22));
console.log(checkEvenOrOddNumber(35));