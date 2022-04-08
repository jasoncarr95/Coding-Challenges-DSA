function typeOfSum(a, b) {
    let sum = a+b;
    console.log(typeof sum);
  }

  typeOfSum(12,1)

function finalGrade (exam, projects) {
    return exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0
  }
  console.log(finalGrade(85,5))

function feast(beast, dish) {
    if (beast.charAt(0) === dish.charAt(0)  && beast.charAt(beast.length-1) === dish.charAt(dish.length-1)) {
        return true
    } else {
        return false
    }
}

    console.log(feast("chickadee", "chocolate cake"))
    console.log(feast("brown bear", "bear claw"))