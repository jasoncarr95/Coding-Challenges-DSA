/**
 *
 * @param {number} num whole number > 0
 * @return {string} num in expanded form
 */

// expand each digit "tens place"

// num => string
// iterate over each digit in num
// check if digit is a 0.. if 0 ignore
// if not expand the digit to equal digit+000
// add expanded digits to a string to be returned.. with + inbetween unless its the last digit

function expandedForm(num) {
  let result = "";
  num
    .toString()
    .split("")
    .forEach((digit, index, arr) => {
      let numZeros = arr.length - 1 - index;
      let expanded = digit + "0".repeat(numZeros);
      if (index == 0) result = expanded;
      else if (digit != 0) {
        result += ` + ${expanded}`;
      }
    });
  return result;
}

console.log(expandedForm(12), " Should return '10 + 2'");
console.log(expandedForm(42), " Should return '40 + 2'");
console.log(expandedForm(70304), " Should return '70000 + 300 + 4'");
