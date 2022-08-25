//  Compare Versions KYU 6
    /*  
    PARAM:  2 strings (versions). wont be empty, will contain only numeric liters and '.'
    RETURN: return boolean
    
    PSEUDO:
        - compare the numbers at each "section" divided by a '.'
        - split the strings into arr at .
        - iterate through arrs, comparing each el
        - return boolean
*/

function compareVersions (version1, version2) {
    // return parseFloat(version1) >= parseFloat(version2);

    let arrV1 = version1.split(".")
    let arrV2 = version2.split(".")
    console.log(arrV1)
    console.log(arrV2)

    arrV1.forEach((element,index) => {
        if(Number(element[index]) < Number(arrV2[index])){
             return false
        }
    })
}

console.log(compareVersions("10.9", "10.10"))      // returns true, while it should return false

// compareVersions("11", "10");          // returns true
// compareVersions("11", "11");          // returns true
// compareVersions("10.4.6", "10.4");    // returns true
// compareVersions("10.4", "11");        // returns false
// compareVersions("10.4", "10.10");     // returns false
// compareVersions("10.4.9", "10.5");    // returns false