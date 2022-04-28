// function getLargerNumbers(a, b) {
//   let result = []
//     for(let i=0; i<=a.length-1; i++){
//         if(a[i] > b[i]){
//             result.push(a[i])
//         }else{result.push(b[i])}
//   }
//   return result
// }
// let a = [13, 64, 15, 17, 88];
// let b = [23, 14, 53, 17, 80]


function duplicateElements(m, n) {
    if(m.length==0 || n.length==0){return false}
    else return m.some((e,i)=> e==n[i]) 
}
console.log( duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]) );