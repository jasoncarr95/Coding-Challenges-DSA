//  Execute me nTimes   KYU 7

//task: find way to execute the action n times in parallel, so its faster... async/await

//  Example:

//  PseudoCode:

function execute(action, nTimes) {
    for (let i = 0; i < nTimes; i++) {
        action();
    }
}

//  Multiply Word in String   KYU 7
//  Parmeters: string(of words), integer(index), multiplyer
//  Return: multiply indexed word by the given multiplyer. add hypen between each word
//  Example:
//console.log(modifyMultiply("This is a string", 3, 5)) // "string-string-string-string-string"

//  PseudoCode:
// first have to find the word at the given index (loc)
//  split the given string into an arrray of words
//  multiply 'string' * num
// join together with '-' as a delim

function modifyMultiply(str, loc, num) {
    let arrWords = str.split(" ");
    let targetWord = arrWords[loc];
    let result = targetWord;

    for (let i = 1; i < num; i++) {
        result += `-${targetWord}`;
    }
    return result;
}

//  Adding Arrays   KYU 7
//  Parmeters: array of arrays (letters)
//  Return: combined letters into words in a sentence
// combine by index to create a word
//  Example:
console.log(
    arrAdder([
        ["J", "L", "L", "M"],
        ["u", "i", "i", "a"],
        ["s", "v", "f", "n"],
        ["t", "e", "e", ""],
    ])
); // => "Just Live Life Man"

//  PseudoCode:
    // iterate over parent array 
    // for each element 

function arrAdder(arr) {
    let result = ""
    for(let i = 0; i < arr[0].length; i++){
        for(let j = 0; j < arr.length; j++){
            result+= arr[j][i]
        }
        result += " "
    }
    return result.trim()
}
