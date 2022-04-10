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