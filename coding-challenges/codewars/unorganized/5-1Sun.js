//     //KYU 8   Basic Training: Add item to an Array
// // websites.push("codewars")

//     //KYU 8     Grasshopper - Array Mean
// // return nums.reduce((a,b) => a+b)/nums.length

//     //KYU 8     Printing Array elements with Comma delimiters
// function printArray(array){
//   return array.join(',')
// }

//     // KYU 8    Well of Ideas - Easy Version
// function well(x){
//     let goodIdeas = x.filter(e=> e === 'good')
//     return goodIdeas.length > 2 ? 'I smell a series!' : goodIdeas.length >= 1 ? 'Publish!' : 'Fail!' ;
// }

// KYU 8    Sort and Star
// function twoSort(s) {
//     return s.sort()[0].split('').join('***')
// }

// KYU 8    Find the first non-consecutive number
function firstNonConsecutive(arr) {
  return arr.find((e, i) => i > 0 && e[i] - 1 != e[i - 1]);
}

// element

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
