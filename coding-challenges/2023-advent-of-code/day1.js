/**
 * calibration document = lines of text
 * - each line = a calibration value
 * - combine first digit and last digit to form 2 digit number
 * 
 * @example
 * 1abc2 => 12
 * pqr3stu8vwx => 38
 * a1b2c3d4e5f => 15
 * treb7uchet => 77

Sum = 142
 */

/**
 * Input = Text file
 *
 * - process each line of text
 * - each line => (1st dig + last dig)
 *
 * sum all lines
 */

const fs = require("node:fs");

const filePath = "./puzzles/day1-input.txt";

/**
 * Removes non-numeric characters from a string and returns the resulting string.
 * @param {string} str - The input string.
 * @returns {string} - The string with only numeric characters.
 */
export function getOnlyNums(str) {
  return str
    .split("")
    .filter((char) => !isNaN(char))
    .join("");
}

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let lines = data.split("\n");

  // filter for only numbers
  lines = lines.map((line) => getOnlyNums(line));

  // Result Array
  let resultLine = [];

  // add first value and last value (if applicable) from each line to array

  lines.forEach((line) => {
    // get array of numbers for each line
    line = line.split("").map((char) => Number.parseInt(char));

    let firstDig = line.shift() ?? 0;
    // console.log(firstDig);
    let lastDig = line.pop() ?? 0;
    // console.log(lastDig);

    resultLine.push(firstDig);
    resultLine.push(lastDig);
  });
  resultLine = resultLine.reduce((a, b) => {
    return a + b;
  }, 0);
  console.log(resultLine);
});
