//  COUNT THE DIGIT KYU 7
    /*  input: n: an integer, >=0   and d:integer 0<=d<=9

        -square all numbers k    0<=k<=n between 0 and n
        - count the numbers of digits d used in the writing of all the k**2
        
        output: the count (integer)
    */
        console.log(nbDig(10,1))     // 4--->k*k: 0,1,4,9,16,25,36,49,64,81,100    digit1: (1,16,81,100) count is 4
        console.log(nbDig(5750,0))   // 4700
        console.log(nbDig(11011,2))  // 9481
        
        /* PSEUDO
        - bruteforce: 
             - get squares
                 -set a variable to contain an array of all the squares from 0-n(inclusive)
                     - for loop 
             - get digits 
                 - map arrSquares so each number is a string..
             - get count
                 - set count variable
                 - loop thru arr... if element contains d, add to count
             - return count
        */
     function nbDig(n, d) {
         //  get squares
         let squares = []
         for(let i = 0; i<= n; i++) squares.push(i**2)
         console.log(squares);
         squares = squares.map(e => String(e))
         console.log(squares);
         
         //  get digits
         let digits = squares.map(e => e.split(''))
         console.log(digits);
         
         // try a forEach???
     
         //  get count
         let count = 0
         for(const num of squares){
             if(num.includes(d.toString())) count++
         }
         return count
     }