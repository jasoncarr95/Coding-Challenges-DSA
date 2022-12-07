//         // Find the next perfect square
function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  return Number.isInteger(Math.sqrt(sq)) 
}

        //Find the first non-consecutive number
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null
}

        // Can we divide it?
function isDivideBy(number, a, b) {
    return Number.isInteger(number/a) && Number.isInteger(number/b)
}

        //Find the Capitals
const capitals = function (word) {
	let caps = word.split('').filter(letter => letter === letter.toUpperCase());
    let result = [];
    for (let i = 0; i < word.length; i++) {
        if (caps.includes(word[i])){
            result.push(i)
        }
    }
    return result
};

