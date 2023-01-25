// Task: Create the function factorial that receives n and returns n!

/**
 *
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  // use recursion, 0! => 1
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5), 120);
console.log(factorial(1), 1);
console.log(factorial(3), 6); // 3 * 2 * 1
