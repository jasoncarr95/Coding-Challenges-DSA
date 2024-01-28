/* eslint-disable no-extend-native */

/**
 * Returns the number of times the given character appears in the string,
 * or if more than one character is supplied an array of character counts.
 */
/**
 * input: string or an array (arr could be numbers)
 * output: if single char: number.. if mutiple output is an array of nums
 * if no args return undefined
 *
 * if no chars return undefined or 0???
 * case sensitive
 */

/**
 *
 * @param {string || array} charsToCount the characters to be counted
 * @returns {number || number[]}
 */

String.prototype.characterCount = function (charsToCount) {
  // check charsToCount.. if none, return undefined
  if (!charsToCount) return undefined;

  // store String function is being called in a variable as an array
  const str = [...this];

  // get array of num occurences from arguments
  const count = [...charsToCount].map(
    (charToCount) => str.filter((char) => char === charToCount).length,
  );

  // if single char, return single number, else return arr
  if (charsToCount.length === 1) {
    return count[0];
  }
  return count;
};

module.exports = String.prototype.characterCount;

console.log("Hello".characterCount(), undefined);
console.log("Hello".characterCount("l"), 2);
console.log("abababab".characterCount("ab"), [4, 4]);
console.log("abababab".characterCount(["a", "b"]), [4, 4]);
