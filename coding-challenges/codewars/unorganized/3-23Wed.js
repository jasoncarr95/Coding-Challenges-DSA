//wed 3-23...after 1q: 3.9% to kyu5... 80 completed kata, 129 honor... -> complete 1 kyu6: 9.2%, 88kata (+8kata, +5.3%)have 13.77 out of 153 kata for next level (139 left)

    function highAndLow(numbers){
        let arr = numbers.split(' ');
        let high = Math.max(...arr);
        let low = Math.min(...arr);
        
        return `${high} ${low}`
    }
    console.log(highAndLow('1 2 -3 4 5')); 
       alternatively
    function highAndLow(numbers){
        numbers = numbers.split(' ');
    
        
        return `${Math.max(...numbers)} ${Math.min(...numbers)}`
      }
      console.log(highAndLow('1 2 -3 4 5')); 
  

  //Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
    function createPhoneNumber(numbers){
        numbers = numbers.join('')
        return `(${numbers.slice(0,3)}) ${numbers.slice(3,-4)}-${numbers.slice(-4)}`    
    }
    console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); 
  