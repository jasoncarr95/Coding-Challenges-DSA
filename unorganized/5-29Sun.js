//  FREUDIAN TRANSLATOR   KYU 8

function toFreud(string) {
  return string ? string.split(' ').map(e => e='sex').join(' ') : ''
}

//  Simple Interest and Compound Interest   KYU 7
//  Parmeters:  principal(p)-always between 0-9999
                //interest rate (r )    decimal 0-1
                // number of periods (n)    0-50
//  Return:
            // array: [total w simp, totalcompound]
//  Example:
    //  console.log(interest(100,0.1,1));   // [110,110]
    //  console.log(interest(100, 0.1, 2)); // [120,121]
    //  console.log(interest(100, 0.1, 10));    // [200,159]
    
//  PseudoCode:

function interest(P, r, n) {
    let simple = (P * r * n) + P;
    
    let compoundInterest =P;
    for (let i = 1; i <= n; i++){
        compoundInterest*=(1+r)
    }
    return [Math.round(simple),Math.round(compoundInterest)]
}


//  Form The Minimum   KYU 7
//  Parmeters:  given an list of positive integers (no 0 or negative)
//  Return:     return smallest number formed from these digits (ignore duplicates)
//  Example:
    //  console.log(minValue([1,3,1])); //13
    //  console.log(minValue([5,7,9,5,7])); //  579     
//  PseudoCode:
    //make set to get rid of duplicates
    // sort set
    // concatenate and return as number

function minValue(values) {
    let uni = new Set(values.sort((a, b) => a - b));
    return Number(Array.from(uni).join(''))
}

//  nthSmallest   KYU 7
//  Parmeters:  array of integers.. may include 0/negative. and the nth number to find.
//  Return: nth smallest
//  Example:
    //  console.log(nthSmallest([3,1,2], 2));  // 2
    //  console.log(nthSmallest([-5,-1,-6,-18], 4));  // -1
//  PseudoCode:
    // sort array, return element at nth spot (nth element, not nth index)

function nthSmallest(arr, pos) {
    arr.sort((a, b) => a - b);
    return arr[pos-1]
}