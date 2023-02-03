// inputs are alway >= 1 (gfc, always >=1)
// divisor => x % divs == 0

/*
  - Start with smaller of 2 numbers 
  - loop downwards to 1
  - check if is a divisor of both x && why (% === 0)
 */

/**
 * Find the greatest common divisor of two positive integers.
 * The integers can be large, so you need to find a clever solution.
 * @param {number} x
 * @param {number} y
 */

function mygcd(x, y) {
  const smaller = x < y ? x : y;

  for (let i = smaller; i >= 1; i--) {
    if (x % i === 0 && y % i === 0) return i;
  }
}

console.log(mygcd(30, 12), 6);
console.log(mygcd(8, 9), 1);
console.log(mygcd(1, 1), 1);

function gcd(a, b) {
  if (a === 0) return b;
  if (b === 0) return a;
  return gcd(b, a % b);
}
