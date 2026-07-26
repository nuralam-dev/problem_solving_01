// let arr = [40, 34, 54, 35, 67, 89];
// let value = 30;
// let filterValue = [];

// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] > value) {
//     filterValue.push(arr[i]);
//   }
// }
// console.log(filterValue);

function getFilterArr(arr, value) {
  let filterValue = [];

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > value) {
      filterValue.push(arr[i]);
    }
  }
  return filterValue;
}
console.log(getFilterArr([40, 34, 54, 35, 67, 89], 40 ))