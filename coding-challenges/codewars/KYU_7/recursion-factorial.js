// const factorial = (n) => {
//     if (n < 2) return 1;
//     console.log(`n: ${n}`);
//     return n * factorial(n - 1);
// };

function factorial(n) {
    // If n is less than or equal to 1, return 1
    if (n <= 1) return 1;

    // Otherwise, return n multiplied by the factorial of n - 1
    return n * factorial(n - 1);
}

console.log(factorial(5));
