//  Testing 1-2-3   KYU 7
//  take list of strings and convert to each line perpended by correct number... n:string
// numbering starts at one
//  Parmeters:  given an array of strings.. may be empty
//  Return: n:string
//  Example:
//  console.log(number([]));    // []
//  console.log(number(['a','b','c'])); //  ['1:a',2:b','3:c']

//  PseudoCode:

function number(array) {
  return array.map((e, i) => `${i + 1}: ${e}`);
}

//  Scoring Tests   KYU 7
//  Parmeters:  array... 0=correct. 1=ommitted. 2=incorrect
//  3 values (awarded if correct)   awarded if omitted (may be negative)    deducted if qeong
//  Return: return number of points someone has scored
//  Example:
//  console.log(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1)) // 9 --> 5*2 = 10 1*0=0  1*1=1   10=0-1=9

//  PseudoCode:

//returns the test score
function scoreTest(str, right, omit, wrong) {
  let score = 0;
  str.forEach((e) => {
    if (e === 0) score += right;
    else if (e === 1) score += omit;
    else score -= wrong;
  });
  return score;
}
