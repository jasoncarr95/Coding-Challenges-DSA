// Given a magazine of words and a ransom note,
// determine if it’s possible to “cut out”
// and create the ransom note from the magazine words.

const magazine =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// @ts-check

/**
 *
 * @param {string} magazine
 * @param {string} note
 * @returns {boolean}
 */
// function ransomNote(note, magazine) {
//     // iterate through note, check if every in note occurs in magazine enough times
//     // create hashmap to keep track of words & number of words in each
//     // true => word & #occurences

//     // hashmap for magazine
//     const magazineMap = {};
//     magazine.split(" ").forEach((word) => {
//         if (word in magazineMap) magazineMap[word]++;
//         else magazineMap[word] = 1;
//     });

//     // console.log(magazineMap);

//     // hashmap for note
//     const noteMap = {};
//     note.split(" ").forEach((word) => {
//         if (word in noteMap) noteMap[word]++;
//         else noteMap[word] = 1;
//     });

//     for (const word in noteMap) {
//         if (!word in magazineMap) return false;
//         if (!noteMap[word] > magazineMap[word]) return false;
//         console.log(noteMap[word], magazineMap[word]);
//     }

//     return true;
// }

function ransomNote(note, magazine) {
    const noteWords = note.split(" ");
    const magazineWords = magazine.split(" ");
    const magazineHash = {};
    let possible = true;

    for (const word of magazineWords) {
        magazineHash[word] = magazineHash[word] + 1 || 1;
    }

    for (const word of noteWords) {
        if (magazineHash[word]) {
            magazineHash[word]--;
            if (magazineHash[word] < 0) return false;
        } else {
            return false;
        }
    }
    return possible;
}

console.log(ransomNote("sit ad est sint in in in in", magazine), false);
console.log(ransomNote("sit ad est sint", magazine), true);
console.log(ransomNote("sit ad est love", magazine), false);
console.log(ransomNote("sit ad est sint in in", magazine), true);
