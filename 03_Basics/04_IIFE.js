// Immediately Invoked Function Expressions


// Normal Function
// function chai(){

//     console.log(`DB Connected`);
// }

// chai();

// IIFE 
(function chai(){

    console.log(`DB Connected`);
})();

( () => {
    console.log(`DB Connected TWO`);
})();

// Passing parameters to an IIFE function
( (name)=>{

    console.log(`Welcome ${name}`);

})('Ram')


/* 

    NOTES:
        1. There are situations where we want the function to execute as soon as the server starts. In this case, IIFE are useful.
        2. Situations like Database Connection as soon as the server starts.
        3. IIFE are useful when we don't want the Global Scope to pollute the function scope. 
        4. When we are trying to use more than 1 IIFE functions, make sure that you put a semi-color ';' after every IIFE to stop the current function.

*/