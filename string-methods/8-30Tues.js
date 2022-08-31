// Most Digits  KYU 7
// find num with most digits
// if 2 have same, return first
// console.log(findLongest([1,10,100]))    // 100
// console.log(findLongest([9000, 8, 800]))    // 9000

/*  PSEUDO
    - map each num to its num of digits 
    - return OG num of element w most digits
*/

function findLongest(array) {
    let lengths = array.map((el, ind) => String(el).length);
    return array[lengths.indexOf(Math.max(...lengths))];
}

// Sort by Last Char    KYU 7
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

