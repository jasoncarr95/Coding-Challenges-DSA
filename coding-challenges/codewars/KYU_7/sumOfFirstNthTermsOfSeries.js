/**
 * round to 2 decimal places
 *
 * BASE CASE
 * if 0 -> 0.00
 *
 *  1 / (n-1) +3
 *
 *
 *  1 =>  1 / 1
 *  2 =>  1 / 4
 *  3 =>  1 / 7
 *  4 =>  1 / 10
 *
 * 3*(n - 1) + 1
 *
 */
/**
 *
 * @param {number} n always a natural number
 * @returns {string} sum of series up to nth number
 */
function SeriesSum(n) {
  if (n === 0) return "0.00";
  if (n === 1) return "1.00";

  const denominator = (x) => 3 * (x - 1) + 1;

  let result = 1;
  for (let i = n; i > 1; i = -i) {
    result += 1 / denominator(i);
  }
  return result.toFixed(2);
}

console.log(SeriesSum(0), "0.00");
console.log(SeriesSum(1), "1.00");
console.log(SeriesSum(2), "1.25");
console.log(SeriesSum(3), "1.39");
console.log(SeriesSum(4), "1.49");
console.log(SeriesSum(5), "1.49");
