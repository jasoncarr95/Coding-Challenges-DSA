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

import fs from "fs";
import * as readline from "node:readline";

async function processFile(filePath: string): Promise<void> {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    console.log(`Line from file: ${line}`);
  }
}

const filePath = "./puzzles/day1-input.txt";
const result = processFile(filePath);

console.log(result);
