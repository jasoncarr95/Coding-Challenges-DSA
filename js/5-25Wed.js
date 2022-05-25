//  A wolf in sheep's clothing   KYU 8
//  Parmeters:  array.. always exactly one wolf
//  Return:
        // im at front of the queue --- END OF ARRAY
        // if wolf is closest animal to me return "go away"
        //oitherwise warn sheep n (sheep closest to wolf)
//  Example:
    // console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));// sheep 1 
    // console.log(warnTheSheep(["sheep", "sheep", "wolf"]));  // pls go away.. wolf closest to me (the end )
    // console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])); // sheep 2
    
//  PseudoCode:
    // reverse arrary since im at end of queue
    // find index of wolf .... if now at fron (after reversal) respond pls go away
    //other wise sheep n will be at index of wolf -1
    // going to have to add 1 to index of sheep//// not! cuz 0 indexed
    

function warnTheSheep(queue) {
    if(queue.indexOf("wolf") == (queue.length -1)) {
        // wolf is last in queue aka closest to me
        return "Pls go away and stop eating my sheep"
    } else {
        queue.reverse();
        let n = queue.indexOf("wolf");
        return `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`
    }
}

//  PILLARS   KYU 8
    // distance between pillars is always same, width is always same
//  Parmeters:  //1. number of pillars(>=1)
                //2. dinstance between pillars (10-30 meters)
                //3. width of pillar (10-50cm)
//  Return: distance between first and last pillar in cm 
            // without the width of the first and last pillar
//  Example:
    //  console.log(pillars(1,10,10));  // 0...only 1 pillar
    //  console.log(pillars(2,20,25)); //  20*100=2000 - 0 = 
    //  console.log(pillars(11,15,30)); 
    //width 9(pillars-2*30=270cm
    //dist 15*10(pillars-1)*100

//  PseudoCode:

function pillars(num_pill, dist, width) {
    if(num_pill===1) return 0
    else if(num_pill===2) return dist*100
    else{
        return ((num_pill- 1) * dist * 100) + ((num_pill-2) * width)
    }
}

//  Find nearest square number   KYU 8
//  Parmeters:  n ... a positive integer
//  Return: the nearest square number
//  Example:
    console.log(nearestSq(111));    121
    
//  PseudoCode:

function nearestSq(n){
    return Math.pow(Math.round(Math.sqrt(n)),2)
}