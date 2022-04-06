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


// wed 3-23...after 1q: 3.9% to kyu5... 80 completed kata, 129 honor... -> complete 1 kyu6: 9.2%, 88kata (+8kata, +5.3%)
                //have 13.77 out of 153 kata for next level (139 left)

    // function highAndLow(numbers){
    //     let arr = numbers.split(' ');
    //     let high = Math.max(...arr);
    //     let low = Math.min(...arr);
        
    //     return `${high} ${low}`
    // }
    // console.log(highAndLow('1 2 -3 4 5')); 
    //    alternatively
    // function highAndLow(numbers){
    //     numbers = numbers.split(' ');
    
        
    //     return `${Math.max(...numbers)} ${Math.min(...numbers)}`
    //   }
    //   console.log(highAndLow('1 2 -3 4 5')); 
  

  //Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
    // function createPhoneNumber(numbers){
    //     numbers = numbers.join('')
    //     return `(${numbers.slice(0,3)}) ${numbers.slice(3,-4)}-${numbers.slice(-4)}`    
    // }
    // console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); 
  


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





//**** FRIDAY 3/25  - start: kyu6: 12.4%, 92kata (43 completed), 143 honor    -**TOP 100 OF CLAN= 517honor (KYU 5)

  //Sum of two lowest positive integers
    // Sort Array.. then add 2 first indexes and return the sum
    // function sumTwoSmallestNumbers(numbers){
    //   numbers.sort((a,b) => a-b)               
    //   return numbers[0]+numbers[1]
    // }
    //     console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));
    //     console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
      
    //CONVERT NUMBER TO REVERSED ARRAY OF DIGITS
      // .split() to make an array, MAP A NEW ARRAY OF NUMBERS then reverser()
      // function digitize(n) {
      //    let arr = n.toString().split('')
      //    return arr.map( x => parseInt(x)).reverse()
      // }
      // console.log(digitize(348587));
      // console.log(digitize(0));
    
    //You only need one
    
    //array plus array
      // function arrayPlusArray(arr1, arr2) {
      //   return arr1.concat(arr2).reduce( (a,b) => a + b )
      // }
      // console.log( arrayPlusArray([1, 2, 3], [4, 5, 6]) );
      // console.log( arrayPlusArray([-1, -2, -3], [-4, -5, -6]) );
      // console.log( arrayPlusArray([0, 0, 0], [4, 5, 6]) );
      // console.log( arrayPlusArray([100, 200, 300], [400, 500, 600]) );

  // sum arrays
    // function sum (numbers) {
    // return  numbers.length==0? 0 :  numbers.reduce( (a,b) =>a+b );
    // };
    // console.log( sum([]) );  //0
    // console.log( sum([1, 5.2, 4, 0, -1]) ); //9.2
  
  //Jaden Casing Strings
      // String.prototype.toJadenCase = function () {
      //   words = this.split(' ').map( (word) =>  word[0].toUpperCase() )
        
      // };
      // let str = 'How can mirrors be real if our eyes aren\'t real'
      // console.log(str.toJadenCase());    //"How Can Mirrors Be Real If Our Eyes Aren't Real"



// **  SAT 3.26.22

  //odd or even?
      // function oddOrEven(array) {
      //   let arraySum = array.reduce( (a,b) => a+b, 0 ) 
        
      //   if(arraySum % 2 == 0){
      //     return 'even'
      //   }else {return 'odd'}
      // }

  //dont give me 5!
  // make array from start->end... Count+=1 for each index... convert each index to a string .. search the indexes for  5's... count

      // function dontGiveMeFive(start, end){
      //   let count = 0
      //   let arr = [];

      //   for(i=start; i <= end; i++){
      //     arr.push(i+'');
      //     count+=1
      //   }
      //   let newArr = arr.filter( x => x.includes('5') )

      //   return count-=newArr.length
        
      // }
      // dontGiveMeFive(1,9)
      // dontGiveMeFive(4,17)
      
  //SORT ARRAY BY STRING LENGTH
      // function sortByLength (array) {
      //   return array.sort( (a,b) => a.length - b.length)
      // };
      // console.log(sortByLength( ["Telescopes", "Glasses", "Eyes", "Monocles"] ));

  //maximum multiple
    // for loop between 1 and <=bound... check if divisible by divisor... add all those to an array, return the largest number in the array.. ez pz (last element/index of length-1)
        // function maxMultiple(divisor, bound){        
        //   let arr = [];
        //   for(let n =1; n <= bound; n++){
        //     if (n % divisor == 0){
        //       arr.push(n)
        //     }
        //   }
        //   return arr[arr.length-1]
        // }
        
          //way easier!!
            // function maxMultiple(divisor, bound){
            //   return bound-bound%divisor
            // } 

        // console.log(maxMultiple(2,7 ));
        // console.log(maxMultiple(10,50));

//NEEDLE IN A HAY STACK**
    // function findNeedle(haystack) {
    //  let index = haystack.indexOf("needle")
    //  return `found the needle at position ${index}`
    // }

    // console.log(findNeedle( ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false ] ));
    // console.log(findNeedle( [ '283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'] ));


//SUNDAY 3/27/22
// convert num to array of digits .....have to convert it to string then split('')
//
// function squareDigits(num){
//   //CONVERT NUM  TO AN ARRAY OF THE DIGITS... HAS TO BE A STRING TO USE SPLIT('')
//   let nums = num.toString().split('')

//   //SQUARE EACH DIGIT WITH A MAP
//   //CONCAT ALL THE DIGITS TOGETHER AS ONE NUMBER JOIN('') AND RETURN AS A NUMBER  
//   return  Number(nums.map(x => x**2 ).join(''))
  
// }


//  MONDAY 3/28
  // FAKE BINARY 
    // function fakeBin(x){
    //   //convert string of digits into an array of digits (number)
    //   let digits = x.toString().split('');

    //   return digits.map( (i) => {
    //     if (i < 5){return  i=0}
    //     else return i=1;
    //   }).join('')
      
    // }
    // console.log(fakeBin(45385593107843568));



// ** TUESDAY 3/29/2022
    //quarter of the year


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