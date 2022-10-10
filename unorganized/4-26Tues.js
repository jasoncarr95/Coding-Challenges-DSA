// function createPhoneNumber(numbers){
//   let phoneNum = numbers.join('');;
//   return `(${phoneNum.slice(0,3)}) ${phoneNum.slice(3,6)}-${phoneNum.slice(-4)}`

// }

        //SUM OF DIGITS
function digital_root(n) {
  let dig=n.toString().split('').map(x=>parseInt(x));
  console.log(dig);

  if(dig.length<=2){return dig[0]+dig[1]}
  
  else{
    while (dig.length>2) {
        return dig=dig.reduce((a,b)=> a+b)

    }
  }
  
}

console.log( digital_root(16));     //7
console.log( digital_root(456));    //6