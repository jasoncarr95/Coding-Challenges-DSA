//   Drone Fly by KYU 7

/*
    inputs: lamps(string), drone(string)
    - lamps = a row of lamps all off (x)
    when on -> o
    - drone flight ===T


    OUTPUT: new string 'ooox
    PSUEDO:
    - always starts at beginner, and his spot is on.
    - get length of drone, replace that portion of the string with ons
*/

function flyBy(lamps, drone) {
    return lamps
        .split("")
        .map((item, index) => {
            return index < drone.length ? "o" : item;
        })
        .join("");
}

console.log(flyBy("xxxxxxxxx", "==T")); // "oooooox"
