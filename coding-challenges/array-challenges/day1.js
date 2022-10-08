/*  Day 1 Sat. 10.8.22

    Compare Arrays
    
    -check equality between 2 arrays with a particular structure
    - arrays will:
        - be equal size
        - each contain some number (x) arrays
        - each inner array will contain same number (x) primitive elements

    All the nested primitives within each array must strictly match to return a true result. 
    Any mismatches will return false.


    PARAM: 2 nested arrays
    RETURN: boolean

    PSEUDO
        - to check for equality, check that every element at a given index is the same
        - since nest arrs, will use nested for loop
        - foreach nestedArr, check if arr[i] === arr[i]

        better solution??: 
            - use spread syntax?
            - use array.flat()

*/

const checkEquality = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        // console.log(arr1[i])
        for (let j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] !== arr2[i][j]) return false;
        }
    }
    return true;
};

// EXAMPLE
// each of these arrays have 3 nested arrays of 3 strings each
const arr1 = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
];
const arr2 = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
];
const arr3 = [
    ["a", "B", "c"],
    ["d", "E", "f"],
    ["g", "H", "i"],
];
const arr4 = [
    ["a", "b", "c"],
    ["g", "h", "i"],
    ["d", "e", "f"],
];

// if we were to use our function to compare all the possible pairs
// ONLY arr1 vs arr2 would return true

console.log(checkEquality(arr1, arr2)); //  true
console.log(checkEquality(arr1, arr3)); //  false
console.log(checkEquality(arr1, arr4)); //  false
// etc.
