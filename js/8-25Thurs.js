//  Duplicate Encoder   KYU 6

/*
    convert string to s new string, where each char in new string is "(" if appears only once in OG string or ")" if appears more than once
    // ignore case
    
    PSEUDO
        // split word into an array of chars
    // map letters to new arr based on if has a dupe
        // test each char, for if it is a duplicate
    // return joined as a string

*/

function duplicateEncode(word) {
    word = word.toLowerCase();
    let newWord = word.split("").map((char, index) => {
        if (word.indexOf(char) === word.lastIndexOf(char)) return "(";
        else return ")";
    });
    return newWord.join("");
}

// console.log(duplicateEncode("din")); // "((("
// console.log(duplicateEncode("recede")); //  "()()()"
// console.log(duplicateEncode("Success")); // ")())())"
// console.log(duplicateEncode('@IOIIFIckI'))  // "()())()(()"

// CamelCase Method KYU 6
// input {string}
// output: camelCase

String.prototype.camelCase = function () {
    //split string into arr of words.. all Lowercase
    let words = this.toLowerCase().split(" ");
    let result = "";
    // capitalize first letter of each word
    for (let i = 0; i < words.length; i++) {
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    // return it joined back as a string
    return result;
};

console.log("hello case".camelCase()); //=> HelloCase
console.log("camel case word".camelCase()); //=> CamelCaseWord
