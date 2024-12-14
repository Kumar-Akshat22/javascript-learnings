// Arrays - Part 1

const myArr = [1 , 2 , 3 , 4 , 5]
// console.log(myArr);

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


// myArr.unshift(8)
// myArr.shift()


// console.log(myArr.includes(15));
// console.log(myArr.indexOf(5));

const newArr = myArr.join('^')
// console.log(typeof myArr); // object
// console.log(typeof newArr); // string


// slice and splice -> Important for Interviews
const myNewArr = [0 , 1 , 2 , 3 , 4]

const a = myNewArr.slice(1 , 3)
console.log('A ' , myNewArr); // Original Array remains unaffected
console.log(a);

const b = myNewArr.splice(1 , 3)
console.log('B ' , myNewArr); // Original array gets affected
console.log(b);


/*
NOTES:

    slice(start , end) method:
        -> Returns the part of the array from start to end-1
        -> Original Array remains unchanged
    
    splice(start , end) method:
        -> Returns the part of the array from start to end (both included)
        -> Original Array gets changed in a way that the elements from start to end are deleted from it

    1. Array is written in brackets [  ].
    2.Array data type is an object.
    3.Array can contain different data types . i.e string,number,boolean,array etc.
    4. Array is zero based indexing. It starts with zero.
    5. Once changed its original value will also change beacause it is non primitive (refrence) type.

*/