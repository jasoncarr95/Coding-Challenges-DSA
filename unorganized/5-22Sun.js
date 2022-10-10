//  Vowel Count   KYU 7
//  Parmeters:  input is a string made up of only lowercase letters and/or spaces
//  Return: goal is to return the number of vowels in the string (a,e,i,o,u)
//  Example:
    // console.log(getCount('abracadabra'));   // 5
    // console.log(getCount('hello friends'));    // 4
    
//  PseudoCode:
    //split string into an array
    //set a count variable = 0 initially
    // set a const arr of vowels
    // search given strin(array) for if each element is included in vowels arr.. if so, inc count by 1  then return the count

function getCount(str) {
  let vowelsCount = 0;
  const vowels = ['a','e','i','o','u'];
  str=str.split('');
  for(let i = 0; i<str.length; i++){
      if(vowels.includes(str[i])){
          vowelsCount++
      }
  }
  return vowelsCount;
}

//  IS THE STRING UPPERCASE   KYU 8
String.prototype.isUpperCase = function() {
    return this.toUpperCase() == this
}
//  Example:
// console.log("c".isUpperCase());
// console.log("C".isUpperCase());


//  Barista Problem   KYU 7
//  Parmeters:  given an array of integers .... array may empty
//  Return: return an integer (total time waited by all customers)
//  Example:
    console.log(barista([5,4,3,2,1]));  // 22
    console.log(barista([3,2,5,10,9])); //85
        // 2 ; 7(2+2+3)
//  PseudoCode:
    // sort array smallest to largest
    // use reduce (customers wait time is equal to: previous customer's wait time +2 + customer order time)

//clean 2 min between each customer
    // 4,3,2    //22        2=>2; 3=>(2+2+3)=7;4=> (2+2+3+2+4) = 13
                            // total = 13+7+2 ===22

function barista(coffees){
    if(!coffees) return 0;
    else{
        coffees.sort((a,b) => a-b);
    let waitTimes = [];
    waitTimes[0]=coffees[0]
    for(let i=1; i<coffees.length; i++){
        waitTimes[i] = coffees[i]+ waitTimes[i-1] + 2;
    }
    if(typeof coffees[0] == "number") console.log('yas');
    
    return waitTimes.reduce((a,b) => a+b,0)
    }
}

// function barista(coffees){
//     coffees.sort((a,b)=> a-b);
//       let totalTime = coffees[0];
//       for(let i=1; i<= coffees.length-1; i++){
//           totalTime+=coffees[i]+2
//       }
//       return totalTime
//   }