// function issaPalindome(str){
//     // make str all lowercase to ignore case sensitivity
//     str = str.toLowerCase()
//     // reverse worde/sentence
//     let backwards = str.split('').reverse().join('')
//     // check if backwards is the same as the OG
//     return backwards === str ? `${str} ...issa palindrome!` : `das not a palidrome stoopid`
// }

//  LOOKING FOR A BENEFACTOR    KYU 7

//  given an array of donations and nAVG
//  return how much next donation has to be for n+1 (array+next donation) to = new average
//  if resuult is <= 0 return ""

// function newAvg(arr, newavg) {
//     const currTotal = arr.reduce((a,b) => a+b)
//     const newTotal = (arr.length + 1) * newavg
//     const target = Math.ceil(newTotal - currTotal)

//     return target > 0 ? target : ""
// }

// console.log(newAvg([14,30,5,7,9,11,16],90));    //  628

//  GET THE NTH EVEN NUMBER     KYU 8
function nthEven(n) {
  return n * 2 - 2;
}
