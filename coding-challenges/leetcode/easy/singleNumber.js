/**
 * @param {number[]} nums
 * @return {number}
 */

//every element appears twice, except for one... find that single one

// constraints: linear runtime & constant extra space

/**
    MY SOLUTION
 * 
 * runtime: beats 26.34%
 * memory: beats 30.91%
 */

var singleNumber = function (nums) {
  const numMap = {};
  nums.forEach((num) => {
    // return num in numMap ? numMap[num]++ : (numMap[num] = 1);

    if (numMap[num] == null) numMap[num] = 0;
    numMap[num]++;
  });
  for (const num in numMap) {
    if (numMap[num] !== 2) return num;
  }
};

console.log(singleNumber([2, 2, 1]), "=> 1");
console.log(singleNumber([4, 1, 2, 1, 2]), "=> 4");
console.log(singleNumber([1]), "=> 1");

// time O(n)
// space O(n)

// function singleNumber(nums) {
//     const map = {};
//     for (let n of nums) {
//         if (map[n] == null) map[n] = 0;
//         map[n]++;
//     }

//     for (let n in map) {
//         if (map[n] === 1) return Number(n);
//     }
// }
