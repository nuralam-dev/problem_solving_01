// problem_02 : sum of a Rang of number (1 to N)

// let number = 7;
// let sum = 0;
// for (let i = 1; i <= number; i++) {
//   sum = sum + i;
// }

// let num = 20;
// let sum = 0;
// for (let i = 1; i <= num; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// function sumOfRange (number){
// for(let i = 1; i <=number; i ++){

// }
// return sumOfRange
// }
// console.log(sumOfRange(8));
// let sum = 0;
// function printNumber() {
//   for (let i = 1; i <= 10; i++) {
//     sum = sum = i;
//   }
//   console.log(sum);
// }
// printNumber();

// function sumRange(number) {
//   for (let i = 1; i <= number; i++) {
//     console.log(i);
//   }
//   return sumRange;
// }
// sumRange(10);

let sum = 0;
function numberRange(num) {
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(numberRange(7));

let b = 0;
function numRange(a) {
  for (let i = 1; i <= a; i++) {
    b = b + i;
  }
  return b;
}
console.log(numRange(20));
