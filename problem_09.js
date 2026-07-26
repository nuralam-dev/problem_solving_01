// let arr = [100, 120, 400, 530, 340];
// let largest = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   let currentElement = arr[i];
//   if (currentElement > largest) {
//     largest = currentElement;
//   }
// }
// console.log(largest);

function largestNumberCheck(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];

    if (currentElement > largest) {
      largest = currentElement;
    }
  }

  return largest;
}

console.log(largestNumberCheck([120, 222, 390, 590, 1059]));
