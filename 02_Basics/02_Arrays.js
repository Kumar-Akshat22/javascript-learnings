const marvel_heroes = ["thor" , "IronMan" , "Spiderman"]
const dc_heroes = ["superman" , "flash" , "batman"]

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

// Another better way to join or conatenate two arrays
// const all_heroes = marvel_heroes.concat(dc_heroes);

// console.log(all_heroes);

// Spred Operator (...)
// const all_new_heroes = [...marvel_heroes , ...dc_heroes]
// console.log(all_new_heroes);

// Nesting inside the array
const another_array = [1 , 2 , 3 , [4 , 5 , 6] , 7 , [6 , 7 , [4 , 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Akshat"));
// Convert to an Array
console.log(Array.from("Akshat"))
console.log(Array.isArray(Array.from("Akshat")))

console.log(Array.from({name:"hitesh"})) // Interesting Case

// Creating an Array from a set of values

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1 , score2 , score3))


