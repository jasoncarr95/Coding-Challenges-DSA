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

