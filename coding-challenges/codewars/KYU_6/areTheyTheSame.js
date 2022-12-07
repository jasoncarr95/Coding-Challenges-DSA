// check that each array has the "same" elements, occuring same # of times
// "same": b[n] === a[n]^2 (order doesnt matter)

/**
 *
 * @param {Array<number>} array1
 * @param {Array<number>} array2 elements should be the elements in array1 squared
 * @return {boolean}
 */

// iterate through each element in array1
// check if array2 includes the element ^2

// sort each array
// then iterate through arr1 check if arr1[n] ^2 === arr2[n]

// const compareArrays = (array1, array2) => {
//     if (!array1 || !array2) return false;

//     let arr1 = array1.sort((a, b) => a - b).map((num) => num ** 2);
//     let arr2 = array2.sort((a, b) => a - b);

//     return arr1.every((num, index) => num === arr2[index]);
// };

function comp(array1, array2) {
    let arr1 = array1.sort((a, b) => a - b);
    let arr2 = array2.sort((a, b) => a - b);

    let passing = true;
    arr1.forEach((num, index) => {
        console.log(`${num} => ${arr2[index]}`);
        if (num ** 2 !== arr2[index]) passing = false;
    });

    return passing;
}

a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(a, b)); // false

a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(a, b)); // true
