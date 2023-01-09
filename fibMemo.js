function fib(n) {
    // empty object for memoization
    const memo = {};

    //Base Case
    if (n === 0 || n === 1) return n;

    // check if already memoized
    if (n in memo) return memo[n];

    let result = fib(n - 1) + fib(n - 2);
    memo[n] = result;
    return result;
}

console.log(fib(4)); // 3
console.log(fib(5)); // 5
console.log(fib(6)); // returns 8 (0, 1, 1, 2, 3, 5, 8)

/* STEPPING THROUGH fib(5)
n = 5 
- not 0 || 1
- not in memo
 =>>

n = 4
- not 0 || 1
- not in memo
=>>

n = 3
- not 0 || 1
- not in memo
=>>
n = 2
- not 0 || 1
- not in memo
=>>


n = 1
RETURN 1
     (result = fib(n - 1) + fib(n - 2)



n = 2 =>> result = 1
memo{2:1}

n = 3 =>> result = 2
memo{3:2}
 
 */
