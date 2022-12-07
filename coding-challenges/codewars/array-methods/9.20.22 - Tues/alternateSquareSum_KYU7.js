// Alternate Square Sum     KYU 7

/*
	input: arr of integers
        - find sum of squares of elements at even posititions (ODD INDICES)
        - plus sum of the rest at odd
    output: integer
*/
/*  PSEUDO
        - create filtered arr of values at even positions (odd indices)
            - map to squared values
            - reduce to sum
        - values not in filtered arr
            - iterate over OG arr
                - if element is in filtered arr, skip, else add to sum
*/

function alternateSqSum(arr) {
    let sum = 0;
    
    arr.forEach((element, index) => {
        if (index > 0 && index % 2 != 0) {
            sum += element ** 2;
        } else sum += element;
    });
    return sum;
}
// console.log(alternateSqSum([11, 12, 13, 14, 15])); // should return 379

let arr = [11, 7, 8, 6, 13, 7, 13, 7, 13, 12, 12, 14, 6, 7, 14, 14, 14, 11, 5]; // 998
console.log(alternateSqSum(arr));
