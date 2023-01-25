/**
 * Fibonacci: f(n) = f(n-1) + f(n-2)
 * f(1) = 1
 * f(2) = 1
 */

/**
 * Returns the nth number in fibonacci sequence
 * @param {number} n the nth number in fibonacci sequence
 * @returns {number} returns f(n)
 */
const fibonacci = (n) => {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(4), 3);
console.log(fibonacci(1), 1);
console.log(fibonacci(5), 5);
console.log(fibonacci(6), 8);
console.log(fibonacci(10));
