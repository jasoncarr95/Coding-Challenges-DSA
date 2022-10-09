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


