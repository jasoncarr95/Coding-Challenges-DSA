/*
    input: array, boolean(isRight)
    output: array
    
    mutate the og array??

    if isRight (default true): 
        - all zeros on right
    else all zeros on left
*/
/*  PSEUDO
        - have to account for default being true (if not passed as arg)
        - filter
            - 1 arr of 0s, one of non zeros
            - concat them based on boolean
*/

function move_zeros(arrNum, isRight = true) {
  let zeros = arrNum.filter((num) => num === 0);
  let nonZeros = arrNum.filter((num) => num !== 0);

  return isRight ? [...nonZeros, ...zeros] : [...zeros, ...nonZeros];
}

let arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
console.log(move_zeros(arrNum, true)); //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]

arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
console.log(move_zeros(arrNum, false)); //=> returns [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]

arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
console.log(move_zeros(arrNum)); //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]
