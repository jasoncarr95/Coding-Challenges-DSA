//  REDUCE MY FRACTION  KYU 7

/*  - reduce a fraction to its simplest form
    - fractgins represented as an array
    - return reducewd fraction as an array
    input:   [numerator, denominator]
    output:  [newNumerator, newDenominator]
    
    all num and denom will be postive integers.... will num ever be > denom?
*/
console.log(reduce([45, 120])); //  [3,8]

/*  PSEUDO
        - numerator = fraction[0]
        - denom = fraction[1]
        - check if num is divisible denom using %
            - if no, return the array [num, denom]
            - if it is, divide by remainder of deom % num
*/
/* HOW TO TELL IF FRACTION IN SIMPLEST FORM
    1. check for unit fraction... num or dem ==1
    2. divide by GREATEST COMMEN FACTOR
     2a . is denom a multiple of num? 
    3. is denom a prime number? 
*/

function reduce(fraction) {
  let numerator = fraction[0];
  let denominator = fraction[1];
  if (numerator === 1 || denominator === 1) return simplestFraction;
  const gcd = (numerator, denominator) => (denominator ? gcd(b, numerator % denominator) : numerator);
  
  return [numerator/gcd,denominator/gcd]
}


// OTHER SHIT


function getFactors(num) {
  let factors = [];
  let s = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= s; i++) {
    if (num % i === 0) factors.push(i, num / i);
  }
  return factors.sort((a, b) => a - b);
}

console.log(getFactors(14));

const gcd = (a, b) => (b ? gcd(b, a % b) : a);
return b === 0 ? a : gcd(b, a % b);

function gcdEx(a, b) {
  if (b === 0) console.log(a);
  else {
    console.log(`a:${a}..b:${b}`);

    gcdEx(b, a % b);
  }
}
gcdEx(80, 120);
