//  Tidy Number (Special Numbers Series #9) KYU 7
// no digits can be in decreasing order
/*
        input: number.. always positive
        output: Boolean
    */
/*  PSEUDO
        - split the number into an array of digits
        - iterate over arr of dig... 
            - if any element > next element return false
            - else return true
    */

console.log(tidyNumber(12)); // true
console.log(tidyNumber(32)); // false
console.log(tidyNumber(1024)); // false 1,0,2,4 --> 0<=1

function tidyNumber(n) {
  let digits = n
    .toString()
    .split("")
    .map((e) => Number(e));

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] > digits[i + 1]) return false;
  }
  return true;
}
