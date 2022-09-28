//Count characters in your string KYU 6

/*
	input: string
    output: object


*/
/*  PSEUDO
        - split string into arr of chars
        - start w empty object

*/

function count(string) {
    return string.split("").reduce((allLetters, letter) => {
        const currCount = allLetters[letter] ?? 0;
        return {
            ...allLetters,
            [letter]: currCount + 1,
        };
    }, {});
}

console.log(count("aba")); //  { 'a': 2, 'b': 1}
