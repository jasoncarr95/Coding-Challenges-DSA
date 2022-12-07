//  Number of People in the Bus     KYU #7
        /*  - given an array of interger pairs - [num got on, num got off]  each stop
            - return ttal number of people still on the bus after the last stop
            - num of people  on bus will always be >= 0.. cant be negative people lol
        */
//  Example:
        //  console.log(busStops([[10,0],[3,5],[5,8]])) // 5
//  PseudoCode:
function busStops (bus){
    let totalGotOn = bus.map(e => e[0]).reduce((a,b)=> a+b,0)
    let totalGotOff = bus.map(e => e[1]).reduce((a,b)=> a+b,0)
    return totalGotOn - totalGotOff
}

//  Count odd numbers below n   KYU 8
function oddCount(n){
    return n % 2 === 0 ? n/2 -1 : Math.floor(n/2)
}

// function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     this.name = this.firstName + ' ' + this.lastName;
// }


// var n = new NameMe('John', 'Doe');
// console.log(n.firstName) //Expected: John
// console.log(n.lastName) //Expected: Doe
// console.log(n.name) //Expected: John Doe


