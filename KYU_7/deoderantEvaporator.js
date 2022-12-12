/**
 * all inputs are strictly positive (>0)
 * return # of days as an integer
 */

/**
 *
 * @param {number} content content of evaporator in mL
 * @param {number} evap_per_day % of gas lost every day
 * @param {number} threshold % after which evap is no longer usefult
 * @returns nth day on which evap is out of use
 */

function evaporator(content, evap_per_day, threshold) {
    let days = 0;
    let gas = 100;
    while (gas >= threshold) {
        gas -= (gas * evap_per_day) / 100;
        days++;
    }
    return days;
}
console.log(evaporator(10, 10, 5), "=> 29"); // 10mL,  10% per day lost, < 5% no longer useful
//
