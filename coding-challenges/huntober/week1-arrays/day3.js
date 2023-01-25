/*  Day 3  Mon. 10.10.22

    - move any entries containing letter 'a' to the front
    - then move any entries with over 3 chars to the back
    - preserve order of things

    PARAM: array of strings
    RETURN: sorted arr of strings

    PSEUDO
        - sort arr
            - if contains "a"
        - sort again
            - if >3 char

    - filter
        - arr1: includes a
        - arr2: length > 3
        - concat arr1, ogArr, arr2


        solution:
            - create filtered Arr of items containing "a" (will be added to front of arr)
            - filter out said items from our "result" arr
            - sort result arr based on if length > 3
                - a.length > 3 (true= 1 false=0) - b.length > 3 (true= 1 false=0)
                    - if both true or both false: 1-1 || 0-0 => 0 (no change)
                    - if a false, b true => 0 - 1 => -1 (sort a before b)
                    - if a true, b false => 1 - 0 => 1 (sort a after b)
            - concat containsA (first values) with rest of values

        better solution??:
            - 
*/

const fancyArrSort = (arr) => {
  const containsA = arr.filter((str) => str.includes("a"));
  let resultArr = arr
    .filter((str) => !containsA.includes(str))
    .sort((a, b) => {
      return (a.length > 3) - (b.length > 3);
    });

  return containsA.concat(resultArr);
  // console.log(`containsA: ${containsA}`)
  // console.log(`resultArr: ${resultArr}`)
};

// const fancyArrSort = (arr) => {
//     let containsA = arr.filter(str = str.includes("a"))

// };

let myArr = ["hi", "hello", "howdy", "hola", "hej", "hallo", "heyyy"];
// ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']

// console.log(myArr);
console.log(fancyArrSort(myArr));
fancyArrSort(myArr);
console.log(myArr);
