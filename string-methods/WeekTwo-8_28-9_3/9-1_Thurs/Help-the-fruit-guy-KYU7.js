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