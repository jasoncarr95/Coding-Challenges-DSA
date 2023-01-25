/**
 * @param {string} jewels types of stones that are jewels
 * @param {string} stones stones that you have.. each char is a type of stone
 * @return {number} how many stones you have that are jewels
 */

function findJewels(jewels, stones) {
  // iterate through our stones.. if it is a jewel, increment
  let count = 0;
  for (const char of stones) {
    if (jewels.includes(char)) count++;
  }
  return count;
}

//// LEONS
function findJewels(jewels, stones) {
  const map = {};
  let count = 0;

  for (const jewel of jewels) {
    map[jewel] = true;
  }
  for (const stone of stones) {
    if (map[stone]) {
      count++;
    }
  }
  return count;
}

// console.log(findJewels("aA", "aAAbbbb"), "3");
// console.log(findJewels("z", "ZZ"), "");
