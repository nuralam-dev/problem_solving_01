// let arr = [2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   sum += arr[i];
// }
// console.log(sum);
// let average = sum / arr.length;
// console.log(average);

function generateAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let average = sum / arr.length;
  return average;
}
console.log(generateAvg([5 , 10 , 15]))
