/**
 * @param {number[][]} accounts
 * @return {number}
 */

/*PREP
    array of arrays
    - reduce each array
    - return total of the largest array
*/

const maximumWealth = function (accounts) {
  let accountTotals = accounts.map((e) => e.reduce((a, b) => a + b));

  return Math.max(...accountTotals);
};

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
); // 10
