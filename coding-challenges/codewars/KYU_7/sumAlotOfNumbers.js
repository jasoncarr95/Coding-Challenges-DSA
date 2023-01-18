function f(n) {
    // check if n is a positive, integer number.. if not return false
    if (typeof n !== "number") return false;
    if (n < 1 || !Number.isInteger(n)) return false;
    // use gaus's sum to get sum of all numbers 1-n

    return (n * (1 + n)) / 2;
}

console.log(f(100), 5050);
console.log(f(300), 45150);
console.log(f("n"), false, "n is not a valid number");
console.log(f(0), false);
console.log(f(-10), false);
console.log(f(3.14), false);
