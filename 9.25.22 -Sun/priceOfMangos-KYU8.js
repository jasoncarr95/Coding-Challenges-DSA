// Price of mangos KYU 8
    /*
    3 for 2 offer
    input: quanity, price
    */
   
function mango(quantity, price) {
    let free = Math.floor(quantity / 3)
    return (quantity - free) * price
}

console.log(mango(3,3)) //  6 -- 2 mangos for 3 (1free)
console.log(mango(9,5)) //  30 -- 6 mangos for 5 (3free)
