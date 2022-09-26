// Discover The Original Price KYU 7

/*
input: discountedPrice, discount%
output: OG price: number in money form... x.xx
*/

function discoverOriginalPrice(discountedPrice, salePercentage) {
    salePercentage /= 100;
    return Number((discountedPrice / (1 - salePercentage)).toFixed(2))
}

console.log(discoverOriginalPrice(75, 25)); // 100
console.log(discoverOriginalPrice(75.75, 25)); // 101

// 75 = OG - (OG * .25)

/*
OG * %disc = disc amount
OG - DiscAmount = sales price

S = P - PD

75 = P - P*0.25

75 = P * 0.75
*/
