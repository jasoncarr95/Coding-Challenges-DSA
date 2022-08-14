//  Write Number in Expanded Form   KYU 6
    // input is a number... output is a string in expanded form
    function expandedForm(num) {
        let digits = num.toString().split("").map(e => Number(e))
        console.log(`digits: ${digits}`)
    
        
    }
    /* PSEUDO:
        - check if num <= 10.. if so, return num
        - get all the digits 
        - if digit == 0, skip
        - otherwise, multiply digit by its "place"(i.e. 10s place) 
        - in reversed array 70304 --> [4,0,3,0,7] 4[0] 4-->+= (0*10)  
        3[2] 3*= 10*10
    */
    //ex
    console.log(expandedForm(12))   //  "10 + 2"
    console.log(expandedForm(42))   //  "40 + 2"
    console.log(expandedForm(70304))   //  "70000 + 300 + 4"
    
    