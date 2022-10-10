/*
    input: string, minorWords(optional.. list of words always lowercase except if first word)
    output: str

    each word in string is either:
        - capitalised (only first letter)
        - an exception (all lowercase... unless first word)
*/
/*  PSEUDO
        - make whole string lowercase
        - split string into array of words
        - map arr 
            - if item is in minorWords && not first word, keep lowercase
            - otherwise capitalize first letter of word
        - return joined as string
    
    CHECK IF MINOR WORDS IS DEFINED

*/

function titleCase(title, minorWords = "") {
    let words = title.toLowerCase().split(" ");
    minorWords = minorWords.split(" ").map((word) => word.toLowerCase());

    function capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return words
        .map((word, index) => {
            return minorWords.includes(word) && index !== 0
                ? word
                : capitalizeFirstLetter(word);
        })
        .join(" ");
}
console.log(titleCase("a clash of KINGS", "a an the of")); // should return: 'A Clash of Kings'
console.log(titleCase("THE WIND IN THE WILLOWS", "The In")); // should return: 'The Wind in the Willows'
console.log(titleCase("the quick brown fox")); // should return: 'The Quick Brown Fox'
console.log(titleCase("a bc", "BC"));

// const capitalizeFirstLetter = (word) => word[0].toUpperCase() + word.slice(1);
// console.log(capitalizeFirstLetter("a")); // "Word"
