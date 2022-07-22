// LEET CODE

var fizzBuzz = function (n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    i % 5 === 0 && i % 3 === 0
      ? result.push("FizzBuzz")
      : i % 3 === 0
      ? result.push("Fizz")
      : i % 5 === 0
      ? result.push("Buzz")
      : result.push(String(i));
  }
  return result;
};

console.log(fizzBuzz(3));
