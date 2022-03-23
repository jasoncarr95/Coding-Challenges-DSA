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





//****THURSDAY 3.24 - start: kyu6: 9.2%, 88kata, 139 honor    -**TOP 100 OF CLAN= 507honor

  //Descending Order
  //   function descendingOrder(n){            //INPUT (145263)
  //     let arr = (n.toString()).split('')    //TURN INPUT INTO A STRING... TURN STRING INTO ARRAY OF EACH NUMBER     => ['1','4','5,'...]
  //     arr = (arr.sort( (a,b) => b-a ))      //SORT ARRAY OF NUMBERS FROM HIGH TO LOW                                => ['6','5','4,'3','2','1']
  //     return Number(arr.join(''));          // RETURN THE STRING AS A NUMBER JOINED TOGETHER W/ NO COMMAS           => 654321
  //   }
  // console.log(descendingOrder(145263));

//List Filtering
//  ????    ** I FORFEITED
    // function filter_list(l) {
    //   return l.filter(function(v) {return typeof v == 'number'})
    // }

    //or
      // function filter_list(l) {
      //   return l.filter(v => typeof v == "number")
      // }
      


//REVERSED STRING
    // function solution(str){
    //   return  str.split('').reverse().join('')    
    // }
    // console.log(solution('world'));
    // console.log(solution('WoRd')); 











// ** WED. 3.30.2022

// Return an array
  // function fizzbuzz(n)
  // {
  //   let arr = [];
  //   for(let i=1; i <= n; i++){
  //     i % 3 == 0 && i % 5 == 0 ? arr.push('fizzbuzz') : i % 3 == 0 ? arr.push('fizz') : i % 5 == 0 ? arr.push('buzz') : arr.push(i);
  //   }
  //   return arr
  // }
  // console.log(fizzbuzz(25));

//sorted? yes? no? how?
// function isSortedAndHow(array) {
// return array === array.sort( (a,b) => a-b) ? 'yes, ascending' : array === array.sort( (a,b) => b-a) ? 'yes, descending' : 'no'
// }

// function isSortedAndHow(array) {
//   let ascending = array.slice().sort( (a,b) => a-b );
//   let descending = array.slice().sort( (a,b) => b-a);

//   console.log(array);
//   console.log(ascending);
//   console.log(descending);

//   console.log(array == descending ? 'yes' : 'no')
// }
// isSortedAndHow( [1,2])


// function isSortedAndHow(array) {
//   let ascending = array.slice().sort( (a,b) => a-b );
//   let descending = array.slice().sort( (a,b) => b-a);


//   return array.toString() == ascending.toString() ? 'yes, ascending' : array.toString() == descending.toString() ? 'yes, descending' : 'no' ;
// }


// console.log(isSortedAndHow(([1, 2])  )); //'yes, ascending'
// console.log(isSortedAndHow( [15, 7, 3, -8]) ) // 'yes, descending'
// console.log(isSortedAndHow( [4,2,30] ))   //'no'



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