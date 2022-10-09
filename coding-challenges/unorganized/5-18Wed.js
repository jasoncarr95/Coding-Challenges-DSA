//  INCREMENTER   KYU 7
//  Parmeters:  input will always be an array containing only numbers... if empty return an empty arrray
//  Return: return an array of digits-the number incremented by elements position (or an empty array)... if results in double digit, only return 2nd digit .. i.e 12=>2
//  Example:    
//(incrementer([1,2,3]);  // [2,4,6]
//(incrementer([4,6,9,1,3]);  // [5,8,2,5,8]

//  PseudoCode:
    //map (el in) => el+=(in+1).... conditional if el is double digit, return only 2nd digit

function incrementer(nums) {
    return nums.map((e,i) => (e+i+1)%10)
}

//  N-TH POWER   KYU 8
//  Parmeters:  array of positive  and a number (n)... n may be outside of the array
//  Return: returning whatever element is at index n, return that to the nth power (if n is inside of index, else return -1)
//  Example:    
console.log(index([1,2,3,4], 2));   // 3**2 => 9
console.log(index([1,2,3],3));  // n index is not in array, return -1

//  PseudoCode: 
    //conditional checks if n index is in the array... arr.length-1 <= n
    // return  indexAt n **n

function index(array, n){
  if(array.length-1 >= n){
      return array[n]**n
  }else{
      return -1
  }
}