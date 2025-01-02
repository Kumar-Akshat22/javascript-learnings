// All about scopes in JavaScript and more about var, let and const


// var c = 100; 
let a = 100;

// Let's understand the scope level issues associated with var
if(true){

    // This is Local Scope
    let a = 10
    const b = 20;
    var c = 30;

    // console.log('Inner Scope value of a: ' , a);


    // Above declared variable must be accessible inside current scope only but 'var c = 30' can be accessed outside this scope.
}


// console.log('Global Scope value of a: ' , a);
// console.log(b);
// console.log(c); // c is accesible even outside the scope of it's definition


/* ----------- Nested Scoping within functions ----------- */
function one(){

    const userName = "Akshat";

    function two(){

        // This is a nested function
        // This function has access to all the variables declared in it's parent function
        const website = "akshat.com";
        console.log(userName);
    }

    // console.log(website);
    two(); 
}

// one();


// Nested Scoping with Conditionals
if(true){

    const userName = "kAkshat";
    if(userName){

        const website = " leetcode"
        // console.log(userName + website);
    }

    // console.log(website);
}

// Interesting Example
console.log(addOne(5));

function addOne(num){

    return num+1;

}


addTwo(5); // Will give an error

const addTwo = function(num){
    
    return num+2;
}









/* 

NOTES:
    1. Earlier, when let was not introduced in JS, var was widely used but it had scope level issues.
    2. By this, I mean to say that variables declared using var are accessible even outside it's block level scope.
    3. { } -> This refers to a scope.
    4. To avoid above scope level issues, let was introduced which was very clear with it's scope.
    5. A 'let' variable declared inside a block scope can't be accessed outside it's scope.
    6. Node.js and Browser have different scope levels.

    7. In Javascript, variables are really powerful they can hold functions as well.

    8. Basically, inner functions can access the variables declared in the parent function but the other way is not true. This is the idea of closure 
*/
