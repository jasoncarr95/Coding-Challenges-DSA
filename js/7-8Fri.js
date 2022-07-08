//  VAPORCODE KYU 7
//  convert all letters to uppercase, add 2 spaces between each letter(or special char)(not space tho)
//console.log(vaporcode("Why isn't my code working?"));   //  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K I  N  G  ?"

function vaporcode(string) {
  //  convert to uppercase
  string = string.toUpperCase();
  //  first split by spaces then join to get rid of spaces
  string = string.split(" ").join("");
  //then split by char and join by 2space to return
  return string.split("").join("  ");
}

//  Odd-Even String Sort    KYU 7

//  return another string, such that even indexed and odd indexed chars of the string are grouped.. groups are space-separated.. 0=even
//  console.log(sortMyString("CodeWars"));  //  "CdWr oeas"

function sortMyString(S) {
  //  set a new variable to contain odds and evens
  let odds = [];
  let evens = [];
  // split string into an array
  S = S.split("");
  //  loop thru og arr, if index is even add to even, etc.
  S.forEach((e, i) => {
    i % 2 === 0 ? evens.push(e) : odds.push(e);
  });
  // return both arrs joined and space sep

  return `${evens.join("")} ${odds.join("")}`;
}

//Compare within margin KYU 8
//  return if a is lower than, close to (within margin), or higher than b
//  if close to, return 0   a<b return -1      a>b return 1 .. if margin not given =0
// console.log(closeCompare(2, 5, 3)); //  0
// console.log(closeCompare(4, 5)); //  -1
// console.log(closeCompare(8.1, 5)); //  1

function closeCompare(a, b, margin = 0) {
  // default margin is 0
  // get difference to compare to margin
  let difference = Math.abs(a - b);
  return margin >= difference ? 0 : a > b ? 1 : -1;
}

//  COUPON CODE     KYU 7
console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")); //true
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")); //false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  //  check that coupon code is valid
  if (enteredCode !== correctCode) return false;

  // check that date expire is after current date
  currentDate = new Date(currentDate);
  expirationDate = new Date(expirationDate);

  return currentDate.getTime() <= expirationDate.getTime();
}
