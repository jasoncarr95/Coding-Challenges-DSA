//  Are they the "same"?
// check whether 2 arrays have same multiplicities...
// i.e elements in arr2 are all the elements in arr1^2, regardless of order
// return a boolean
// check for valid inputs

/* PSUEDO
    - check valid ... dont have to be same lenght? ... neither are empty
    - iterate through one of the arrays, check that every element is sqrt or sq in the other
    - return boolean

    */

    function comp(array1, array2) {
        if (a.length == 0 || b.length == 0) return false;
    
        let squares = array1.map((el) => el ** 2);
        return squares.every((el) => array2.includes(el));
    }
    
    let a = [2, 4, 12];
    let b = [4, 16, 144];
    console.log(comp(a, b)); // true
    
    a = [121, 144, 19, 161, 19, 144, 19, 11]
    b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
    console.log(comp(a,b))  // false