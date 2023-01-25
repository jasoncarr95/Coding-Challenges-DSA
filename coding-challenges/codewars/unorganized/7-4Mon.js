//  Swap Values  KYU 8

function swapValues(arr) {
  let tempArr = arr.slice();
  arr[0] = tempArr[1];
  arr[1] = tempArr[0];
}

//  Wealth Equality, finally!   KYU 7

function redistributeWealth(wealth) {
  let avg = wealth.reduce((a, b) => a + b) / wealth.length;
  for (let i = 0; i < wealth.length; i++) {
    wealth[i] = avg;
  }
}
//  console.log(redistributeWealth([5,10,6]))   //  [7,7,7]

//  Sort the odd    KYU 6
/*  - given an array of numbers
        - sort the odd numbers in ascending order, while leaving the even numbers in their original position
    
    */
console.log(sortArray([7, 1])); //  [1,7]
console.log(sortArray([5, 8, 6, 3, 4])); //  [3,8,6,5,4]

/* pseudo
    1. sort odd 
        - create a new array of just the odd (filtered)
        - sort odd array
    2. have even be in place
        - remove all odd from OG array .. set as null
        - then fill with odd
   */
