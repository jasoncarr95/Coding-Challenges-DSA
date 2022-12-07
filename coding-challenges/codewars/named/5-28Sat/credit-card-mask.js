//  KYU 7

// return masked string
function maskify(cc) {
  let masked = "";
  if (cc.length > 4) {
    return masked.padStart(cc.length - 4, "#") + cc.slice(-4);
  } else return cc;
}
