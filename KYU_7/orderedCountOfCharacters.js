/**
 *
 * @param {string} text always a string || empty
 * @returns {array} array of arrays: in order ['char', #count]
 */

/*
    - split text into arrText by char 
    - iterate through arrText, count num of occurences of each char
    - store char&num occurences in an array
    - return an array of arrays
*/

// const orderedCount = function (text) {
//     if (text.length === 0) return [];
//     const arrText = text.split("");
//     const charMap = {};

//     arrText.forEach((char) => {
//         if (char in charMap) charMap[char]++;
//         else charMap[char] = 1;
//     });
//     return Object.entries(charMap);
// };

const orderedCount = (text) => {
    const arr = [...new Set([...text])];
    return arr.map((char) => [
        char,
        [...text].filter((e) => e === char).length,
    ]);
};

console.log(
    orderedCount("abracadabra"),
    "=> [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]"
);
console.log(orderedCount("233312"), "=> [['2', 2], ['3', 3], ['1', 1 ]]");
