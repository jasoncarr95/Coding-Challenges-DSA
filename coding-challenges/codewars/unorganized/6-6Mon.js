//  NBA FULL 48 MINUTES AVERAGE   KYU 8
//  Parmeters:  given ppg and mpg
//  Return: return pointsPer48 rounded to nearest 10th || if input is 0 return 0
//  Example:
    //  console.log(pointsPer48(12,20)) // 28.8
    //  console.log(pointsPer48(5,17)) // 14.1
    //  console.log(pointsPer48(0,17)) // 14.1
//  PseudoCode:
        //  12 point / 20 min
        // x point / 48 min 
        // 12*48/20
        // round to .1 ...Number.tofixed

function pointsPer48(ppg, mpg) {
    return Number(((ppg*48)/mpg).toFixed(1)) || 0
}


//  TOTAL PRESSURE CALCULATOR   KYU 8
//  Parmeters:  6 inputs: M1, M2, m1, m2, V, T
//  Return: P total
//  Example:
        //  console.log(solution(44,30,3,2,5,50))   //  0.714651121212121212        
//  PseudoCode:
        // P = (m1/M1 + m2/M2)*RT
            //      / V
solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    const R = 0.082
    let n = (givenMass1/molarMass1)+(givenMass2/molarMass2)
    temp +=273.15
    
    return (n*R*temp)/volume
}

//  CALCULATE PRICE EXCLUDING VAT   KYU 8
//  Parmeters:  given total price including VAT (always 15%) or Null
//  Return: if null, return -1.  otherwise return price without VAT rounded to 2 decimal places
//  Example:
        // console.log(excludingVatPrice(230)) // 200.00
        // console.log(excludingVatPrice(123)) // 106.96
//  PseudoCode:
        //  total price divided by / 1.15
        // Number.tofixed 2 (round 2 decimal places)
        // nullish coalescing
//return price without vat
function excludingVatPrice(price){
    return Number((price/1.15).toFixed(2)) || -1
}


//  CONTAMINATION #1 -STRING   KYU 8
//  Parmeters:  string, character(1 letter)
//  Return: if either are empty return empty string
            // otherwise change every character in string to being the character mutation
//  Example:
    //  console.log(contamination("abc", "z"))  //  "zzz"
    
//  PseudoCode:
    // test that both arent empty, if are return empty string
    // split string into array of letters, for each letter, replace with character
        // could also pad start new string to be same length
function contamination(text, char){
    if(text && char){
        return text.split('').map(e => e=char).join('')
    } else return ""
}

//  DAYS IN THE YEAR  KYU 8
//  Parmeters:  given an integer
//  Return: return year has __ days
//  Example:
    //  console.log(yearDays(2016)) //  '2016 has 366 days
    //  console.log(yearDays(-64)) //  '-64 has 365 days
    //  console.log(yearDays(1857)) //  '1857 has 365 days
//  PseudoCode:
        // check if century (>= 100 && ends with 0) ... must be divisible by 400
        // otherwise check if divisible by 4
        // return template literal 
function yearDays(year){
    const isLeapYear = function (year){
        if(Math.abs(year) >= 100 && String(year).endsWith(00)){
            return year % 400 === 0
        } else return year % 4 === 0
    }
    return isLeapYear(year) ? `${year} has 366 days` : `${year} has 365 days`
}


//  Who is going to pay for the wall?   KYU 8
//  Parmeters:  given a name 
//  Return: ["full name", "truncated name"]
//  Example:
    //  console.log(whoIsPaying("Mexico"))  //  ["Mexico", "Me"]
    //  console.log(whoIsPaying("I"))  //  ["I"]
//  PseudoCode:
    // check if name length  > 2 .. if not return arr of just name
    // if so, truncate (first 2 letters)
function whoIsPaying(name){
    if(name.length <=2){
        return [name]
    }else{
        nameTrunc = name.substring(0,2)
        return [name,nameTrunc]
    }    
}


//  RETURN THE DAY   KYU 8
//  Parmeters:  given a number 
//  Return: return day of the week .. start on sunday  other wise return wrong number
//  Example:
        //  console.log(whatday(3)) //  'Tuesday
                / console.log(whatday(0)) //  'wrong
//  PseudoCode:

function whatday(num) {
    const daysWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const error = 'Wrong, please enter a number between 1 and 7'
    if(1 <= num && num <= 7){
        return daysWeek[num-1]
    } 
    return error
}