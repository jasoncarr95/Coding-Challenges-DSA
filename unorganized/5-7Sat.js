//  REMOVING ELEMENTS   KYU 9
function removeEveryOther(arr){
    return arr.filter((e,i) => i%2==0)
}
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //[1,3,5,7,9]

//  THINKFUL - LOGIC DRILLS: TRAFFIC LIGHT  KYU 8
function updateLight(current) {
    switch (current) {
        case 'green':
            return 'yellow'
            break;
    
        case 'yellow':
            return 'red'
            break;
        case 'red':
            return 'green'
            break;
    }
}

//  JADEN CASING STRINGS       KYU 7
String.prototype.toJadenCase = function (str) {
   return this.split(' ').map(word => word[0].toUpperCase()+word.slice(1)).join(' ')
};
let str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase()); //  "How Can Mirrors Be Real If Our Eyes Aren't Real"

   
