/**
 *
 * @source https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript
 */

// function to calculate factorial for a given input.
// If input is below 0 or above 12 throw an exception of type throw a RangeError (JavaScript)

function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError("The argument must be between 0 and 12.");
  }
  // Calculate the factorial here
  let sum = 1;
  while (n > 0) {
    sum = sum * n;
    n--;
  }
  return sum;
}

console.log(factorial(0), 1, "factorial for 0 is 1");
console.log(factorial(1), 1, "factorial for 1 is 1");
console.log(factorial(2), 2, "factorial for 2 is 2");
console.log(factorial(3), 6, "factorial for 3 is 6");
// console.log(factorial(13)); RangeError
// console.log(factorial(-1)); RangeError
