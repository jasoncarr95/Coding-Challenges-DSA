/**
 * Return the numbers from the string in the order they occur
 * @param {string} value - A string that contains a mix of numbers and letters
 * @returns {number} - The number values extracted from the string
 */

const filterString = (value) => {
    // split the string into an array of characters
    const chars = value.split("");
    // filter the array to only include numbers
    const nums = chars.filter((char) => {
        return !isNaN(char);
    });
    // join the array of numbers into a string
    const numString = nums.join("");
    // convert the string to a number
    const num = Number(numString);
    return num;
};

var filterStringV2 = function (value) {
    const numbers = value.split("").filter((char) => !isNaN(char));

    return Number(numbers.join(""));
};

// Test Cases
console.log(filterStringV2("123")); // 123
console.log(filterStringV2("a1b2c3")); // 123
console.log(filterStringV2("aa1bb2cc3dd")); // 123
console.log(filterStringV2("aa1bb2cc3dd4")); // 1234
console.log(filterStringV2("aa1bb2cc3dd4ee5ff6gg7hh8ii9jj0kk")); // 1234567890
