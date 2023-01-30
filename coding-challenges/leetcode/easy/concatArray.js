/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  //   const ans = nums.slice().concat(nums);
  //   return ans;
  return [...nums, ...nums];
};

console.log(getConcatenation([1, 2, 1])); // [1,2,1,1,2,1]
console.log(getConcatenation([1, 3, 2, 1])); // [1,3,2,1,1,3,2,1]
