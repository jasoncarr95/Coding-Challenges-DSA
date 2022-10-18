/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// true if ransomNote can be constructed using letters from magazine
// false if not

// each letter can only be used once

/*Constraints
1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

var canConstruct = function (ransomNote, magazine) {
    // not enough letters
    if (ransomNote.length > magazine.length) return false;
    // characterMaps
    const ransomNoteMap = {};
    ransomNote.split("").forEach((char) => {
        if (char in ransomNoteMap) {
            ransomNoteMap[char]++;
        } else ransomNoteMap[char] = 1;
    });
    const magazineMap = {};
    magazine.split("").forEach((char) => {
        if (char in magazineMap) {
            magazineMap[char]++;
        } else magazineMap[char] = 1;
    });

    // console.log(ransomNoteMap);
    // console.log(magazineMap);

    // check that every char is in mag && num of chars <= mag

    for (let char in ransomNoteMap) {
        if (!magazineMap.hasOwnProperty(char)) {
            return false;
        } else if (ransomNoteMap[char] > magazineMap[char]) {
            return false;
        }
        // console.log(`char: ${char}`);
        // console.log(`ransom: ${ransomNoteMap[char]}`);
        // console.log(`mag: ${magazineMap[char]}`);
        // console.log(ransomNoteMap[char] > magazineMap[char]);
    }
    return true;
};

// console.log(canConstruct("a", "b")); //false
// console.log(canConstruct("aa", "ab")); // false
// console.log(canConstruct("aa", "aab")); // true
console.log(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi")); // false
