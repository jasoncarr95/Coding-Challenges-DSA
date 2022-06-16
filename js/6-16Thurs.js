//  Two Fighters, One Winner   KYU 7
//  Parmeters:  given 2 objects (the fighters) and the first attacker 
                // i.e.   fighter("name", health, damagePerAttack), fighter2, first attacker
//  Return: string... the name of winning fighter
//  Example:
        

//  PseudoCode:
        //  take turns dmagaing health starting w/ first attacker
        // if one of their healths is <= 0, return fighter.toString()

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}
// function declareWinner(fighter1, fighter2, firstAttacker) {

//     if(fighter1.toString() === firstAttacker){
//         console.log(fighter2.health -= fighter1.damagePerAttack);
//         console.log(fighter1.health -= fighter2.damagePerAttack)
//     } else{
//         console.log(fighter1.health -= fighter2.damagePerAttack);
//         console.log(fighter2.health-=fighter1.damagePerAttack)
//     }
//     return fighter1.health <= 0 ? fighter2.toString() : fighter2.health <= 0 ? fighter1.toString() : declareWinner(fighter1,fighter2,firstAttacker)
// }
        //  ** CHEATED***
function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {
    fighter2.health -= fighter1.damagePerAttack;
    fighter1.health -= fighter2.damagePerAttack;
  }
  
  if (fighter1.health <= 0 && fighter2.health <= 0)
    return firstAttacker;
  else if (fighter1.health <= 0)
    return fighter2.name;
  else
    return fighter1.name;
}

// declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")    // "Lew"
// declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry") // "Harry"


//  Save For Retirement   KYU 7
//  Parmeters:  input: fixed amount deposited each year, min retirement target
        // calculate how many years to reach min target @ 1,2,3,4,5,6% interest rates
//  Return:
        // return an object where keys are strings(int rate) and value is an int (num years)
//  Example:
        // console.log(calculateRetirement(100,300))   //  {'1': 3, '2': 3, '3': 3, '4': 3, '5': 3, '6': 3}
        // console.log(calculateRetirement(100,700))   //  {'1': 7, '2': 7, '3': 7, '4': 7, '5': 6, '6': 6}
        
//  PseudoCode:
        // Interest = P * R * N
        // Y1 = deposit + (deposit * interestRate ) 

// function calculateRetirement(deposit, targetBalance) {
//     let totalEndYear = deposit
//     for(let i = 1; i <= 6; i++){
//          totalEndYear+= deposit + (deposit * (1 + i/100))
//          console.log(`${i} is:{i}... totalEndYear is ${totalEndYear}`);
                 
//     }
// }


//  Is it a palindrome? KYU 8
function isPalindrome(x) {
  x = x.toLowerCase()
  return x === x.split('').reverse().join('')
}


//  Palindromes Here and There   KYU 7
//  Parmeters:  given an array of numbers 
//  Return: return an array of 1s (palindrom #s) and 0's (non palis)
//  Example:
        console.log(convertPalindromes([101,2,85,33,14014]))    //  [1,1,0,1,0]
        
//  PseudoCode:
        // function that tests if number is a palindrome
        // then map the array? (maybe for loop)... test for each function and replace w 1 or 0
function convertPalindromes(numbers) {
    function isPalNum(num){
        return String(num) === num.toString().split('').reverse().join('')
    }

    return numbers.map(e => { return isPalNum(e) ? 1 : 0 })
};