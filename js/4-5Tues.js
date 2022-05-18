// // find multiples of a number
// function findMultiples(integer, limit){
//     const multiples = [];
//     for(let i = 1; i <= limit/integer; i++){
//         multiples.push(integer * i)
//     }
//     return multiples
// }

// rock paper scissors
// const rps = (p1, p2) => {
//     if (p1 === p2){
//         return 'Draw!'
//     } else if ( p1 =='scissors' && p2 == 'paper' || p1 == 'rock' && p2 == 'scissors' || p1 == 'paper' && p2 == 'rock'){
//         return 'Player 1 won!'
//     } else {return 'Player 2 won!'}
// };

// // beginner series #3 sum of numbers
// function getSum( a,b )
// {
//     let sum = 0;
//     if (a==b){return a}
//     else if (a < b){
//         for (let i = a; i <= b; i++){
//             sum +=i
//         }
//     }else for(let i = b; i <= a; i++){
//         sum +=i
//     }
//     return sum
// }

function find_average(array) {
    let sum = 0;
    for(let i=0; i<=array.length-1; i++){
        sum += array[i]
    }
    
    return  sum / array.length || 0
  }