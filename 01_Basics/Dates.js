// All about Dates in JavaScript

let myDate = new Date();

// console.log(myDate.toString());

// More Date conversion functions
// console.log(myDate.toDateString()); // Returns only the Date in String format

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleString());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toTimeString());

// typeof
console.log(typeof myDate); // object

// let myCreatedDate = new Date("01-14-2023");
// let myCreatedDate = new Date(2023, 0 , 23);
let myCreatedDate = new Date(2023, 0 , 23 , 24 , 13 , 45 , 7000);
console.log(myCreatedDate.toLocaleString());

// TimeStamps -> Current Date & Time
// let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // Convert the Current Time to Seconds

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);

// const myFormat = newDate.toLocaleString('default' , {
//     weekday:"long",
//     day:"numeric",
// })

// console.log(myFormat);
