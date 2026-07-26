// problem 03 : factorial of a number
let multi = 1;
function factorial(number) {
  for (let i = 1; i <= number; i++) {
    multi = multi * i;
  }
  return multi;
}
console.log(factorial(5));
