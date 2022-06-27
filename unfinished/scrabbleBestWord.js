//  Scrabble Best Word   KYU 6
            //  calculate best possible value
            //  return index of the shortest word with highest score... if length&score are same, return first index
//  Parmeters:  points=array of integers representing each letter from A-Z
            //  words= an array of strings, uppercase

//  Example:
let  points = [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10]
let simpleWords = ["WHO","IS","THE","BEST","OF","US"]
console.log(getBestWord(points,simpleWords));   //  0
// console.log(getBestWord(points,["JGPCWVWFW","JXHNKBJJG"])); //  0
// console.log(getBestWord(points,[["NOQ","TXAY","S","OM","ESFT","CJUKQ","QL","QO","ASTK","Y"]])); // 5



//  PseudoCode:
    /*  1. need score for each word
            - each word --> an array of its letters
            - letter mapped to 'points' array based on index && charcode
            - reduce lettersArr to a score for each word
        2. check if highest score appears more than once
            - if so compare for lenghts of words at that score
            - if multiple w same length and score, index of will default return first    
        3. find originalWords.indexOf (best word)
    */
function getBestWord(points,words){
function score(points,word){
    //  get an array of the position of each letter in alphabet for input word... i.e "abcdz"--> [0,1,2,3,25]
    let letterPositionArr = word.split('').map(e => e.toLowerCase().charCodeAt()-97)
        //  console.log(letterPositionArr);
    //  map letter position to the score of each letter (points array)  .. i.e a=0 --> points[a]
    let letterScoreArr = letterPositionArr.map(e  => Number(points[e]))
        //  console.log(letterScoreArr);
    //  return the score of the word
    return letterScoreArr.reduce((a,b) => a+b, 0)
}

let scores = []

return score(points,words[0])

//Return the shortest word realizing the best score

}

// points = [1,2,3,4]       "abcd" = [1,2,3,4]

// function score(points,word){
//     //  get an array of the position of each letter in alphabet for input word... i.e "abcdz"--> [0,1,2,3,25]
//     let letterPositionArr = word.split('').map(e => e.charCodeAt()-97)
//           console.log(letterPositionArr);
//     //  map letter position to the score of each letter (points array)  .. i.e a=0 --> points[a]
//     let letterScoreArr = letterPositionArr.map(e  => points[e])
//           console.log(letterScoreArr);
//     //  return the score of the word
//     return letterScoreArr.reduce((a,b) => a+b, 0)
// }
