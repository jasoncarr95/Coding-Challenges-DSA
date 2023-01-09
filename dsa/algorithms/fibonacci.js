// function fibonacci(n) {
//     if (n < 2) return n;

//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(`${n}: fibonacci(n - 1): ${fibonacci(n - 1)} \n`);
// console.log(`${n}: fibonacci(n - 2): ${fibonacci(n - 2)} \n`);
// console.log(fibonacci(n - 1) + fibonacci(n - 2));

// function fibonacci(n) {
//     if (n < 2) return n;

//     const memo = {};

//     if (n in memo) {
//         return memo[n];
//     } else {
//         memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

console.log(fibonacci(4)); // 3
console.log(fibonacci(6)); // returns 8 (0, 1, 1, 2, 3, 5, 8)

function fibonacci(n) {
    const memo = {};
    if (n in memo) return memo[n];
    if (n < 2) return n;

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}
