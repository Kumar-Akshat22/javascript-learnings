// DataTypes and ECMA script

"use strict" // Treat all the JS Code as the newer version

// alert("Hello, everyone") // We are using node.js and not browser


let age = 18;
let myName = "Akshat";
let isLoggedIn = false;

console.log(typeof age) // number
console.log(typeof myName) // string
console.log(typeof isLoggedIn) // boolean

// Most Intersting
console.log(typeof null) // object
console.log(typeof undefined) // undefined

/*

NOTES:

DataTypes:
    1. number
    2. bigInt => Used in vast applications such as stock trading apps
    3. string => ""
    4. boolean => true/false
    5. null => standalone value
    6. undefined => 
    7. symbol => Commonly used in React to uniquely idntify the components of a React Project
    8. object => Discussed in detail in future lectures

*/