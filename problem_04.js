// problem 04 : Fizz Buzz (1 to n)
/*
loop through number 1 to n , if a number is divisible by 3 , print 'fizz' ; if divisible by 5 print 'Buzz'; if divisible both print 'FizzBuzz' ; otherwise print number
*/

// let number = 25;
// for (let i = 1; i <= number; i++) {
//   if (i % 3 === 0 && i%5===0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fuzz");
//   } else if(i%5===0) {
//     console.log("Buzz");
//   }else{
//     console.log(i)
//   }
// }

// function fizzBuzz(number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       return "FizzBuzz";
//     } else if (i % 3 === 0) {
//       return "Fizz";
//     } else if (i % 5 === 0) {
//       return "Buzz";
//     } else {
//       return i;
//     }
//   }
// }
// console.log(fizzBuzz(30));

function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
        console.log(i)
    }
  }
}
fizzBuzz(30);
