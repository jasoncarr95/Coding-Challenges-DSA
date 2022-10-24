/*Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

- 
*/
/**
 * @param {array<number>} arr
 * @param {number} n
 * @return {array} length == n last n even numbers in same same order as og array
 */

// function nLastEvenNumbers(arr, n) {
//     // return n last even nums

//     // filter arr to only include even nums
//     console.log(arr.filter((num) => num % 2 === 0).slice(-n));

//     // slice to return n lenght
// }

function nLastEvenNumbers(arr, n) {
    let result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) result.unshift(arr[i]);
        if (result.length == n) return result;
    }
}

console.log(nLastEvenNumbers([1, 2, 3, 4, 5], 2)); // [2,4]

console.log(nLastEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [4, 6, 8]
console.log(nLastEvenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)); // [-8, 26]
console.log(nLastEvenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)); // [6]
