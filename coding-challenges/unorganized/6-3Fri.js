//  COUNT OF POSITIVES/SUM OF NEGATIVES   KYU 8
//  Parmeters:  array.. may be empty or null (return empty array)
//  Return: array [#postive, sumNegative]
//  Example:
    // console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))   // [10, -65]
//  PseudoCode:
    // for loop: if element is positive, add 1 to count
            //  if negative add element to sum of diff count

function countPositivesSumNegatives(input) {
    if(!input || input.length < 1){ return [];}
    else {
        let countPositives = 0
        let  sumNegatives = 0
        for (let i = 0; i < input.length; i++){
            if(input[i]<0) sumNegatives += input[i];
            if(input[i]>0) countPositives++
        }
        return [countPositives,sumNegatives]
    }
}

//  THE MEAN OF TWO MEANS   KYU 7
//  Parmeters:  array, 2 integers(x,y)
//  Return: return the mean betweeen the mean of (first x elements of array) and mean of last y elements
            //only if both x and y have values > 1 but <= length otherwise return -1
//  Example:
    console.log(getMean([1,3,2,4], 2,3))    // 2.5
//  PseudoCode:
        //  check that x and y are between 1 and arr length ... if not return -1
        //  arr.slice first x elements and last y elements.. reduce both then get average of them
        // arr.slice 0,x ... if x=5 would return 0,1,2,3,4
        // arr.slice -y if y=5 returns last 5
function getMean(arr, x, y) {
    if(x <= 1 || y <= 1 || x>arr.length || y>arr.length) return -1

    let meanFirstX = arr.slice(0,x).reduce((a,b) => a+b)/x
    let meanLastY = arr.slice(-y).reduce((a,b) => a+b)/y
    return (meanFirstX+meanLastY)/2
}