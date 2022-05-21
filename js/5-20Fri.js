//  "VERY EVEN" NUMBERS   KYU 7
//  Parmeters:  always giben a number that is either 0 or positive and an integer
//  Return: return a boolean... single digit thats even=true.. 2 or more digits, the sum of its digits is even.. algorithm down until single digit?
//  Example:   
     console.log(isVeryEvenNumber(88));  // false ... 8+8=16 =>1+6=7, 7 is odd
     console.log(isVeryEvenNumber(222));    // true ... 2+2+2 = 6
     console.log(isVeryEvenNumber(841)); //  true   8+4+1=13.. 1+3=4   
     console.log(isVeryEvenNumber(8));
     
//  PseudoCode:
    // check the number of digits in n ... split,length
            // if 1 digit, check for even (%2)
        // if multiple digits, add digits, check again, repeat

function isVeryEvenNumber(n) {
    if(n<10) return n%2==0;
    else{
        n.toString()
        while(n.length > 1){
            n = n.split('').reduce((a,b) => a+b,0)
        }
        return Number(n) % 2 ==0
    }
}


//  CONSECUTIVE ITEMS   KYU 7
//  Parmeters:  given 2 integers that are in a unique array
//  Return: return boolean... true if a&b are consective, else false
//  Example:
    // console.log(consecutive([1, 3, 5, 7], 3, 7));   // false
    // console.log(consecutive([1, 3, 5, 7], 3, 1));   // true
    
//  PseudoCode:
    // find the indexOf a and indexOf b.... compare if they are 1 away

function consecutive(arr, a, b) {
    return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
}


//  "CENTER YOURSELF", SAYS THE MONK   KYU 7
//  Parmeters:  string, width(integer), fill(character to pad sides with)
//  Return: return a string of length=width... string is centered, with padding characters on each side
    // if padding cant be equal on both sides, make left side 1 character more than right side
    // if string is longer than width, return string 
//  Example:
    //  console.log(center('a',3)); // " a "
    //  console.log(center('abc',10,'_')); // "____abc___"
    //  console.log(center('abcdefg',2));
    
//  PseudoCode:
    // check if string.length > width ... if so, return string
    // otherwise add Math.ceiling(width-length/2) to start

//sike that doesnt work
    // gonna use pad start and padEnd
        // str.padStart(width/2,fill) then .padEnd(width,fill)
        // 

function center (strng, width, fill = ' '){
    if(strng.length > width) return strng;
    else{
        let diff = width-strng.length;
        return `${fill.repeat(Math.ceil(diff/2))}${strng}${fill.repeat(Math.floor(diff/2))}`
    }
}