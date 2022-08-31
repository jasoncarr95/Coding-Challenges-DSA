// Multiplication table for number  KYU 8
function multiTable(number) {
    let result = ""
    for (i = 1; i <= 10; i++) {
        result+= `${i} * ${number} = ${i * number}\n`;
    }
    return result.slice(0,-1)
}

// Alan Partridge II - Apple Turnover   KYU 8
function apple(x){
    return (Number(x) **2) > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
}