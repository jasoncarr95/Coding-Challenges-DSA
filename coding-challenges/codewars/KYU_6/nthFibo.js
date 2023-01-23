function nthFibo(n) {
  // Return the n-th number in the Fibonacci Sequence
  // n = 1 => 0
  // n = 2 => 1
  // Rest => (n - 1) + (n-2)

  if (n < 2) return n;

  return nthFibo(n - 1) + nthFibo(n - 2);
}

console.log(nthFibo(1)); // 0
console.log(nthFibo(5)); // 5
console.log(nthFibo(10)); // 55
console.log(nthFibo(15)); // 610
