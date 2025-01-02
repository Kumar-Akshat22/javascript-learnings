const userEmail = []

// if(userEmail){

//     console.log('Got User Email');
// } else{

//     console.log('Please enter an Email');
// }

// Checking whether the userEmail array has some elements or not
if(userEmail.length === 0){

    console.log("Array is Empty");
}

// Checking whether an Array is empty or not
const emptyObject = {}

if(Object.keys(emptyObject).length === 0){

    console.log('Object is empty');
}

/*
    Object.key(obj) -> returns an array of keys
    Object.key(obj).length -> returns the length of the array of keys
*/


// Interesting Operator
// Nullish Coalescing Operator ( ?? ) : null , undefined
// Generally, used when fetching Data from Db to handle null values
let val1;
val1 = 5 ?? 5;
val1 = null ?? 10;
val1 = undefined ?? 15;
val1 = null ?? 30 ?? 20;


console.log(val1);


// Terniary Operator
const price = 1000;
(price >= 900) ? console.log("Price greater than 900") : console.log("Price less than 900")



// falsy values
// false , 0 , -0 -> Negative Zero , BigInt 0n , "" -> Empty String , null , undefined , NaN

// truthy values
// "0" , 'false' , " " -> Space , [] -> Empty Array, {} -> Empty Object , function(){}
