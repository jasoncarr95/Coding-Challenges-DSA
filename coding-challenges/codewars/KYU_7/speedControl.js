// (3600 * delta_distance) / s  <== calculate hourly speed
//

/**
 *
 * @param {number} s number of seconds between each measurement
 * @param {number[]} x array of distances from origin
 * @returns {number} integer (floor) maximum speed per hour
 */
// function gps(s, x) {
//   // check if x.length <= 1, return 0
//   if (x.length <= 1) return 0;
//   // iterate through arr, calculate delta distance x[i +1] - x[i]
//   const deltaDistances = [];
//   for (let i = 1; i < x.length; i++) {
//     const change = x[i] - x[i - 1];
//     deltaDistances.push(change);
//   }
//   //   console.log(deltaDistances);
//   const maxSpeed = (3600 * Math.max(...deltaDistances)) / s;
//   return Math.floor(maxSpeed);
//   // calc avg speed for each distance section.. return max
// }

function gps(s, x) {
  if (x.length <= 1) return 0;

  const speedPerHour = [];
  for (let i = 1; i < x.length; i++) {
    const changeDistance = x[i] - x[i - 1];
    speedPerHour.push((3600 * changeDistance) / s);
  }

  const maxSpeed = Math.max(...speedPerHour);
  return Math.floor(maxSpeed);
}

let s = 15;
let x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25];
// sections: 0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25

// hourly speeds: [45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]

console.log(gps(s, x)); // 74
