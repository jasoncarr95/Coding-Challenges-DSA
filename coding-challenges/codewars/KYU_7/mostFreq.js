/**
 *
 * @param {number[]} collection array of integers
 * @returns {number} count of most freq. item (return 0 if empty)
 */

// hashmap tracks items: freq
// return highest freq. (value)

function mostFrequentItemCount(collection) {
  if (collection.length === 0) return 0;
  const map = {};

  collection.forEach((num) => {
    map[num] = map[num] + 1 || 1;
  });

  return Math.max(...Object.values(map));
}

// function mostFrequentItemCount(collection) {
//   const map = new Map();

//   collection.forEach((num) => {
//     map.set(num, map.get(num) + 1 || 1);
//   });

//   return Math.max(...map.values());
// }

console.log(mostFrequentItemCount([3, -1, -1]), 2);
console.log(
  mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]),
  5
);
