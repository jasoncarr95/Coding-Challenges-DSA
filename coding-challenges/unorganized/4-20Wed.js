//    ***    ??????????????????????     ***
// function barista(coffees){
//     coffees.sort((a,b)=> a-b);
//     let totalTime = coffees[0];
//     for(let i=1; i<= coffees.length-1; i++){
//         totalTime+=(coffees[i]+2)
//     }
//     return totalTime
//   }
// console.log(barista[2,10,5,3,9]);    //85
// console.log(barista[4,3,2]);    //22
// console.log(barista[25,5]);    //32


 

// function solve(s){
//     let upper=0,lower=0,number=0,special=0;
//     s = s.split('');
//     s.forEach(char => {
//         if (/[A-Z]/.test(char)){
//             upper++;
//         }else if (/[a-z]/.test(char)){
//             lower++;
//         }else if (/[0-9]/.test(char)){
//             number++
//         }else{
//             special ++}
//     });
//     let result = [upper,lower,number,special];
//     return result
//   }
//   console.log(solve("Codewars@codewars123.com"));


// function unusedDigits() {
//     const digits = [0,1,2,3,4,5,6,7,8,9];
    
//     let used= Array.from(arguments).join('').split('').map(i => parseInt(i));
//     console.log(used); 
//     let unUsed='';
//     digits.forEach(dig => 
//         {if(!used.includes(dig)) {
//             unUsed+=dig
//         } })
//     return unUsed
//   }

// console.log(unusedDigits(12,34,56,78))  //09