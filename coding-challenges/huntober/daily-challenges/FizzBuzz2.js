/* 
Given a number as an input, print out every integer from 1 to that number.
However, when the integer is divisible by 2, print out “Fizz”;
when it’s divisible by 3, print out “Buzz”;
when it’s divisible by both 2 and 3, print out “Fizz Buzz”.
*/

// loop from 1 -> n
//check each num: check if divis by 2, 3, or both
// if both, print FB, 2 F, 3B, else log num

/**
 *
 * @param {number} n positive interger >= 1
 * console.log each num/str
 */
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 2 === 0) {
      console.log("Fizz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

console.log(
  fizzBuzz(10),
  `\n=> 1, "Fizz", "Buzz", "Fizz", 5, "Fizz Buzz", 7, "Fizz", "Buzz", "Fizz"`,
);
console.log(
  fizzBuzz(15),
  `\n=> 1, "Fizz", "Buzz", "Fizz", 5, "Fizz Buzz", 7, "Fizz", "Buzz", "Fizz", 11, "Fizz Buzz", 13, "Fizz", "Fizz Buzz"`,
);
