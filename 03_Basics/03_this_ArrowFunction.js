
// Understanding "this"

const user = {

    userName: "Akshat",
    price: 999,

    welcomeMessage: function(){
        
        console.log(`${this.userName} , welcome to the Website`);
        console.log(this);
    }
} 

// this always refers to the current context
// user.welcomeMessage();

// Let's change the username
// user.userName = "Sameer";

// user.welcomeMessage();

// console.log(this);

function chai(){

    const userName = "John Wick"
    console.log(this.userName); // undefined -> becuse we are inside a function
}

// chai();

const myFunc = function(){

    const userName = "John Wick"
    console.log(this.userName); // undefined -> becuse we are inside a function
}

// myFunc();

/*  ---------------------- Arrow function ---------------------- */

const myFunction = ()=>{

    const userName = "akshat"

    console.log(this) // empty object 
    console.log(this.userName) // undefined
} 

// myFunction();

// Following is the explicit return type of wirting the arrow function
// const addTwo = (num1 , num2)=>{

//     return num1+num2;
// }

// console.log(addTwo(4 , 5))

// Following is another way to write arrow functions
// const addTwo = (num1 , num2) => (num1+num2);


// console.log(addTwo(4 , 5))

// Return an object from an arrow function
const addTwo = (num1 , num2) => ({userName: "Akshat"});


console.log(addTwo(4 , 5))


/*

    NOTES:
        1. As the ES6 version of JavaScript came, a lot of new features were provided in this version.
        2. One of them is the arrow function that makes it easy to write functions in JS.

        3. this always refers to the current context 
        4. In Node environment, this refers to empty object at global scope
        5. In browser, this refers to the "window" object.
        6. Inside functions, we can't access the variables inside it using this.username, this.email etc. This is only done inside objects.

        7. Inside, arrow functions this refers to an empty object.


*/