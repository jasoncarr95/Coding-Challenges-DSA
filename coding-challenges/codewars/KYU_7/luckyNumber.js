/*
lucky = sum of all digits is 0, or multiple of 9
return boolean
*/

// @ts-check
/**
 *
 * @param {number} n >=0
 * @returns {Boolean}
 */
function isLucky(n) {
  // get sum of all digits
  // num -> toString -> to arr -> reduce -> sum
  if (n === 0) return true;
  const sum = n
    .toString()
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
  // check value of sum
  return sum % 9 === 0;
}

console.log(isLucky(1892376), true);
console.log(isLucky(189237), false);
console.log(isLucky(1098), true);
console.log(isLucky(22869), true);
console.log(isLucky(0), true);
