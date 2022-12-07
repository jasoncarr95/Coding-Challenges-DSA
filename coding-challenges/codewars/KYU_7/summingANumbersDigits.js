/**
 * returns sum of absolute value of each of the numbers decimal digits
 * @param {number} number
 * @return {number}
 *
 * input is always a num 0 if 0
 */

// iterate over each digit in the num
// split into an array of digits
// reduce method to sum the absolute value

function sumDigits(number) {
    let digits = Math.abs(number).toString().split("");

    return digits.reduce((acc, curr) => {
        return Number(acc) + Number(curr);
    }, 0);
}

console.log(sumDigits(10), "1 + 0 => 1");
console.log(sumDigits(99), "9 + 9 => 18");
console.log(sumDigits(-32), "3 + 2 => 5");
