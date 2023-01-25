/**
 *
 * @param {array<number>} arr array of integers
 * @return {number}
 * returns the sum of
 * 1. product of all non-negative numbers
 * 2. sum of all negative numbers
 *
 */

// check if arr == null, return 0
// find 2 values
// create 2 arrays of filtered values (negative & non-negative nums)
// get product of non negs & sum of negs=> return those sums

function mathEngine(arr) {
  if (arr === null) return 0;

  let negatives = arr
    .filter((num) => num < 0)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  let nonNegatives = arr
    .filter((num) => num >= 0)
    .reduce((acc, curr) => {
      return acc * curr;
    }, 1);

  return negatives + nonNegatives;
}

console.log(mathEngine([1, 2, 3, -4, -5])); // -3 => 1*2*3=6 + -4+-5=-9 6 + -9 => -3
console.log(mathEngine([-1, -2, -3])); // 1  +  [-6]    => -5
console.log(mathEngine([1, 2, 3])); // [0] + [6]    => 6
console.log(mathEngine(null)); // =>  0
