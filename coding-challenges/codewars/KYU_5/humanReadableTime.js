/*
input: betweeen 0 - 359,999 (99:59:59)
HH= 2 dig, 00-99
MM= 2 dig, 00-59
SS= 2 dig, 00-59
*/

/**
 * Converts seconds to "HH:MM:SS"
 * @param {number} seconds number of seconds
 * @returns {string}
 */

// function humanReadable(seconds) {
//   // check for hours: > 3600s => seconds % 3600 (get whole integer HH)
//   // same for min
//   let [hour, min, sec] = [0, 0, seconds];
//   // Hours
//   if (seconds >= 3600) {
//     hour = Math.floor(seconds / 3600);
//     sec = sec % 3600;
//   }

//   if (sec >= 60) {
//     min = Math.floor(sec / 60);
//     sec = sec - min * 60;
//   }

//   return [hour, min, sec]
//     .map((unit) => {
//       return unit < 10 ? (unit = "0" + unit.toString()) : unit.toString();
//     })
//     .join(":");
// }

//! REFACTOR WITH parseInt()
function humanReadable(seconds) {
  let [hours, mins] = [0, 0, seconds];
  // HOURS
  hours = parseInt(seconds / 3600);
  seconds = seconds % 3600;

  // MINS
  mins = parseInt(seconds / 60);
  seconds = seconds % 60;

  // Pad single digits with 0, return as a string
  return [hours, mins, seconds]
    .map((unit) => {
      return unit < 10 ? (unit = "0" + unit.toString()) : unit.toString();
    })
    .join(":");
}

console.log(humanReadable(365), "00:06:05");
console.log(humanReadable(0), "00:00:00");
console.log(humanReadable(59), "00:00:59");
console.log(humanReadable(60), "00:01:00");
console.log(humanReadable(90), "00:01:30");
console.log(humanReadable(3599), "00:59:59");
console.log(humanReadable(3600), "01:00:00");
console.log(humanReadable(45296), "12:34:56");
console.log(humanReadable(86399), "23:59:59");
console.log(humanReadable(86400), "24:00:00");
console.log(humanReadable(359999), "99:59:59");
