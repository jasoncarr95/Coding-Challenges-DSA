//  Multiple of index   KYU 8
        // return new array of elements which are multiple of their own index in the input array (length >1)

//  Example:
    //  console.log(multipleOfIndex([22,-6,32,82,9,25]))    //  -6,32,25
    //  console.log(multipleOfIndex([68,-1,1,-7,10,10]))    //  -1,10
//  PseudoCode:
    //  filter the array
    //  element % index === 0
function multipleOfIndex(array) {
    return array.filter((e,i) => e % i === 0)
}

//  Magic Index   KYU 7
    // magic index: A[i] = i
    //  given sortewd array of distinct integers, write method to find a magic index, if it exists
    // should return -1 if doesnt exist
//  Example:
    //  console.log(findMagic([-20,-10,,10,20]));  //  2
    
//  PseudoCode:
    //  return array.findIndex(e=i)
// return the magic index
function findMagic(arr){
    return arr.findIndex((e,i) => e === i)
}


//  DNA to RNA Conversion   KYU 8
    //  T --> U
function DNAtoRNA(dna) {
  return dna.replaceAll("T","U")
}
//  console.log(DNAtoRNA("TTTT"))   // UUUU
//  console.log(DNAtoRNA("GCAT"))   // GCAU


//  DO I get a bonus   KYU 8
    //  salaray (integer), bonus(boolean)
    // if true, salary multiplied by10... otherwise only salary
function bonusTime(salary, bonus) {
    return bonus ? `£${salary*10}` : `£${salary}`
}
//  console.log(bonusTime(10000,true)); //  "£100000"
//  console.log(bonusTime(10000,false));    //  "£10000"

//  Vowel Remover   KYU 8
function shortcut (string) {
    const vowels = 'aeiou'.split('')
    string = string.split('').filter(e => !vowels.includes(e))
    return string.join('')
}
console.log(shortcut("hello")); //  "hll"
