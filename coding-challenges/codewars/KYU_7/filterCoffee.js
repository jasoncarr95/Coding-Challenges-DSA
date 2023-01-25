/**
 * @param {number} budget
 * @param {array} prices coffee bean prices
 *
 * @return {string} string of prices of coffee beans you can afford. acending order
 */
// filter array => prices <= budget
// sort ascending order
// return as csv string
// return string of prices

function search(budget, prices) {
  return prices
    .filter((price) => price <= budget)
    .sort((a, b) => a - b)
    .join();
}

console.log(search(3, [6, 1, 2, 9, 2]), "1, 2, 2");
console.log(search(1, [2, 5, 10, 3, 6]), "");
console.log(search(6, [5, 10, 3, 4, 8, 4, 2]), "2,3,4,4,5");
