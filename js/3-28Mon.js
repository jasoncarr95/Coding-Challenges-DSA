//FAKE BINARY 
function fakeBin(x){
  //convert string of digits into an array of digits (number)
  let digits = x.toString().split('');

  return digits.map( (i) => {
    if (i < 5){return  i=0}
    else return i=1;
  }).join('')
  
}
console.log(fakeBin(45385593107843568));