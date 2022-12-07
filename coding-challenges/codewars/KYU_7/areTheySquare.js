/**
 *
 * @param {Array} arr positive integers, may be empty
 *
 */

// if arr is empty return undefined
// return Boolean
// true if all numbers in arr are square numbers || false

// check array is empty => length <1 => return undefined
// array.every
// Math.sqrt is an integer
//

var isSquare = function (arr) {
    if (arr.length < 1) return undefined;
    return arr.every((num) => Number.isInteger(Math.sqrt(num)));
};

console.log(isSquare([1, 4, 9, 16, 25])); // true
console.log(isSquare([69, 4, 16])); // false
console.log(isSquare([])); // undefined
