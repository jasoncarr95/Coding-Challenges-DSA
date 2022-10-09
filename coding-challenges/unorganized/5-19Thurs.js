//  GRASSHOPPER - CHECK FOR FACTOR   KYU 8
//  Parmeters: given 2 numbers: base(non-negative number.. so it can be 0?), factor(+)
//  Return: return a boolean (t or f)
//  Example:
    // console.log(checkForFactor(10,2));  // true
    // console.log(checkForFactor(9,2));   // false


//  PseudoCode:
    // check if base divided by the factor results in no remainder (%) .. return t or f

function checkForFactor (base, factor) {
  return base % factor === 0
}

//  CANDY PROBLEM   KYU 7
//  Parmeters:  array of numbers .. can be empty, or filled with many kids. wont have any negative numbers (cant have negative candy, unlike credit card debt lulz)
//  Return: return -1 if array is empty, or only has 1 value. otherwise, return total number of candies have to give to them kids
//  Example:
    //  console.log(candies([5,8,6,4]));    // 9 <= 3+2+4
    //  console.log(candies([1,2,4,6]));    // 11 <= 2+4+5
    //  console.log(candies([]));           // -1   (empty)

//  PseudoCode:
    // check if array length is <=1 ... if so just return -1
    // find the highest amount of candy a kid has  
            //Math.max with spread syntax
    //  subtract maxCandy from the amount of candy all other kids have  
            // map (maxCandy-amount of candy each kid has)
    //  add all of those differences, return that total
            // reduce that mapped difference
function candies(kids){
    let maxCandy = Math.max(...kids);
    if(kids.length <= 1){
        return -1
    }else {
        return kids.map(candy => maxCandy-candy).reduce((a,b) => a+b)
    }
}
