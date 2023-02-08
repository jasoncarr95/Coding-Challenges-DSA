/**
 *
 * @param {number} year
 * @returns {boolean}
 */
function isLeapYear(year) {
  if (year % 400 === 0) return true;

  return year % 100 !== 0 && year % 4 === 0;
}

console.log(isLeapYear(1234), false);
console.log(isLeapYear(1984), true);
console.log(isLeapYear(2000), true);
console.log(isLeapYear(2010), false);
console.log(isLeapYear(2013), false);
