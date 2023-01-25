//  Replace With Alphabet Position   KYU 6
//  Parmeters:
//  Return:
//  Example:
// console.log(alphabetPosition("abcd"))

//  PseudoCode:
//  a =>1 .... "a".charCodeAt()-96
function alphabetPosition(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let letters = text.toLowerCase().split("");
  let result = [];
  for (let i = 0; i < letters.length; i++) {
    if (alphabet.includes(letters[i])) {
      result.push(letters[i].charCodeAt() - 96);
    }
  }
  return result.join(" ");
}

//  Sum of Digits   KYU 7
//  Parmeters:  may ben given a number, string, or undefined
//  Return:     the sum of the digits of a non-negative number
// return a string "digit + digit = sum"
//  Example:
//  console.log(sum("3433"));   // "3 + 4 + 3 + 3 = 13"
//  console.log(sum());

//  PseudoCode:
//  check if digits is undefined.... if so, return empty string ""
// otherwise make sure its a number with Number()       check if negative??
//  convert to string.. split into an array of digits
//  sum = reduce
// for loop ... return sentance.. concat + and then = sum

function sum(digits) {
  if (Number(digits) === 0) return "0 = 0";
  else if (!Number(digits) > 0) {
    return "";
  }
  digitsArr = digits.toString().split("");
  const sum = digits
    .toString()
    .split("")
    .map((e) => Number(e))
    .reduce((a, b) => a + b);

  return `${digitsArr.join(" + ")} = ${sum}`;
}

//  Sum of Digits/Digital Root   KYU 6
//  Parmeters:  input will always be a non-negative integer
//  Return: return the sum of the digits of the input... continue reducing until only 1 digit
//  Example:
console.log(digital_root(16)); //  16 --> 1 + 6 = 7
console.log(digital_root(942)); //  15 --> 9 + 4 + 2 = 15 --> 1 + 5 = 6
//  PseudoCode:

function digital_root(n) {
  let digits = n
    .toString()
    .split("")
    .map((e) => Number(e));
  if (digits.length > 1) {
    console.log(`n:${n} digits: ${digits}`);
    return digital_root(digits.reduce((a, b) => a + b));
  }
  return digits[0];
}
