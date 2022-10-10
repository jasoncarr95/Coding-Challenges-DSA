//  Find the stray number   KYU 7
//  Parmeters:  given an array of integers with an odd length.. length >= 3.. input always valid
//  Return: return the integer in the array that only occurs once
//  Example:
    //  console.log(stray([1,1,2]));    // 2
    //  console.log(stray([17,17,3,17,17,17,17]));  // 3

    
    
//  PseudoCode:
        // take element from the array (pop)
        // if that element doesnt occur in the array anymore, return it.
        // else, return an element in the array that isnt in the number
function stray(numbers) {
    const x = numbers.pop()
    if(!numbers.includes(x)){
        return x
    }else {
        return numbers.filter(e => e !== x)[0]
    }
}


//  Moving Zeros To The End   KYU 5
//  Parmeters:  given an array
//  Return: return the array, but with the 0's at the end
//  Example:
        //  console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));  //  returns[false,1,1,2,1,3,"a",0,0]
        //  console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));      //  [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
        
        
//  PseudoCode:
    // filter array so that it doesnt include any 0's
    // find out how many 0's were in the array... length - filtered length
    // loop and push that many 0's o the end 
    // return 

function moveZeros(arr) {
    let result = arr.filter(e=> e !== 0)
    let numZeros = arr.length - result.length
    console.log(numZeros);
    
    for(let i = 1; i<= numZeros; i++){
        result.push(0)
    }
    return result
}


//  Two Oldest Ages   KYU 7
//  Parmeters:  given an array.. always at least 2 items. 
//  Return: return 2 oldest people  [second oldest, oldest]
//  Example:
        console.log(twoOldestAges([1,2,10,8]));     // [8,10]
        console.log(twoOldestAges([1,5,87,45,8,8]));     // [45,87]
        
//  PseudoCode:
        /* ez way:
                sort array, return [arr[arr.length-2], arr[arr.length-1]]
          challening?:
            pop(Math.max(...arr))   ??
        */
// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    ages.sort((a,b)=> a-b)
    return [ages[ages.length-2], ages[ages.length-1]]
}
