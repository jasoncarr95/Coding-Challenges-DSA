//  Factorial   KYU 7
// write a function that returns the factorial of the input ... 0--> 1
    // console.log(factorial(4)); // 24
    // console.log(factorial(7)); //  5040
    // console.log(factorial(0)); //  5040


// input, is always going to be integer thats positive? if 0 if 1//
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

