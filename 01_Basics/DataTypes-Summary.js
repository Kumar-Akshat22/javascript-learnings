// Data Types are broadly classified into 2 categories

/*

Primitive: These are the basic data types available in the programming language and can be used directly

    1. String
    2. Number
    3. Boolean
    4. null
    5. undefined
    6. Symbol
    7. BigInt

*/

const myNumber = 45

const temp = null

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id);
// console.log(anotherId);

// console.log(id === anotherId); // id and anotherId are unique


const bigNumber = 56289650365026519n
// console.log(typeof id);

/*

Non-Primitive => These are accessed using the address allocated to them in the memory (Reference)

    1. Array
    2. Objects
    3. Functions

*/

// Array
const heros = ["shaktiman" , "hero" , "Iron Man"]

// Object
let myObj = {

    myName: "Akshat",
    age: 21,

}

// Function 
const myFunction = function (){

    // console.log("Hello");
}

// console.log(typeof null);
// console.log(typeof heros);


// ----------------- Stack and Heap Memory -------------

// Primitive data types are stored in the Stack memory 
let myName = "kumar akshat"

let myAnotherName = myName
myAnotherName = "kr akshat"


// console.log(myName); // There will be no change in 'myName' because changes were made in the copy
// console.log(myAnotherName);

// Non-Primitive data types are stored in the Heap memory
let obj1 = {

    email: "kakshat@google.com",
    password: "12345"
}

// Here, obj1 is having the address of the memory in heap where it's value is stored

let obj2 = obj1 // Here, obj2 is also referring to the same memory location in heap as obj1

obj1.email = "akshat@gmail.com"

console.log(obj1.email); // Changes are reflected
console.log(obj2.email);





/*

Behaviour of typeof in JS:

Primitive:
    1. null => object
    2. undefined => undefined
    3. String => string
    4. Number => number
    5. BigInt => bigint
    6. Symbol => symbol
    7. Boolean => boolean

Non-Primitve:
    1. array => object
    2. object => object
    3. function => function object


--> JavaScript is a Dynamically typed language as we don't need to specify the datatype of a variable at the time of declaration

*/