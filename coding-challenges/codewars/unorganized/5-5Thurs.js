        //  bingo (or not)      KYU 7
function bingo(a) {
  const bingoWin = [2,9,14,7,15];
  return bingoWin.every(e => a.includes(e)) ? 'WIN' : 'LOSE';
}
// console.log(bingo([1,2,3,4,5,6,7,8,9,10])); //"LOSE"
// console.log(bingo([21,13,2,7,5,14,7,15,9,10])); // "WIN"

    //  FIND THE VOWELS     KYU 7
function vowelIndices(word){
    const vowels = ['a','e','i','o','u','y'];
    let result = [];
    word.toLowerCase().split('').forEach((letter,index) => {
        if(vowels.includes(letter)){
            result.push(index + 1)
        }
    })
    return result
}
// console.log(vowelIndices('apple')); // [1,5]

    //  Complete The Pattern #1     KYU 7
function pattern(n){
    let result = '1';
    for(let i = 2; i<= n; i++){
        result += `\n${i.toString().repeat(i)}`
    }

    return n < 1 ? '' : n==1? '1' : result;
}
// console.log(pattern(5));    //  "1\n22\n333\n4444\n55555"
