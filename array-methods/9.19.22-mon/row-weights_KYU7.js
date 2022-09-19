// ROW WEIGHTS KYU 7
/*
        input: array of positive integers (weight of people)
            - size always atleast 1
            - numbers all positive
        output: array: 2 int... [total weight team1, total team2]
    */
    /*  PSEUDO
        - create 2 new arrays for team 1 and team 2
            - 0, 2, 4 (even indexes) on team 1
            - 1,3,5 (odd indexes ) on team 2
        - reduce each arr to its total weight
        - return weights as an array
    */

console.log(rowWeights([13]))  //  [62, 27]

        
function rowWeights(array){
    let team1TotalWeights = array.filter((el, index) => index % 2 === 0).reduce((a,b) => a+b, 0)
    let team2TotalWeights = array.filter((el, index) => index % 2 != 0).reduce((a,b) => a+b, 0)
    return [team1TotalWeights,team2TotalWeights]
}        