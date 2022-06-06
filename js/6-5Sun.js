//  DOUBLE CHAR   KYU 8
//  Parmeters:  given a string
//  Return: return a string, with each character (case sensitive) repeated once
//  Example:
    // console.log(doubleChar('String'))   // "SSttrriinngg"
//  PseudoCode:
    // split each letter into an array
    //  map... each element = e+e
    // join and return as a string
function doubleChar(str) {
    return str.split('').map(e => `${e}${e}`).join('')
}

//  UNIQUE SUM   KYU 7
//  Parmeters:  given an array of integers (some may be negative)
//  Return: return their sum... if the integer occurs more than once, only count it once
//  Example:
    //  console.log(uniqueSum([1,2,3])) // 6
   //    console.log(uniqueSum([1,3,8,1,8])) // 12
    //  console.log(uniqueSum([])) // null
    
//  PseudoCode:
    // filter out the duplicates... create new array using set constructor
    // reduce that array and return the sum
    // use a conditional, if empty array return null
function uniqueSum(lst){
    const unique = [...new Set(lst)]
    return unique.reduce((a,b)=> a+b, 0) || null
}

//  Tricky Doubles   KYU 7
//  Parmeters:  given a number 
//  Return: return double the number, unless the numver is a double (i.e. 44,77), then just return the number
//  Example:
    //  console.log(trickyDoubles(4343))    //4343
    //  console.log(trickyDoubles(15))  // 30
//  PseudoCode:
    // check if double number
        // toString. ends with === starts with?
function trickyDoubles(n){
    n=n.toString()
    let middle = n.length/2
    if(n.length >1 && n.startsWith(n.slice(-middle))){
        return Number(n)
    }else return Number(n)*2
}

//  Stop gninnipS My sdroW!   KYU 6
//  Parmeters:  given a string of 1 or more words
//  Return: a string
            // if word is 5+ letters, reverse the word
//  Example:
    console.log(spinWords("Hey fellow warriors"))   //"Hey wollef sroirraw"
    console.log(spinWords("This is a test"))    //  "This is a test"
//  PseudoCode:
    //  split string into an array of words
    // check if word is 5+ letters
    // if so reverse the word
    // return joined array as a string\
function spinWords(string){

    const words = string.split(' ')
    let result = []

    for(let i=0; i<words.length; i++){
        if(words[i].length >= 5){
            result.push(words[i].split('').reverse().join(''))
        }else result.push(words[i])
    }return result.join(' ')
}