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