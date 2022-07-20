// class MakeCar {
//     constructor(carMake,carModel,carColor,numOfDoors){
//         this.make = carMake
//         this.model = carModel
//         this.carColor = carColor
//         this.doors = numOfDoors
//     }
// }

//  THE SUPERMARKEY QUEUE KYU 6
    // write a function  that calculates the ttotal time required for all the customers to check out
    // input: array of integers... each is a customer,  value is how long they take to check out
            // n = total number of checkout tills
    // output:  an integer.. toltal time

    console.log(queueTime([],1))    // 0
    console.log(queueTime([1,2,3,4],1))    // 10
    console.log(queueTime([2,2,3,3,4,4],2)) // 9
    console.log(queueTime([2,2,3,3,4,4],3)) // --> 42 | 42 | 33 --> 6
    console.log(queueTime([1,2,3,4,5],100)) // 5
    
function queueTime(customers, n) {
    // compare number of customers vs number of tills 
    
    // no customers... no wait time
    if(customers.length < 1) return 0
    // no one has to wait, theres enough tills
    else if(customers.length <= n) return Math.max(...customers)

    // only 1 till
    else if(n === 1){return customers.reduce((a,b) => a+b)}

    // if more customers than tills divide customers into separate arrays.. 1 for each till... separate by wait time evenly
    
    // wait time + checkouttime 

    // total wait time is the longest arr.reduce
}