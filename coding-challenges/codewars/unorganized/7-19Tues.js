//  WILSON PRIMES   KYU 8
// input is a prime number
// return boolean
// ((P-1)!/(P*P)) is a whole number?

function amIWilson(p) {
  return p === 5 || p === 13 || p === 563;
}

//  VOLUME OF A CUBOID  KYU 8
class Kata {
  static getVolumeOfCuboid(l, w, h) {
    return l * w * h;
  }
}

//  EXPRESSIONS MATTER  KYU 8
//    return largest number obtained after inserting +,*,()
//   try every combo of a,b,c with that shit and then return the maximum obtained

// console.log(expressionMatter(2, 1, 2)); // 6
// console.log(expressionMatter(1, 2, 3)); //  9   --> (1+2) * 3
// console.log(expressionMatter(2, 10, 3)); //  60  --> (2*3) * 10
// console.log(expressionMatter(10, 5, 6)); //  300

function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));
}
