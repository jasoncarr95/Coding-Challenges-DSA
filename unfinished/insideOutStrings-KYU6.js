//  Inside Out Strings  KYU 6

/*
input: string
output: string

move internal letters out and external letters inside

-split arr into words
- every word split into 2 halves 
vol v ano L=7 middle =3.5 I=3
ta xi   L = 4 middle =2 I= 
*/

function insideOut(x) {
    let words = x.split(" ");

    for (const word in words) {
        let middle = Math.floor(word.length / 2);
        let firstHalf = word.slice(0,middle)
        return firstHalf
    }
}

console.log(insideOut("taxi")); // "atix"
