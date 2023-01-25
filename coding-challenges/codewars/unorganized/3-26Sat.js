//odd or even?
function oddOrEven(array) {
  let arraySum = array.reduce((a, b) => a + b, 0);

  if (arraySum % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

//dont give me 5!
// make array from start->end... Count+=1 for each index... convert each index to a string .. search the indexes for  5's... count

function dontGiveMeFive(start, end) {
  let count = 0;
  let arr = [];

  for (i = start; i <= end; i++) {
    arr.push(i + "");
    count += 1;
  }
  let newArr = arr.filter((x) => x.includes("5"));

  return (count -= newArr.length);
}
dontGiveMeFive(1, 9);
dontGiveMeFive(4, 17);

//SORT ARRAY BY STRING LENGTH
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));

//maximum multiple
// for loop between 1 and <=bound... check if divisible by divisor... add all those to an array, return the largest number in the array.. ez pz (last element/index of length-1)
function maxMultiple(divisor, bound) {
  let arr = [];
  for (let n = 1; n <= bound; n++) {
    if (n % divisor == 0) {
      arr.push(n);
    }
  }
  return arr[arr.length - 1];
}

//way easier!!
function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}

console.log(maxMultiple(2, 7));
console.log(maxMultiple(10, 50));

//NEEDLE IN A HAY STACK**
function findNeedle(haystack) {
  let index = haystack.indexOf("needle");
  return `found the needle at position ${index}`;
}

console.log(
  findNeedle([
    "3",
    "123124234",
    undefined,
    "needle",
    "world",
    "hay",
    2,
    "3",
    true,
    false,
  ])
);
console.log(
  findNeedle([
    "283497238987234",
    "a dog",
    "a cat",
    "some random junk",
    "a piece of hay",
    "needle",
    "something somebody lost a while ago",
  ])
);
