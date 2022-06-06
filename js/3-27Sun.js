// convert num to array of digits .....have to convert it to string then split('')
//
function squareDigits(num){
  //CONVERT NUM  TO AN ARRAY OF THE DIGITS... HAS TO BE A STRING TO USE SPLIT('')
  let nums = num.toString().split('')

  //SQUARE EACH DIGIT WITH A MAP
  //CONCAT ALL THE DIGITS TOGETHER AS ONE NUMBER JOIN('') AND RETURN AS A NUMBER  
  return  Number(nums.map(x => x**2 ).join(''))
  
}