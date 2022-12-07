//Holiday VIII - Duty Free
function dutyFree(normPrice, discount, hol){
    let discounted = normPrice * (discount/100)
    return Math.floor(hol / discounted)
  }


// Pirates!! Are the cannons ready!??

const cannonsReady = (gunners) => {
    return !Object.entries(gunners).flat().includes('nay') ? "Fire!" : "Shiver me timbers!"
}

let a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'};
let b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};

// console.log(cannonsReady(a)) // "Fire!"
// console.log(cannonsReady(b)) // "Shiver me timbers!"


