// input=string
// return boolean.. true= single integer/float

function isDigit(s) {
  return parseFloat(s) === Number(s);
}

console.log(isDigit("3")); // true
console.log(isDigit("  3  ")); // true
console.log(isDigit("-3.23")); // true

console.log(isDigit("3-4")); // false
console.log(isDigit("  3   5")); // false
console.log(isDigit("3 5")); // false
console.log(isDigit("zero")); // false
console.log(isDigit("s2324")); // false
