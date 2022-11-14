/**
 *
 * @param {Array<number>} triplet 3 distinct numbers
 * @return {number} index of the middle number
 */

/**
 *  find the middle number
 *  make arr copy, and sort it
 *  middle element will be sortedCopy[1]
 *  return indexOf middleElement in OG array
 */

function gimme(triplet) {
    let sortedCopy = triplet.slice().sort((a, b) => a - b);
    let middleElement = sortedCopy[1];
    return triplet.indexOf(middleElement);
}

console.log(gimme([2, 3, 1]), "=> 0");
console.log(gimme([5, 10, 14]), "=> 1");
console.log(gimme([69, 420, 350]), "=> 2");
