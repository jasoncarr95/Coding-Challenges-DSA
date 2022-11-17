/**
 *  find the middle number
 *  make arr copy, and sort it
 *  middle element will be sortedCopy[1]
 *  return indexOf middleElement in OG array
 */
/**
 *
 * @param {Array<number>} arr 3 distinct numbers
 * @return {number} index of the middle number
 */

function gimme(arr) {
    let sortedCopy = arr.slice().sort((a, b) => a - b);
    let middleElement = sortedCopy[1];
    return arr.indexOf(middleElement);
}
function gimme(arr) {
    return arr.indexOf([...arr].sort((a, b) => a - b)[1]);
}

console.log(gimme([2, 3, 1]), "=> 0");
console.log(gimme([5, 10, 14]), "=> 1");
console.log(gimme([69, 420, 350]), "=> 2");
