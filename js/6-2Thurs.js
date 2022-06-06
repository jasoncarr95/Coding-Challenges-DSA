// Grasshopper - Messi goals function   KYU 8

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals+copaDelReyGoals+championsLeagueGoals
}
// BASIC VARIABLE ASSIGNMENT    KYU 8
    // too ez to even write



// Smallest value of an array   KYU 7
//  Parmeters:  first value is always an array with at least 1 number and no duplicated
                    // 2nd value (if given) is a string holding either 'value' or 'index'
//  Return:     either the smallest value, or that values index
//  Example:
    //  console.log(min([1,2,3,4,5], 'value')); //1
    //  console.log(min([1,2,3,4,5], 'index')); //0
    
//  PseudoCode:

function min(arr, toReturn) {
    if(toReturn === 'value'){
        return Math.min(...arr)
    }else return arr.indexOf(Math.min(...arr))
}


//  Is every value in the array an array?   KYU 7
//  Parmeters:  given a nested array
//  Return:
    // only test the second array dimension of the array.. values of nested arrays dont matter
//  Example:
    //  console.log( arrCheck( [[1],[2]] ) );   // true
    //  console.log( arrCheck( ['1','2'] ) );   // false
//  PseudoCode:

function arrCheck (value){
    return value.every(element => Array.isArray(element))
}

//  Insert value into an array   KYU 6
    // add Array.prototype.insert(index,value)
        // must change original array
        //insert (value)    at the given (index) in the array
        //if index > array size, insert it at the end
        // mist retirn the array to be able to chain the insert function call
//  Return:
//  Example:
    
    
//  PseudoCode:

// Array.prototype.insert = function(index,value){
//     if(index > this.length){
//         this.push(value);
//         return this
//     }else {
//         this.splice(index,0,value);
//         return this
//     }
    
// }

Object.defineProperty(Array.prototype,'insert',{
    value: function(index,value){
        if(index > this.length){
            this.push(value);
            return this
        }else {
            this.splice(index,0,value);
            return this
        }
    },
    enumerable: false
})

// const arrTest = [1,2,3]
// console.log( arrTest.insert(0,42) ); // => [42,1,2,3]