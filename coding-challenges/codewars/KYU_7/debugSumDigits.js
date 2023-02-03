function getSumOfDigits(integer) {
  var sum = null;
  var digits = Math.floor(integer).toString().split("");
  console.log(digits);
  for (var i = 0; i < digits.length; i += 1) {
    sum += +digits[i];
  }
  return sum;
}

console.log(getSumOfDigits(123)); // 6
console.log(getSumOfDigits(223)); // 7
console.log(getSumOfDigits(1337)); // 14
