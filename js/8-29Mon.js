// Move 10  KYU 7
// move every letter in give string 10 places forward in alphabet
// if goes past z, start again at a
// does case matter? input will be str length>0

/*  PSEUDO
    - split the string into an arr of char
    - get charCode of each char
    - add 10 to charcode, if result is past z, loop back to a
    - return as a string
charCodes (lowercase) = 97("a") through 122("z")
*/

// console.log(moveTen("testcase")); //  "docdmkco"
// console.log(moveTen("codewards")); //  "mynogkbc"

function moveTen(s) {
    let result = s.split("").map((e) => {
        let newCharCode = e.charCodeAt() + 10;

        if (newCharCode <= 122) {
            return String.fromCharCode(newCharCode);
        } else return String.fromCharCode((newCharCode % 122) + 96);
    });
    return result.join("");
}

// Holiday III - Fire on the boat   KYU 7
// input: string
// if any word is "Fire" change it into "~~"
// output: string

// console.log(fireFight("Mast Deck Engine Water Fire"))   // Mast Deck Engine Water ~~
// console.log(fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"))
function fireFight(s) {
    if (!s.includes("Fire")) return s;

    return s
        .split(" ")
        .map((word) => {
            return word === "Fire" ? "~~" : word;
        })
        .join(" ");
}


