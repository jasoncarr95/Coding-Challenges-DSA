// Basic subclasses - Adam and Eve KYU 8

/*
creation method returns an array of length 2 containting opbjects 
    - first object: instance of class Man
    - 2nd: instance of class Woman

    both have to be sublasses of Human

    implement Human, Man, Woman classes
*/

class God {
    /**
     * @returns Human[]
     */
    static create() {
        return [new Man, new Woman]
    }
}
// code
class Human {}
class Man extends Human {}
class Woman extends Human {}

let humans = God.create()
console.log(humans)