// Count the Characters KYU 7

/*
input: string, char

count umb of times char is in string... case insensitive

PSUDEO:
- make both string and char are lowercase
- split string the array
- filter arr = char
- reduce that // arrlength

*/

function countChar(string, char) {
    string = string.toUpperCase();
    char = char.toUpperCase();
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) count += 1;
    }
    return count;
}

console.log(countChar("fizzbuzz", "z")); // 4
