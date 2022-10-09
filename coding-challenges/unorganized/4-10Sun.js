// BETTER THAN CLASS AVERAGE?
    function betterThanAverage(classPoints, yourPoints) {
        let classAverage = classPoints.reduce( (a,b)=> a+b )/classPoints.length;
        return yourPoints > classAverage ? true : false
    }


// SUM OF ALL ARGUMENT 
    //MY SOLUTION
    function sum(...numbers) {
        return numbers.reduce( (a,b)=> a+b)
    }
    //OTHER BEST PRACTICE 
    function sum() {
        var total = 0;
        for(var i in arguments){
          total += arguments[i];
        }
        return total;
      }

// SUM OF NUMEROURS ARGUMENTS
      //MY SOLUTION
      function findSum(){
        let args = Array.from(arguments)
        
        if(args.length === 0){return 0}
        else {
            return args.every(num => num >= 0) ? args.reduce( (a,b) => a+b) : -1;
            
        }
      }
      //BETTER PRACTICE
    function findSum(...nums) {
        return nums.reduce((a, b) => a < 0 || b < 0 ? - 1 : a + b, 0)
      }

      console.log(findSum(1,3,5) ); //9
      console.log(findSum(0,3,9,2) ); //14
      console.log(findSum( 1,-2,4) ); //-1
      console.log(findSum() );