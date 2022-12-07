function replace(s) {
    const vowels = "aeiouAEIOU";

    for (let char of s) {
        if (vowels.includes(char)) {
            s = s.replace(char, "!");
        }
    }
    return s;
}

console.log(replace("Hi!"), "H!!");
console.log(replace("!Hi! Hi!"), "!H!! H!!");
console.log(replace("aeiou"), "!!!!!");
console.log(replace("ABCDE"), "!BCD!");
