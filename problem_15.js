let arr = [12, 13, 18, 19, 20, 22, 28, 26];
// let evenNumber = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     // console.log(arr[i]);
//     evenNumber.push(arr[i]);
//   }
// }
// console.log(evenNumber);
// let sum = 0;
// for (let key of evenNumber) {
//   sum += key;
// }
// console.log(sum);

// with function

function getEvenNumbers(arr) {
  let evenNumber = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumber.push(arr[i]);
    }
  }

  return evenNumber;
}
function getSum(arr) {
  let sum = 0;
  for (let key of arr) {
    sum += key;
  }
  return sum;
}
let evenNumbers = getEvenNumbers(arr);
let sum = getSum(evenNumbers);
console.log(sum);
