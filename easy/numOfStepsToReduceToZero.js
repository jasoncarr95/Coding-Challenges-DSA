/**
 * @param {number} num
 * @return {number}
 */

// given an int, return num of steps to reduce it to zero
// if num is even -->  divide by 2
// if num is odd --> subtract 1

var numberOfSteps = function (num) {
  let steps = 0;
  while (num > 0) {
    steps++;
    num % 2 === 0 ? (num = num / 2) : (num = num - 1);
  }
  return steps;
};

console.log(numberOfSteps(8)); // 4
console.log(numberOfSteps(14)); // 6
