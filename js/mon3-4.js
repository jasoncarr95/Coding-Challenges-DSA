// sum of minimums
function sumOfMinimums(arr) {
    let sum = 0;
    arr.forEach(nArr => sum += Math.min(...nArr))
    return sum
  }

// SMALL ENNOUGH? -BEGINNINER
function smallEnough(a, limit){
    return a.every((value)=> value<= limit)
  }