/**
 *
 * @param {number} n
 * @param {object} memo
 *
 */
function fibonacci(n, memo = {}) {
  if (n < 0 || typeof n !== "number" || n % 1 !== 0)
    return "Input must be a positive integer";
  if (n < 2) return n;
  if (n in memo) return memo[n];
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}
