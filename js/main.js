document.querySelector('#date').innerHTML=Date()


// const humanYearsCatYearsDogYears = function(humanYears) {
//     let catYears = 0;
//     let dogYears = 0;
    
//     for(i=1;i<=humanYears;i++){
//       if (i==1){
//         catYears += 15;
//         dogYears += 15;
//       }else if (i==2){
//         catYears += 9;
//         dogYears += 9;
//       }else {
//         catYears += 4;
//         dogYears += 5;
//       }
//     }
//     return [humanYears,catYears,dogYears];
// }
// console.log(humanYearsCatYearsDogYears(3)); 

// function multiTable(number) {
    
//     for(i=1; i<=10; i++){
//     console.log(`${i} * ${number} = ${i*number}`);
//     }
//   }
//   multiTable(5)

// let disArrayExampleWithARandomLongName = ['word','idk','filler','sup']
// console.log(disArrayExampleWithARandomLongName[2]); 




















//  need to use let in a for loop?

// for (i=0; i<=10; i++){
//   console.log(i);
// }
// for(let i=0; i<=10; i++){
//   console.log(i);
// }


// function meeting(x){
//   return x.find( room => room == "0" );
   
//  }
//  console.log(meeting(['X', 'O', 'X'])); //1
//  console.log(meeting(['0','X','X','X','X'])); //O
//  console.log(meeting(['X', 'X', 'X'])); // 'NONE AVAILABLE'

// function maxDiff(list) {
//   let min = Math.min(...list)
//   let max = Math.max(...list)
  
//   return list.length <=1 ?  0 :  max - min;
// };


// maxDiff([0, 1, 2, 3, 4, 5, 6]) //6
// maxDiff([-0, 1, 2, -3, 4, 5, -6]) //11);
// maxDiff([0, 1, 2, 3, 4, 5, 16]) // 16

// function findShort(s){
//   lengths = s.split(' ').sort( (a,b) => a.length-b.length );
  
//   return lengths[0].length
 
// }
// console.log(findShort("bitcoin take over the world maybe who knows perhaps")); //3
// console.log( findShort("Let's travel abroad shall we")); //2



// const Calculator = {
//   add(x,y){
//     return x+y
//   },
//   subtract(x,y){
//     return x-y
//   },
//   multiply(x,y){
//     return x*y
//   },
//   divide(x,y){
//     return y!= 0 ? x/y: false;
//   }, 
// };