// Help the fruit guy   KYU 7
/*
        input: array of strings (FRUITS)
            - replace rotten ones with fresh ones
        output: array of strings.. rotten fruits replaced w/ good ones 
            - if null/empty reurn []
    */
/*  PSEUDO
        - validate input 
        - iterate through the array.. map()
        - check if string includes "rotten"
            - if so, replace using slice
            - make lowercase
        - return arr

    */
//    console.log(removeRotten(["apple", "rottenBanana", "apple"])) // ["apple","banana","apple"]
// console.log(removeRotten(null))
// console.log(removeRotten([]))
function removeRotten(bagOfFruits) {
    if (!bagOfFruits || bagOfFruits.length < 1) return [];
    return bagOfFruits.map((fruit) => {
        return !fruit.includes("rotten") ? fruit : fruit.slice(6).toLowerCase();
    });
}
// Suzuki needs help lining up his students!    KYU 7
/*
        input: string of names
        output: arr of names sorted by length in desc order
    */
/*  PSEUDO
        - split str into an array of students
        - sort by length 
    */
console.log(
    lineupStudents(
        "Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi"
    )
);
// ['Takehiko','Takayuki','Takahiro','Takeshi', 'Takeshi','Takashi','Tadashi','Takeo','Takao']

function lineupStudents(students) {
    return students
        .split(" ")
        .sort((a, b) => b.length - a.length || b.localeCompare(a));
}
