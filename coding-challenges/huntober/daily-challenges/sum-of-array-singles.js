// Thu. 10.20.22 KYU 7
/*  

input: arr numbers
    - always nums no funny biz

2 occur once, rest occur only twice

return: sum of nums that occur only once

*/

function repeats(arr) {
  // filter array to find nums that only occur once
  return arr
    .filter((item) => arr.indexOf(item) === arr.lastIndexOf(item))
    .reduce((a, b) => a + b, 0);
  // add filtered array, & return the sum
}

console.log(repeats([1, 2, 3, 4, 1, 2]), 7); // 7 -> 3 & 4 occured once
console.log(repeats([5, 10, 19, 13, 10, 13]), 24); //  24 -> 5 & 19 occured once
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22); // 5 & 17 --> 22
