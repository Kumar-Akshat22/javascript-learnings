// Let's deep dive into strings in JavaScript

let myName = "Akshat"
let repoCount = 20

// One way of concatenating strings
// console.log(myName + " Repo Count: " + repoCount);

// Better Way - String Interpolation
console.log(`My name is ${myName} and my Repo Count is ${repoCount}`);

// We can also declare String using Constructor
const myEmail = new String("kakstat@gmail.com")

// console.log(myEmail);
// console.log(myEmail.length); // Returns the length of the given string

// console.log(myEmail.toUpperCase()); // Converts the given string to an UPPERCASE string

// console.log(myEmail.charAt(3)); // Returns the character present at the given position

// console.log(myEmail.indexOf('t')); // Returns the starting index of the given string

const gameName = new String('akshat')

const anotherString = gameName.substring(0, 4); // Returns the substring starting from the 'start' to the 'end' but not including end position

// console.log(anotherString);


const newString = "     akshat    "
// console.log(newString);
// console.log(newString.trim()); // Removes the whitespaces in the string

const url = "https://chaicode.com/akshat%20kumar"

// console.log(url.replace('%20' , '-')); // Replaces the given character with a new specified character

console.log(url.includes('sun'));

const myString = new String("Hi my name is Kumar Akshat")
console.log(myString.split(' ')); // Splits the given string into parts based on a seperator


