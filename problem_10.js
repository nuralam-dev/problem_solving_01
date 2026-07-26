function largestNumberCheck(arr) {
  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];

    if (currentElement < smallest) {
      smallest = currentElement;
    }
  }

  return smallest;
}

console.log(largestNumberCheck([120, 222, 390, 590, 1059]));