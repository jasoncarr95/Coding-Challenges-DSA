// Sum The Array KYU 7

/* add method "sum" to all array objects
    - sums all numbers in it, returns 0 if arr is empty

    psuedo:
    - prototype to arr object
    - assume only numbers in the arr?
        - filter or return error?
    - reduce
    
*/

Array.prototype.sum = function () {
  return [...this].reduce((a, b) => a + b, 0);
};

let arr = [1, 2, 3, 4];
console.log(arr.sum());
