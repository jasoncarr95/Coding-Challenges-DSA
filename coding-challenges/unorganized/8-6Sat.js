//  Arithmetic Progression   KYU 7
//  Parmeters: (firstElement, commonDiff, numElements)
//  Return: return a string of numbers separated by comma space
//  Example:
    console.log(arithmeticSequenceElements(1,2,5))  //  "1, 3 ,5 ,7 ,9"
    console.log(arithmeticSequenceElements(1,-3,10))    //"1, -2, -5, -8, -11, -14, -17, -20, -23, -26"  
//  PseudoCode:
    // for loop
    //  have variable = firstEl
    // n-1 number of iterations 
    //  += " diff"

function arithmeticSequenceElements(a, d, n) {
	let result = String(a)
    for(let i = 1; i < n; i++){
        result+= `, ${a+(i*d)}`
    }
    return result
}


var replaceDots = function(str) {
// added the \ to escape special characters
// added the g so that replace is run for all occurences in the string
  return str.replace(/\./g, '-');
}