/**
 * @param {number[]} arr - array of unique numbers representing scores
 * @returns {number[]} - array of numbers sorted by score
 */

// MY ORIGINAL SOLUTION

// function rankings(arr) {
//     // create sorted array for ranking
//     const rankedArr = arr.slice().sort((a, b) => b - a); // [3, 2, 1]
//     // console.log(`rankedArr: ${rankedArr}`);

//     // map original array to sorted array
//     return arr.map((num) => rankedArr.indexOf(num) + 1);
// }
// rankings: 2.988s (100,000)

// OPTIMIZED SOLUTION
function rankings(arr) {
  // create sorted array for ranking
  const sortedArr = arr.slice().sort((a, b) => b - a);

  // create map of scores to rankings
  const rankingMap = new Map();
  for (let i = 0; i < sortedArr.length; i++) {
    rankingMap.set(sortedArr[i], i + 1);
  }

  // create array of rankings
  const rankingArr = [];
  for (let i = 0; i < arr.length; i++) {
    rankingArr.push(rankingMap.get(arr[i]));
  }
  return rankingArr;
}
// rankings: 30.146ms (0.03s) (100,000)

// console.log(rankings([1, 3, 2]), `=> [3, 1, 2]`);
// 3 is highest score so it gets first place, 2 is second highest, 1 is third highest

// console.log(rankings([10, 20, 40, 50, 30]), `=> [5, 4, 2, 1, 3]`);
// 50 is highest score so it gets first place, 40 is second highest,
// 30 is third highest, 20 is fourth highest, 10 is fifth highest

// console.log(rankings([10, 20, 40, 50, 30, 30]), `=> [5, 4, 2, 1, 3, 3]`);
// console.log(rankings([10, 20, 40, 50, 30, 30, 30]), `=> [5, 4, 2, 1, 3, 3, 3]`);
// console.log(rankings([10, 20, 40, 50, 30, 30, 30, 30]),`=> [5, 4, 2, 1, 3, 3, 3, 3]`);

//* create array of 500,000 random numbers
console.time(`create array`);
const arr = [];
for (let i = 0; i < 500_000; i += 1) {
  arr.push(Math.floor(Math.random() * 1_000_000));
}
console.timeEnd(`create array`);

console.time(`rankings`);
console.log(rankings(arr));
console.timeEnd(`rankings`);
