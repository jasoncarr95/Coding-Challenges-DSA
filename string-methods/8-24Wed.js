// Ce*s*r*d Strings KYU 7
    // input: string(infected), correct letters
    // output: corrected string

// uncensor("*h*s *s v*ry *tr*ng*", "Tiiesae") // "This is very strange"

// iterate through the infected string, checking each char
    // if char is "*", replace with letter from discoverred letters (in order)
// discovered string input will function as a stack

function uncensor(infected, discovered) {
    // split discovered into arr to use as a stack
    discovered = discovered.split("")
    // infected = infected.split("")


    // iterate through infected and replace *
    let result = infected.split("").map(char => {
        return char === "*" ?  discovered.shift() : char
    }).join("")

    console.log(result)
}


// Find Screen Size KYU 7
    // inputs: width(integer), ratio(string... WDITH:HEIGHT)
    // output: string "WIDTHxHEIGHT"

    // console.log(findScreenHeight(1280, "16:9")) // "1280x720"

    // use the ratio string as a fomula to alter the input width
    // split at indeOf ":" 
    // multiply by first num, divide by second
    // return as a string
    // if fractional truncate

function findScreenHeight(width, ratio) {
    let formula = ratio.split(":").map(el => Number(el))
    let height = (width * formula[1]) / formula[0]
    
    return `${width}x${Math.trunc(height)}`
}

