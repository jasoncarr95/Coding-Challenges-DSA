/**
 * Return the number which is most frequent in the given input array.
 * If there is a tie for most frequent, return the largest number among them.
 * @param {number[]} arr
 * @returns {number}
 */

function highestRank(arr) {
    // keep track of frequency of each number
    const hashMap = new Map();

    for (let i = 0; i < arr.length; i += 1) {
        // if key exists, increment, else set to 1
        hashMap.set(arr[i], hashMap.get(arr[i]) + 1 || 1);
    }

    // find the highest frequency
    let highestFreq = 0;
    let highestRankingNum = 0;

    hashMap.forEach((value, key) => {
        if (value > highestFreq) {
            highestFreq = value;
            highestRankingNum = key;
        }
        if (value === highestFreq && key > highestRankingNum) {
            highestFreq = value;
            highestRankingNum = key;
        }
    });
    return highestRankingNum;
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]), `=> 12`);
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]), `=> 12`);
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10, 10]), `=> 10`);
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10, 10, 10]), `=> 10`);
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]), `=> 3`);
