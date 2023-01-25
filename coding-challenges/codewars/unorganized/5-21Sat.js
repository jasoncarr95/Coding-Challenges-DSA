//  GROWTH OF A POPULATION   KYU 7
// pop starts at 1000... every year increases by 2%, also +50people
// how many years until pop is atleast 1200
//  Parmeters:  p0(iniitial pop), percent increase/year, aug(people moving in/out), p(end goal population)
//  Return: return n => number of years for population to be => p0
//  Example:
//  console.log(nbYear(1500,5,100,5000)) //  15
//  console.log(nbYear(1500000,2.5,10000,2000000)); //  10

//  PseudoCode:

function nbYear(p0, percent, aug, p) {
  let n = 0;
  while (p0 < p) {
    n++;
    p0 = Math.floor(p0 * (percent / 100) + p0 + aug);
  }
  return n;
}

//  no loops 2 - you only need one  KYU 8
function check(a, b) {
  return a.includes(b);
}

//  no loops 1 - small enough?  KYU 7
function smallEnough(a, limit) {
  return a.every((e) => e <= limit);
}

//  Do something "n.times"(Simplifying "for" loops) KYU 8
Number.prototype.times = function (f) {
  for (let i = 0; i < this; ++i) {
    f(i);
  }
};
