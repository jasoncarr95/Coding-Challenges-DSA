//  RETURN THE FIRST M MULTIPLES OF N   KYU 7
function multiples(m, n){
  let result = [];
  for(let i = 1; i <= m; i++){
      result.push(n*i)
  }
  return result
}

//  RETRUN THE CLOSEST NUMBER MULTIPLE OF 10    KYU 7
const closestMultiple10 = num => {
  return Math.round(num/10)*10
};

//  CHAIN ME    KYU 7   
function chain(input, fs) {
  for(let i=0; i<fs.length; i++){
    input = fs[i](input)
  }
  return input
}

//  CHECK SAME CASE     KYU 8
function sameCase(a, b){
    String.prototype.isUpperCase = function(str){
      return this == this.toUpperCase();
    }
    if (a.toUpperCase() === a.toLowerCase() || b.toUpperCase() === b.toLowerCase()){
      return -1
    }else return a.isUpperCase() == b.isUpperCase() ? 1 : 0
  }

//  FIZZBUZZ - WITHOUT IFS  KYU 7
const fizzBuzz = n => {
  return n%3==0 && n%5==0 ? 'FizzBuzz' : n%3==0 ? 'Fizz' : n%5==0 ? 'Buzz' : n
};

