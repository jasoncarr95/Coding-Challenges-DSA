//  DIVIDE AND CONQUER  KYU 7
// given a mixed array of number and string reps of integers, add string integers and subtract this from total of non string ints

// will array ever be empty?
function divCon(x) {
  // check for valid input
  if (x.length === 0) return 0;
  // separate strings and numbers
  const str = x.filter((e) => typeof e === "string");
  const num = x.filter((e) => typeof e === "number");
  // total strings and numbers
  const strTotal = str.map((e) => Number(e)).reduce((a, b) => a + b, 0);
  const numTotal = num.reduce((a, b) => a + b, 0);
  // subtract num - str and return
  return numTotal - strTotal;
}
// console.log(divCon([9,3,'7','3'])); // 2 -->12-10
// console.log(divCon([]));

//  LOOKING FOR A BENEFACTOR
//  given arr(list of first n donations) and navg(target average of n+1 --next donation)
//  find what next donation has to be in order to reach target average
//  if last donation is <=0 return ??? -1?

function newAvg(arr, newavg) {
  //  get targetTotal --> newavg * arr.length+1
  const targetTotal = newavg * (arr.length + 1);
  //  get current total --> reduce arr
  const currentTotal = arr.reduce((a, b) => a + b, 0);
  // next donation is targetTotal - currentTotal
  const nextDonation = Math.ceil(targetTotal - currentTotal);
  if (nextDonation > 0) return nextDonation;
  else throw "Expected New Average is too low";
}
// console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90)); // 628

//  SUM OF ODD CUBED NUMBERS    KYU 7
//  find sum of the odd numbers within an array, after cubing initial integers
//  return undefined if any of the values arent numbers

function cubeOdd(arr) {
  // make sure all values are numbers or return undefined
  if (arr.every((e) => typeof e === "number")) {
    // cube numbers
    let arrCubed = arr.map((e) => e ** 3);
    // filter odd numbers then return the sum
    return arrCubed.filter((e) => e % 2 != 0).reduce((a, b) => a + b);
  }
}
//  console.log(cubeOdd([1,2,3,4])) //  28

//  FIND THE ODD INT    KYU 6
// given an array of integers, return the one that appears an odd number of times
// input will always be valid
//  console.log(findOdd([0,1,0,1,0]))   //  0 (occurs 3x)

//  filter to have separate arrays for each different element
// return the array with an odd length
function findOdd(A) {
  for (const element of A) {
    if (A.filter((e) => e === element).length % 2 != 0) {
      return element;
    }
  }
}
