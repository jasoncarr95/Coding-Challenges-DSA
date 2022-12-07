// function findOddDigits(n, k) {
//     let oddDigits = '';
//     n.toString().split('').forEach((dig) => {    
//         if(!(parseInt(dig) % 2 == 0)){oddDigits+=(Number(dig))}
//     })
//     return oddDigits.length < k ? 0 : Number(oddDigits.slice(0,k)) || 0;
    
// }

// function giveChange(amount) {
//   let change = [0,0,0,0,0,0]
//   if (amount === 0){return change}
//   else if((amount / 100) > 1){
//         change[5]+=1
//         console.log(change);
//         console.log(amount);
//         return giveChange(amount-100)
//   }else if((amount / 50) > 1){
//     change[4]+=1
//     console.log(change);
//     console.log(amount);
//     return giveChange(amount-50)
// }else if((amount / 20) > 1){
//     change[3]+=1
//     console.log(change);
//     console.log(amount);
//     return giveChange(amount-20)
// }else if((amount / 10) > 1){
//     change[2]+=1
//     console.log(change);
//     console.log(amount);
//     return giveChange(amount-10)
// }else if((amount / 5) > 1){
//     change[1]+=1
//     console.log(change);
//     console.log(amount);
//     return giveChange(amount-5)
// }else if(amount  > 1){
//     change[0]+=1
//     console.log(change);
//     console.log(amount);
//     return giveChange(amount-1)
// }
// return change
// }
// console.log(giveChange(250));

// //console.log( giveChange(365));  //[0,1,1,0,1,3]
// //console.log( giveChange(217));  //[2,1,1,0,0,2]
// //console.log( giveChange(8));    //[3,1,0,0,0]


// function mergeArrays(arr1, arr2) {
//     let result = (arr1.concat(arr2).sort((a,b)=> a-b))
//     return Array.from(new Set(result)) 
// }
// console.log( mergeArrays([1,2,3,4], [5,6,7,8])); //[1,2,3,4,5,6,7,8]
// console.log( mergeArrays([1,3,5,7,9], [10,8,6,4,2])); // [1,2,3,4,5,6,7,8,9,10]

function isAllPossibilities(x){
    let allVals = [];
    for(let i=0; i<= x.length-1; i++){
        allVals.push(i)
    }
    return x.every(num => allVals.includes(num))
}

console.log(isAllPossibilities([0,1,2,3]));     //true
console.log(isAllPossibilities([1,2,3,4]));      //false
