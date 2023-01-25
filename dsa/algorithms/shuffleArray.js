/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */

/* Randomize array in-place using Durstenfeld shuffle algorithm */
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffleArray(myArray)); // [[8,3,5],[2,4,9],[6,7,1]]
