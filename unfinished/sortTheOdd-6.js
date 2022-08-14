function sortArray(array) {
    let odds = array.filter(e => e%2 !== 0).sort((a,b)=> a-b)
    console.log(`odds array: ${odds}`);
    
    for(let i = 0; i< array.length; i++){
        if(odds.includes(array[i])){
            array[i] = 'temp'
        }
    }
    console.log(array);
    for(let i = 0; i< array.length; i++){
        if(array[i] == 'temp'){
            array[i] = odds.shift()
        }
    }
    return array
    
}