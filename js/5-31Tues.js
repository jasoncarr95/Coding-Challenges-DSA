//  ISOGRAMS   KYU #7
        // isogram= word with no repeating letters aka all letters are unique
        // empty strin also counts
        //ignore letter case
//  Parmeters:  given a string (may be empty)
//  Return:     return a boolean.. true if all letters in string are unique or if string is empty
//  Example:
        //  console.log(isIsogram("Dermatoglyphics"))   // true
        //  console.log(isIsogram("aba"))   // false
        //  console.log(isIsogram("moOse")) // false (ignore letter case)
//  PseudoCode:
    // string to lowercase since we are ignoring case
    //  split string into an array made up of letters
    //  test if all the letters are unique ... create a set and compare against that
function isIsogram(str){
    //split into array lowercase letters
    let letters = str.toLowerCase().split('');
    const unique = [...new Set(letters)]
    // same as this?     const unique = new Set(letters)..... NO 

    return unique.length === letters.length
}

//  REMOVE STRING SPACES   KYU 8
        // remove spaces from string and return resultant string
//  Parmeters:  a string
//  Return: a string w no spaces
//  Example:
    //  console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));    //  "8j8mBliB8gimjB8B8jlB"
    //  console.log(noSpace("8aaaaa dddd r     ")); //  "8aaaaaddddr"
    
    
//  PseudoCode:
    // trim only accounts for end
    // use replace all?

function noSpace(x){
    // return x.replaceAll(' ','')
    // that doesnt work.. not a function??? in codewars.. does in my browser
    return x.split(' ').join('')
}

//STRINGS, STRINGS, STRINGS, (EASY) KYU 7
    // {Object.prototype.toString = function(str){
    //     return this+''
    // }
    // Number.prototype.toString = function(str){
    //     return this+''
    // }
    // Boolean.prototype.toString = function(str){
    //     return this+''
    // }
    
    // Array.prototype.toString = function(str){
    //     return "["+this.join()+"]"
    // }
    // }