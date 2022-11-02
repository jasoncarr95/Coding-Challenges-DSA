/**
 *
 * @param {string} x string of words
 * @return {array<string> }
 * return array of the words sorted alphabetically,
 * by final char in each
 *
 * if 2 words w/ same last letter, return in og orderr
 *
 */

// string is of only alphabetical letters.. no nums or special chars, etc
// case-sensitive? -- account for case sensitive
// words are all space-separated

// split string into an array
// sort => by last char of each word
// return as an arr
function last(x) {
    let words = x.split(" ");
    return x.split(" ").sort((a, b) => {
        let lastA = a.charAt(a.length - 1);
        let lastB = b.charAt(b.length - 1);
        return lastA.localeCompare(lastB);
    });
}

console.log(last("man i need a taxi up to ubud"));
//['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
console.log(last("what time are we climbing up the volcano"));
//[time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
console.log(last("take me to semynak"));
//['take', 'me', 'semynak', 'to']
