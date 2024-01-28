//  Alphabet war    KYU 7
// input: string of only small letters
// return string based on who wins fight

// LEFT: w-4, p-3, b-2, s-1
// RIGHT: m-4, q-3, d-2, z-1

/* PSUDEO
        - check string for if it contains letters in left or right.
        - have 2 variable (sums) that accumulate when letter in l/r
        - compare l/r, return 

    */
function alphabetWar(fight) {
  const left = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };
  const right = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };
  let leftSum = 0;
  let rightSum = 0;

  //fight.split('')

  for (const letter in fight) {
    if (fight[left[letter]]) leftSum += left[letter];
    console.log(left[letter]);
  }

  return "Let's fight again!";
}

// console.log(alphabetWar("wwwwwwz"))    // left
// console.log(alphabetWar("zzzzs"))  // Right
// console.log(alphabetWar("zdqmwpbs"))    // Let's fight again!

// Thinkful - String Drills: Repeater level 2   KYU 7

function repeater(string, n) {
  return `"${string}" repeated ${n} times is: "${string.repeat(n)}"`;
}
//console.log(repeater('Wub', 6)) //  '"WuB" repeated 6 times is" ..

//  Predict your age!   KYU 7
// input: list of ages (not an array, mad arguments)
// multiply each num by itself, add them all together, sq rt result, divide by 2

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let ages = Array.from(arguments);

  return Math.floor(
    Math.sqrt(ages.map((e) => e * e).reduce((a, b) => a + b)) / 2,
  );
}

// console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45)) //86

//  Complimentary DNA   KYU 7
// A --> T, C --> G

function DNAStrand(dna) {
  const complimentMap = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };
  return dna
    .split("")
    .map((e) => complimentMap[e])
    .join("");
}

console.log(DNAStrand("ATTGC"));
