let str = "madam";
// let reversString = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   let letter = str[i];
//   reversString += letter;
// }

// console.log(reversString);

// if (str === reversString) {
//   console.log("palindrome");
// } else {
//   console.log("not palindrome");
// }

function ispalindrome(str) {
  let reversString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    let letter = str[i];
    reversString += letter;
  }

  console.log(reversString);

  if (str === reversString) {
    return true ;
  } else {
    return false ;
  }
}
console.log(ispalindrome(str));
