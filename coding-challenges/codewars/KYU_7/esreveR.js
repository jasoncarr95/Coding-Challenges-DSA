/**
 * @param {array} array
 * @returns {array}
 */

function reverse(array) {
    const reversed = [];
    array.forEach((item) => reversed.unshift(item));
    return reversed;
}

console.log(reverse([1, 2, 3])); // [3,2,1]
console.log(reverse([1, null, 14, "two"])); // ["two", 14, null, 1]
