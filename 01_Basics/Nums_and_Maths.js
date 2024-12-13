// All about Numbers and Maths in JavaScript

const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);

// Converts the Number into a string with specified number of digits after decimal
// console.log(balance.toFixed(2));
// console.log(typeof(balance.toFixed(2)));

const otherNumber = 123.9866
// toPrecision() -> It also converts the Number to a String in Precision with the specified number of digits
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000

// Converts the Number to String in the "local format". By default, it is US based
// console.log(hundreds.toLocaleString());

// Indian Locale
// console.log("In Indian format: " , hundreds.toLocaleString("en-IN"));


// +++++++++++++++++ MATHS +++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.9));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.9));


// Most Important -> Math.random()
// console.log(Math.random()); // Returns numbers between 0 and 1

// console.log(Math.random()*10); // Returns numbers between 0 and 10

// console.log(Math.floor(Math.random()*10)); // Returns integer numbers between 0 and 10

// console.log(Math.floor(Math.random()*10) + 1); // Returns integer numbers between 1 and 10

// Use Math.random() between a given range
const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max-min)) + 1)+min)