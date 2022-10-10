//  Swap the head and the tail  KYU 7
//  head (first half) moves to end..tail (send half) moves to start.. middle element (if exists) stays same
// 5 el.. middle = 3 2-1-2
//  4 el.. no middle.. 2-2
    // console.log(swapHeadAndTail([1, 2, 3, 4, 5])); //  [4,5,3,1,2]
    // console.log(swapHeadAndTail([-1, 2])); //  [2,-1]
    // console.log(swapHeadAndTail([1, 2, -3, 4, 5, 6, -7, 8])); //  [5,6,-7,8,1,2,-3,4]

function swapHeadAndTail(arr) {
  if (arr.length <= 1) return arr;
  // find middle
  let middle = Math.floor(arr.length / 2);
  // find and assign variables to head and tail
  const head = arr.slice(0, middle);
  const tail = arr.slice(-middle);
  // return [head (middle) tail]
  return arr.length % 2 === 0
    ? tail.concat(head)
    : tail.concat(arr[middle], head);
}

