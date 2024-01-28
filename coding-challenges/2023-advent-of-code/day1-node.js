const readline = require("readline");
const fs = require("fs");

const puzzle1 = "./puzzles/day1-input.txt";

const rl = readline.createInterface({
  input: fs.createReadStream(puzzle1),
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  console.log(line); // Process each line
});
