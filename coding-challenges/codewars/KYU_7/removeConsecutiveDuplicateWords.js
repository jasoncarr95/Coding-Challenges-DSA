/*
input: always a string.. words space separated.. no funny biz
if empty just return empty.. otherwise can assume valid input
output: new string(dont mutate )
- only first word entries

PSUEDO
- check if str is empty, if so return empty str
- split string into an array of words (by space)
- iterate through arr, 
    - compare element to element at index+1 (next element)
    - if they are the same, remove element at index+1 / else continue
    - return joined as string
 */

/**
 *
 * @param {string} str
 */

const removeConsecutiveDuplicates = (str) => {
    if (str.length < 1) return "";
    let arr = str.split(" ");
    return arr.filter((word, index) => arr[index - 1] !== word).join(" ");
};

console.log(
    removeConsecutiveDuplicates(
        "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
    )
    // --> "alpha beta gamma delta alpha beta gamma delta"
);
console.log(removeConsecutiveDuplicates("Hello world")); // "Hello World"
console.log(removeConsecutiveDuplicates("")); // ""
console.log(removeConsecutiveDuplicates("Hello Hello World Hello")); // "Hello World Hello"
