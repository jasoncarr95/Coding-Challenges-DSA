//  holiday VI - shark pontoon  KYU 8
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (dolphin == true) {
    sharkSpeed *= 0.5;
  }
  return sharkDistance / sharkSpeed < pontoonDistance / youSpeed
    ? "Shark Bait!"
    : "Alive!";
}

// PLURAL   KYU 8
function plural(n) {
  return n !== 1;
}

//  Sum without highest and lowest number   //  KYU 8
function sumArray(array) {
  if (array) {
    return (
      array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((a, b) => a + b, 0) ?? 0
    );
  } else return 0;
}

//  TRANSPORTATION ON VACATION   8 KYU
function rentalCarCost(d) {
  let totalCost = d * 40;
  if (d >= 7) {
    totalCost -= 50;
  } else if (d >= 3) {
    totalCost -= 20;
  }
  return totalCost;
}

//  Grasshopper - Grade book    KYU 8
function getGrade(s1, s2, s3) {
  avg = (s1 + s2 + s3) / 3;
  if (avg < 60) return "F";
  else if (avg < 70) return "D";
  else if (avg < 80) return "C";
  else if (avg < 90) return "B";
  else return "A";
}

//  WILL THERE BE ENOUGH SPACE?     KYU 8
function enough(cap, on, wait) {
  return cap - on >= wait ? 0 : wait - (cap - on);
}

//  THIRD ANGLE OF A TRIAGLE    KYU 8
function otherAngle(a, b) {
  return 180 - (a + b);
}

// Correct the mistakes of the character recognition software   KYU 8
function correct(string) {
  return string.replaceAll("0", "O").replaceAll("1", "I").replaceAll("5", "S");
}
