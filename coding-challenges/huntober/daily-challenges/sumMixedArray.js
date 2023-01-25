// Tues 10.18.22

//Given an array of integers as strings and numbers,
// return the sum of the array values as if all were numbers.

//Return your answer as a number.

// function sumMix(arr) {
//     return arr.map((num) => Number(num)).reduce((prev, cur) => prev + cur, 0);
// }

function sumMix(arr) {
  return arr.reduce((prev, cur) => Number(prev) + Number(cur), 0);
}

// function sumMix(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += Number(arr[i]);
//     }
//     return result;
// }

module.exports = sumMix;

console.log(sumMix([9, 3, "7", "3"]), 22);
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 42);
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]), 41);
