// Why String to Number conversion is a confusion

// ****** Operations *******

// console.log(1 + "2"); // 12
// console.log("1" + 2); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log(+true);
// console.log(+"33abc"); // '+' converts the things written after it into Number

// Prefix Operator
let myVal = 33;
console.log(++myVal); // The value will be incremented first and then used

// Postfix Operator
console.log(myVal++); // The value will be first used and then incremented
