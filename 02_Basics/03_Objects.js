// Objects in JavaScript - Part 1

// Singleton -> Iske jaisa aur koi object doosra nhi banega same program mein

// Objects created using Constructor are singleton

// Using Constructor 
// Object.create()

// Object Literals
const mySym = Symbol("key1");

const user = {

    userName: "Kakshat",
    "full name": "Kumar Akshat",
    [mySym]: "myKey1",
    age: 21,
    location: "Ranchi",
    email: "kakshat@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Tuesday"]
}

// Accessing the Properties
// console.log(user.age); 
// console.log(user["age"]); 

// console.log(user["full name"]);

// Accessing the Symbol property
// console.log(user[mySym]);

// Overwrite the values of the key in an object
user.email = "krakshat@gmail.com";
// console.log(user.email);

// We can also freeze the Object to avoid further updation of the key's value
// Object.freeze(user);
user.email = "krakshat@microsoft.com"; // Change will not be reflected

// console.log(user.email);

// console.log(user);


// Functions as a property of the Object
user.greeting = function(){

    console.log("Hello JS User");
}

user.greetingTwo = function(){

    console.log(`Hello JS User ${this["full name"]}`);
}

// console.log(user.greeting); // We will get the reference of the function
console.log(user.greeting()); // Funciton will Execute
console.log(user.greetingTwo());


/* 
NOTES:
    
    1. There are 2 ways to declare an object in JavaScript.
        a) In the form of literals
        b) Using Object constructor
    
    2. An object in JavaScript is a collection of key value pairs
    
    3. IMPORTANT: The keys of the object are stored as the string datatype

    4. There are 2 ways to access the properties of the object
        a) Dot notation -> Obj.name , Obj.location 
        b) Square Bracket -> Obj["name"] , Obj["location"]
    
    5. Using Symbol as a key inside the object

        -> Declare the Symbol => const mySym = Symbol("key1")
        -> Use the [mySym] as a key inside the object
        -> Access it using Obj[mySym]
    
    6. Freeze the object using Object.freeze(obj_to_freeze) method
*/