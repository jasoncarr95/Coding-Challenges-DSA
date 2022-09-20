//  Sum all the arrays KYU 7

/*
    input: array of values
        - sum every number in the array and any nested arrays (to any depth)
        - ignore other types of values
    output:
        - number (sum)
*/
/*  PSEUDO
    - flatten the array
    - iterate through arr, adding number values to sum
    - return sum
*/

function arraySum(arr) {
    let sum = 0;
    arr.map((e) => {
        return e.isArray() ? e.reduce((a, b) => a + b) : e;
    })
        .filter((e) => typeof e === "number")
        .reduce((a, b) => a + b, 0);
}

console.log(arraySum([1, 2])); // 3
console.log(arraySum([1, 2, 3])); // 6
console.log(arraySum([1, 2, [1, 2]])); // 6
console.log(arraySum([1, 2, [1, 2]])); // 6
console.log(arraySum([1, 2, [1, 2], true, "string"])); // 6
