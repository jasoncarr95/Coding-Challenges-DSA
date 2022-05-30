//  I love you, a little , a lot, passionately ... not at all   KYU 8
//  Parmeters:  given a number of petals, nb, which is >0
//  Return: return the phrashe said
//  Example:
    //  console.log( howMuchILoveYou(3))    // "a lot"
    //  console.log( howMuchILoveYou(492))    // "not at all"
    
//  PseudoCode:
        // create an array of phrases
        // return array at index = nb-1 (for which number element it is)
        // have to loop.. if nb > number of elements, return remainder (nb%num el)

function howMuchILoveYou(nbPetals) {
    const phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    if (nbPetals > phrases.length) {
        nbPetals = nbPetals % phrases.length
    } if (nbPetals % phrases.length === 0) {
        nbPetals = 6
    }
    return phrases[nbPetals-1]
}

//  Narcissitic Numbers   KYU 7
    // NN is a number of length(l) where sun it its digits to power of l is equal to original number
//  Parmeters:  
//  Return:
//  Example:
    //  console.log(isNarcissistic(153));   // true: l=3 1^3+5^3+3^3 == 153 
    //  console.log(isNarcissistic(435));   // false
    
//  PseudoCode:


function isNarcissistic(n) {
    let l = n.toString().length
    
    let digits = n.toString().split('').map(e => Number(e));
    return digits.map(e => e**l).reduce((a,b) => a+b) == n
}


//  How much water do i need?   KYU 8
//  Parmeters:  water, load, clothes
            // machine uses 10% more water fir each single item aboce the load
            //can only handle double load... return too much
            //cant handle less than load
//  Return:
//  Example:
        // load=10, water=5, clothes =14 ===> 5*1.1^(14-10)
        //  console.log(howMuchWater(10,11,20));    // 23.85
        //  console.log(howMuchWater(10,10,2));     // 'Not enough
        
//  PseudoCode:

function howMuchWater(water, load, clothes) {
    if (clothes > (load * 2)) {
        return 'Too much clothes'
    } else if(clothes < load){
        return 'Not enough clothes'
    } else {
        let result = water * (1.1 ** (clothes - load))
        return Number(result.toFixed(2))
    }
}