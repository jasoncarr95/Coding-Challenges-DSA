// Most Digits  KYU 7
// find num with most digits
// if 2 have same, return first
// console.log(findLongest([1,10,100]))    // 100
// console.log(findLongest([9000, 8, 800]))    // 9000

/*  PSEUDO
    - map each num to its num of digits 
    - return OG num of element w most digits
*/

function findLongest(array) {
    let lengths = array.map((el, ind) => String(el).length);
    return array[lengths.indexOf(Math.max(...lengths))];
}