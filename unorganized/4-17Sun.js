function areYouPlayingBanjo(name) {
    return name.toLowerCase().startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`
  }

  console.log(areYouPlayingBanjo('Adam')); // "Adam does not play banjo"
  console.log(areYouPlayingBanjo('Ringo')); // "rolf plays banjo"

function solution(nums){
    return nums ? nums.sort((a,b) => a-b) : [];
}
console.log( solution([20,2,10] ) ); //2,10,20
console.log( solution( []) );


class Ball {
    constructor(ballType='regular'){
        this.ballType=ballType
    }
}

const ball1 = new Ball()
const ball2 = new Ball('super')
console.log(ball1);
console.log(ball2);