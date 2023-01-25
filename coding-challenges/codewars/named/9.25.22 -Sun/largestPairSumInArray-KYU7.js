// Largest pair sum in array    KYU 7

/*
return sum of largest 2 integers 
- get the 2 largest numbers, add them, and return 
*/

function largestPairSum(numbers) {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((a, b) => a + b, 0);
}

console.log(largestPairSum([10, 14, 2, 23, 19])); // 42 (23+19)
console.log(largestPairSum([99, 2, 2, 23, 19])); // 122  (99+23)
