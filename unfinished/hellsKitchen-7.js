//  Hells Kitchen   KYU 7
//  Parmeters: string of 4 words
//  Return: string in gordon language... 
        //ALL CAPS. 
        // every word ends in !!!!
        //  a --> @
        // other vowels --> *
//  Example:
console.log(gordon("What feck damn cake"))  //  'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'
console.log(gordon("are you stu pid"))  //  @R*!!!! Y**!!!! ST*!!!! P*D!!!!')
//  PseudoCode:
// split the given string of 4 words into an array of 4 words
// append "!!!!" to each word
// check each word for a.. replace with @
// check for other vowels (compared with a const) replace those with "*"
//  return the array of words joined back together as a string

// any given words already end with an "!"

function gordon(a){
// split the given string of 4 words into an array of 4 words
let words = a.toUpperCase().split(" ").map(e => e+= "!!!!")

let letters = words.map(e => e.split(''))

console.log(letters)

const vowels = "AEIOU".split("")

let gordonLetters = letters.map(function(e) {
return e == "A" ? "@" :
    vowels.includes(e) ? "*" :
    e
})

// let gordonLetters = letters.map(e => {
//     return e == "A" ? "@" :
//     vowels.includes(e) ? "*" :
//     e
// })

return gordonLetters
}