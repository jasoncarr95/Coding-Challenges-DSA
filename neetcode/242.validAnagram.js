/**
 * Hash Map - Frequency Counter
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = (s, t, map = new Map()) => {
    const isEqual = s.length === t.length;
    if (!isEqual) return false;

    addFrequency(s, map); /* Time O(N) | Space O(N) */
    subtractFrequency(t, map); /* Time O(N) | Space O(N) */

    return checkFrequency(map); /* Time O(N) */
};

const addFrequency = (str, map) => {
    for (const char of str) {
        /* Time O(N) */
        const count = (map.get(char) || 0) + 1;

        map.set(char, count); /* Space O(N) */
    }
};

const subtractFrequency = (str, map) => {
    for (const char of str) {
        /* Time O(N) */
        if (!map.has(char)) continue;

        const count = map.get(char) - 1;

        map.set(char, count); /* Space O(N) */
    }
};

const checkFrequency = (map) => {
    for (const [char, count] of map) {
        /* Time O(N) */
        const isEmpty = count === 0;
        if (!isEmpty) return false;
    }

    return true;
};

console.log(isAnagram("anagram", "nagaram")); //true
console.log(isAnagram("rat", "car"));
