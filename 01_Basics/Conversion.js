// Today, we will understand about datatypes conversion in JavaScript

let score = true

// console.log(typeof(score))

let scoreInNumber = Number(score)

// console.log(typeof(scoreInNumber))
// console.log(scoreInNumber)


let isLoggedIn = "Akshat"

let boolIsLoggedIn = Boolean(isLoggedIn)

// console.log(boolIsLoggedIn)

let myNumber = 33

let stringMyNumber = String(myNumber)

console.log(stringMyNumber);



/*

NOTES:

String to Number conversion
1. "33" => 33
2. "33abc" => NaN
3. true => 1
4. false => 0

Number to Boolean conversion
1. 0 => false
2. 1 => true
3. "" => false
4. "akshat" => true

*/