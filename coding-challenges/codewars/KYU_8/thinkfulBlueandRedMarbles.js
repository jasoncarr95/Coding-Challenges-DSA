/**
 *
 * @param {number} blueStart # of blue marbles in bag to start
 * @param {number} redStart # of red marbles in bag to start
 * @param {number} bluePulled
 * @param {number} redPulled
 * @return float //  prob of drawing blue marble as a float
 */

const { blue } = require("color-name");

// get num of remaining blue & remaining red
// return blue / total

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  let remainingBlue = blueStart - bluePulled;
  let remainingRed = redStart - redPulled;

  return remainingBlue / (remainingBlue + remainingRed);
}

console.log(guessBlue(5, 5, 2, 3), "=> 0.6"); // 3 blue, 2 red
console.log(guessBlue(5, 7, 4, 3), "=> 0.2");
console.log(guessBlue(12, 18, 4, 6), "=> 0.4");
