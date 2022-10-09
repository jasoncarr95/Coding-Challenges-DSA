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
