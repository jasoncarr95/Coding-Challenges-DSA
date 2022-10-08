// Day 3 (from Monday 10/3) Completed Tues 10/4

const key = "Space".split("")
// S,p,a,c,e

// remove any instances of key characters with an empty space " "

/*  pseudo
    - have my arr of key characters
    - split input str into arr
    - iterate over arr
        - if char is in keys, replcae with spacec
    - return joined string
*/

function replaceCharsWithSpace (str, keys=[ 'S', 'p', 'a', 'c', 'e' ]){

    return str.split("").map(char => keys.includes(char) ? " " : char).join("")
}

const exampleString = "Space Balls in ur mouf"
console.log(replaceCharsWithSpace(exampleString))
//      B lls in ur mouf

// console.log(replaceCharsWithSpace('AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters',['A','_','K','E','Y','!'] ))
//  you could think this is hard to read before replacing the key characters