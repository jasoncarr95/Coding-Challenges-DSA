/*  Day 4 (from Tuesday 10/4) Completed Thurs 10/6

Given a string, reverse it. 
Any details like whitespace, letter casing, or punctuation should be preserved and flipped along with the rest of the string.

    PARAM: string
    RETURN: string


    PSEUDO
*/

const reverseString = (str) => {
    return str.split("").reverse().join("")
}

console.log(reverseString("   The white space at the beginning of this string doesn't match the whitespace at the end. "), "result")
// reverse it
" .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "
