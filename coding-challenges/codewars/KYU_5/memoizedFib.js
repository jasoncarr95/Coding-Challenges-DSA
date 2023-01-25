export { fibonacci, fibPrivateCache };

const cache = {};
function fibonacci(n) {
  // Base Cases
  if (n < 2) return n;
  // Check Cache
  if (n in cache) return cache[n];
  // Add to cache
  cache[n] = fibonacci(n - 1) + fibonacci(n - 2);

  return cache[n];
}

console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55
console.log(fibonacci(15)); // 610

function fibPrivateCache(n, memo = {}) {
  // Base Cases
  if (n < 2) return n;
  // Check Cache
  if (n in memo) return memo[n];
  // Add to cache
  memo[n] = fibPrivateCache(n - 1, memo) + fibPrivateCache(n - 2, memo);
  // console.log(memo);
  return memo[n];
}

console.log(fibPrivateCache(5)); // 5
console.log(fibPrivateCache(10)); // 55
console.log(fibPrivateCache(15)); // 610
