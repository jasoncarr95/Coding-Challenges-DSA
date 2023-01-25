// The Fibonacci numbers, commonly denoted F(n) form a sequence,
// called the Fibonacci sequence, such that
// each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

/*
0 => 0
1 => 1
2 => 0 +1 = 2
3 => 2 + 1 = 3 
4 => 3 + 2 = 5
5 => 5 + 3 = 8
6 = 8 + 5 = 13

 */

/**
 * returns the nth number in fibonacci sequence
 * @param {number} n number in the fib seq
 * @returns {number}
 */
function fibonacci(n) {
  // x == x-1 + x-2
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    // console.log(fib[i]);
  }
  return fib[fib.length - 1];
}

console.log(fibonacci(2), "=> 1"); //Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
console.log(fibonacci(3), "=> 2"); //Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
console.log(fibonacci(4), "=> 3"); //Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
