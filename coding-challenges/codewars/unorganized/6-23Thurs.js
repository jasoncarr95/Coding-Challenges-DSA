//  Larger sum or product   KYU 7
//  Parmeters: given an array of numbers, and another number (n)
// array will never be empty. n will always be < length
//  Return: sum/prodtuct/same
//  Example:
//  console.log(sumOrProduct([1,2,3,4,5,6,7,8,9,10], 4))    // sum = 34 product=10  --> sum

//  PseudoCode:
// find sum sum of n largest numbers of the array
// find produict of n smallest numbers
// compare

function sumOrProduct(array, n) {
  array.sort((a, b) => a - b);
  const sumLargest = array.slice(-n).reduce((a, b) => a + b);
  const prodSmallest = array.slice(0, n).reduce((a, b) => a * b);
  return sumLargest === prodSmallest
    ? "same"
    : sumLargest > prodSmallest
    ? "sum"
    : "product";
}

//  What's your running pace   KYU 6
//  Parmeters:  distance(a float... kilometers) time(string.. minutes:seconds.. i.e 25min=25:00..**NO HOURS)
//  Return: return pace (km/min) inminres:seconds... floor num of seconds AS A STRING
//  Example:
//  console.log(runningPace(5, "25:00"));   // "5:00"
//  console.log(runningPace(2.51, "10:43")); // 4:16

//  PseudoCode:
// divide as seconds and convert back
// split the string(time) by the colon... multiply min*60 and add to after colon..total seconds
//  divide total seconds by distance --> seconds per km
//  total seconds % 60 = seconds.... total seconds/60.floor = min

function runningPace(distance, time) {
  let min = Number(time.substring(0, time.indexOf(":")));
  let sec = Number(time.substring(time.indexOf(":") + 1, time.length));
  paceSec = Math.floor((min * 60 + sec) / distance);

  min = Math.floor(paceSec / 60).toString();
  sec = (paceSec % 60).toString();
  if (sec < 10) sec = "0" + sec;

  return `${min}:${sec}`;
}

function removeUrlAnchor(url) {
  if (url.includes("#")) {
    return url.substring(0, url.indexOf("#"));
  } else return url;
}
// console.log(removeUrlAnchor("www.codewars.com#about"))
// console.log(removeUrlAnchor("www.codewars.com/about"))
console.log(removeUrlAnchor("www.codewars.com#about"));
console.log(removeUrlAnchor("www.codewars.com/about"));
