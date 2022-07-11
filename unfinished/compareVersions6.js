//  COMPARE VERSIONS    KYU 6
    //compare which version is more recent.. i.e 11 >10
    // account for decimals 10.10 > 10.9

    function compareVersions (version1, version2) {
        if(!version1.includes('.') || !version2.includes('.')) return parseFloat(version1) >= parseFloat(version2);
        //  split into an array of numbers, compare said numbers?
        let total1 = version1.split('.').map(e => Number(e)).reduce((a,b) => a+b)
        let total2 = version2.split('.').map(e => Number(e)).reduce((a,b) => a+b)
    
        return total1 >= total2
        
    }
    
    console.log(compareVersions("11", "10"));                    // returns true
    console.log(compareVersions("11", "11"));                    // returns true
    console.log(compareVersions("10.4.6", "10.4"));              // returns true
    console.log(compareVersions("10.4", "11"));                  // returns false
    console.log(compareVersions("10.4", "10.10"));               // returns false
    console.log(compareVersions("10.4.9", "10.5"));              // returns false