// basic use of generics
const parrot = <T>(arg: T): T => arg;
console.log(parrot("good day")) // good day
console.log(parrot<string>("donuts")) // donuts
console.log(parrot<number>(5)) // 5

// array instead of number or string
const printListLength = <T>(list: Array<T>): Array<T> => {
    console.log(list.length)
    return list
};

// alternate way of writing above function
const printListLengthAlt = <T>(list: T[]): T[] => {
    console.log(list.length)
    return list
};

printListLength([1,2,3,4]) // 4
printListLengthAlt([5,6]) // 2

// generic interfaces
interface Building<T, U> {
    location: T,
    storeys: U,
}

const getBuildingDetails = <T, U> (l: T, s: U): Building<T, U> => {
    const myHouse: Building<T, U> = {
        location: l,
        storeys: s,
    }
    return myHouse;
}

console.log(getBuildingDetails("Denver, CO", 2))

class House<T> {
    streetAddress: T
    zipCode: number
    storeys: number
    constructor(public s, public z, public t) {
        this.streetAddress = s
        this.zipCode = z
        this.storeys = t
    }
}

console.log(new House("1234", 80000, 2))
console.log(new House(1234, 80000, 2))
console.log(new House({ address: "my street address" }, 80000, 2))