/*
input:  number
output: print every integer from 1 to that number
  BUt: num divis by 3 print fizz; if divis 5 buzz
  if divis both Fizz Buzz

  -console.log each num/str
  -always a num
  - return something else if not > 1 ?? 
    - can always be > 1
    - 
  divis: whole integer, no remainder
  (5 /2 !divis 2.5)
  6/2 is divis -> 3
  
*/

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        // if (i % 3 === 0 && i % 5 === 0) {
        //     console.log("Fizz Buzz");
        // } else if (i % 3 === 0) {
        //     console.log("Fizz");
        // } else if (i % 5 === 0) {
        //     console.log("Buzz");
        // } else {
        //     console.log(i);
        // }
        i % 3 === 0 && i % 5 === 0
            ? console.log("Fizz Buzz")
            : i % 3 === 0
            ? console.log("Fizz")
            : i % 5 === 0
            ? console.log("Buzz")
            : console.log(i);
    }
}

fizzBuzz(1); // 1
fizzBuzz(3); //  1, 2, "Fizz")
fizzBuzz(5); //  1, 2, "Fizz", 4, "Buzz")
fizzBuzz(15); //, 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, 12, 13, 14, "Fizz Buzz")
