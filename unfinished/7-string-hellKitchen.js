// Hells Kitchen    KYU 7
/*
        input: string of four words
        output: string w words changed to gordon language
            - ALL CAPS
            - every word ends with "!!!!"
            - any a/A -> @
            - other vowels -> "*"
    */
/*  PSEUDO
        - split string into an array of words
        - map words into new arr of ALL CAPS
            - check each word's letters .. replace Vowels and a/A
    */
            console.log(gordon("i am a chef")); // '*!!!! @M!!!! @!!!! CH*F!!!!'

            function gordon(a) {
                const vowels = "EIOU".split("");
                let words = a.toUpperCase().split(" ").map(word => word.split(""))
                
               return  words.forEach(word => {
                    word.map(char => {
                    return char === "A" ? "@" : vowels.includes(char) ? "*" : char
            
                    })
                });
                // let letters = words.map((word) => word.split("")).map()
            
                
                
            }