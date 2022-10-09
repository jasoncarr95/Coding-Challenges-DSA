//Sort by Last Char    KYU 7
/*
        input: string of words
        output: arr of words, sorted alphabetically by last char(if same, sort in order they appeared)
    */
/*  PSEUDO
        - split into an array of words
        - sort by last char
    */
// console.log(last("what time are we climbing up the volcano")); // ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);

function last(x) {
    let words = x.split(" ");

    return words.sort((a, b) => {
        if (a.charAt(a.length - 1) < b.charAt(b.length - 1)) {
            return -1;
        }
        if (a.charAt(a.length - 1) > b.charAt(b.length - 1)) {
            return 1;
        }
        return 0;
    });
}

