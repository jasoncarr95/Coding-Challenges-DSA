// Stanton Measure KYU 7

/*
  function:- stantonMeasure
  input:- integer array
  output:- stanton measure of the array

  - count num of occurences for value 1 in arr.. this = n
  - return number of times that n appears in arr

*/

console.log(stantonMeasure([1,4,3,2,1,2,3,2]))  // 3

function stantonMeasure (intArr) {
    let n = intArr.filter(num => num === 1).length
    let stanton = intArr.filter(num => num === n).length
    return stanton
}