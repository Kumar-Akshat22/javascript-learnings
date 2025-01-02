// Objects in JavaScript - Part 2
// More about Objects 

const valoUser = {}

valoUser.id = "123av"
valoUser.name = "Kr Akshat"
valoUser.isLoggedIn = false

// console.log(valoUser);

const regularUser = {

    email: "someOne@gmail.com",
    // Nesting inside objects
    fullName:{

        userFullName:
        {
            firstName: "Kumar",
            lastName: "Akshat",
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)

// Combining multiple objects
const obj1 = {1 : "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj4 = {5: "a" , 6: "b"}

// const obj3 = {obj1 , obj2} // This will not combine objects together rather it will just place them as sperate entities inside 'obj3'

// Use Object.assign() method
const obj3 = Object.assign({} , obj1 , obj2 , obj4);
// console.log(obj3);

// A more modern and easy way to combine objects -> Use spread (...) operator
const res = {...obj1 , ...obj2 , ...obj3}
console.log(res);

// Usually, when dealing with DB we get an array of objects
const users = [

    {
        id: 1,
        name:"Akshat",
        email:"a@gmail.com",

    },
    {
        id: 2,
        name:"Sonu",
        email:"s@gmail.com",
        
    },
    {
        id: 1,
        name:"Raman",
        email:"r@gmail.com",
        
    }

]

// Some useful methods for Object
console.log(Object.keys(valoUser)); // The datatype of the output is an array

console.log(Object.values(valoUser));

console.log(Object.entries(valoUser));

// Check whether the object contains a particular property or not
console.log(valoUser.hasOwnProperty('isLoggedin')); // 1st way
console.log(Object.hasOwn(valoUser , 'isLoggedIn')); // 2nd way