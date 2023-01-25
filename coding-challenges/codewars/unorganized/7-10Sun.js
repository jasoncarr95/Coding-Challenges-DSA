//  HERON'S FORMULA     KYU 7
//calculate area of triangle with sides a,b,c
//return to 2 digits

function heron(a, b, c) {
  const s = (a + b + c) / 2;
  let result = s * (s - a) * (s - b) * (s - c);
  return Math.sqrt(result).toPrecision(2);
}
//console.log(heron(3,4,5));  //  6

//  CHAR CODE CALCULATION   KYU 7
// given string, turn each char into its charcode.. then join together to create a number -total1
//  replace all 7's with a 1.. total2
//  return difference between sum of the digits in total 1 and total 2

function calc(x) {
  // get charcodes
  let charCodes = x.split("").map((e) => e.charCodeAt());
  // get totals
  let total1 = charCodes.join("");
  let total2 = total1.replace(/7/g, 1);
  // return diff of sum of digits
  return (
    total1
      .split("")
      .map((e) => Number(e))
      .reduce((a, b) => a + b) -
    total2
      .split("")
      .map((e) => Number(e))
      .reduce((a, b) => a + b)
  );
}

//console.log(calc('ABC'));   //  6   //  total1=656667  total2=656661

//  Sum of numbers from 0 to N  KYU 7

var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count < 0) return `${count}<0`;
    else if (count === 0) return "0=0";
    let sum = 0;
    let str = "";
    for (let i = 0; i < count; i++) {
      sum += i;
      str += i + "+";
    }
    return `${str}${count} = ${sum + count}`;
  };

  SequenceSum;
})();

//  HELLO, NAME OR WORLD!     KYU 8
function hello(name) {
  if (!name) name = "World";
  let result = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
  return `Hello, ${result}!`;
}
