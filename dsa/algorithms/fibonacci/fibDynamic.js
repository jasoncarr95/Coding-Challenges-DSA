// Fibonacci sequence Table For Reference:
// fib(0) = 0
// fib(1) = 1
// fib(2) = 1
// fib(3) = 2
// fib(4) = 3
// fib(5) = 5
// fib(6) = 8
// fib(7) = 13
// fib(8) = 21
// fib(9) = 34
// fib(10) = 55
// fib(15) = 610
// fib(20) = 6765
// fib(25) = 75025

// Naive recursive solution
// function fib(n) {
//   let result;
//   if (n == 1 || n == 2) {
//     result = 1;
//   } else {
//     result = fib(n - 1) + fib(n - 2);
//   }
//   return result;
// }

// console.log("Naive recursive solution");
function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(1)); // 1
// console.log(fib(5)); // 5
// console.log(fib(10)); // 55
// console.log(fib(15)); // 610

// console.log("Memoized recursive solution");
// Memoized recursive solution
const memo = {}; // cache
function fibCache(n) {
  if (n in memo) return memo[n];
  if (n < 2) return n;
  memo[n] = fibCache(n - 1) + fibCache(n - 2);
  return memo[n];
}
// console.log(fibCache(1)); // 1
// console.log(fibCache(5)); // 5
// console.log(fibCache(10)); // 55
// console.log(fibCache(15)); // 610

// console.log("Memoized recursive solution with private cache");
// Memoized recursive solution with private cache
function fibPrivateCache(n, memo = {}) {
  if (n < 2) return n;
  if (n in memo) return memo[n];
  memo[n] = fibPrivateCache(n - 1, memo) + fibPrivateCache(n - 2, memo);
  return memo[n];
}
// console.log(fibPrivateCache(1)); // 1
// console.log(fibPrivateCache(5)); // 5
// console.log(fibPrivateCache(10)); // 55
// console.log(fibPrivateCache(15)); // 610

// Bottom-up iterative solution

// console.log("Bottom-up iterative solution");
function fibBottomUp(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1]; // fibNums[0] = 0, fibNums[1] = 1, fibNums[2] = 1

  for (let i = 3; i <= n; i++) {
    fibNums.push(fibNums[i - 1] + fibNums[i - 2]);
  }
  return fibNums[n];
}

// console.log(fibBottomUp(1)); // 1
// console.log(fibBottomUp(5)); // 5
// console.log(fibBottomUp(10)); // 55
// console.log(fibBottomUp(15)); // 610

// Bottom-up iterative solution with less memory.. only need to store the last two numbers
// Confuses the heck out of me, but it works
// console.log("fibBottom solution");
function fibBottom(n) {
  if (n < 2) return n;
  let secondLast = 0;
  let last = 1;
  let result;
  for (let i = 2; i <= n; i++) {
    result = secondLast + last;
    secondLast = last;
    last = result;
  }
  return result;
}
// console.log(fibBottom(1)); // 1
// console.log(fibBottom(5)); // 5
// console.log(fibBottom(10)); // 55
// console.log(fibBottom(15)); // 610

export { fib, fibCache, fibPrivateCache, fibBottomUp, fibBottom };
