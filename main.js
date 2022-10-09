//  Concat. of array   - EASY
//  Parmeters:  given array nums (length n)
//  Return:     return a new array ans (length 2n) that is nums repeated
//  Example:
        //console.log(getConcatenation([1,2,1]))  // [1,2,1,1,2,1]
        
//  PseudoCode:
        // copy nums array into variable ans
        // concatenate a 2nd copy of nums
function getConcatenation (nums) {
    const ans = nums.slice().concat(nums)
    return ans
};


//  TWO SUM  - EASY
//  Parmeters:  nums= array of integers ; target = integer
//  Return:     return the indices of the 2 nubers such that they add up to the target
//  Example:
    console.log(twoSum([2,7,11,15], 9)) // [0,1]    because 2 + 7
    
//  PseudoCode:
        // find a number (X) where nums.includes(target-X)
        // store that number as Y
        // return indices of [X,Y]

// function twoSum (nums, target){
//     const x = nums.find(e => nums.includes(target-e))
//     const y = target-x
//     return [nums.indexOf(x),nums.indexOf(y)]
// }