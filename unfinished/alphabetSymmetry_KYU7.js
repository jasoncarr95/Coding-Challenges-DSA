// Alphabet symmetry   KYU 7

/*
        input: array of "words"
        output: array of numbers [number of letters that occupy their position in each word]
*/
/*  PSEUDO
        -arr -- map > word-> number
        - make all lowerCase since case sensitive
        - iterate through each word. 
            - if index+1 === charCodeAt - 96 ... add +1 to score
*/

function solve(arr) {
    let letters = arr.map(word => word.toLowerCase().split(""))

    letters.filter((letter,index)=> {
        return (letter[index].charCodeAt() - 96) === (index + 1) 
    })
}

console.log(solve(["abode", "ABc", "xyzD"])); //  [4,3,1]
