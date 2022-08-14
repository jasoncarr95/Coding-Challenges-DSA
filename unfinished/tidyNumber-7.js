//  Tidy Number     KYU 7
    /*  tidy number = digits are in non-decreasing order
        input: always a positive num
        output: boolean

    */
        console.log(tidyNumber(9672)) //  false 
        console.log(tidyNumber(12)) //  true
     
        
     function tidyNumber(n){
       // get array digits of the number.. technically check if <10, if 1 dig???
       let sortedDigits = n.toString().split("").map(e => Number(e)).sort((a,b) => b-a)
     
     
       return Number(sortedDigits.join("") 
     }